import { Icons } from "@/components/Icon";
import ScheduleTImePopup from "@/components/popups/ScheduleTimePopup";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { calculateServiceCharge } from "@/lib/calculate-service-charge";
import { cn } from "@/lib/utils";
import type { CartItemModifier } from "@/types/cart-item.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import { format } from "date-fns";
import { Calendar, CalendarClock } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
    name: z.string().min(2, "Oops! We need your name to personalise your delicious order. Please enter it to continue."),
    phone: z
        .string()
        .min(11, "Oops! That phone number doesn’t seem right. We need it to keep you updated on your order.")
        .max(11, "Oops! That phone number doesn’t seem right. We need it to keep you updated on your order."),
    email: z.string().min(2, "Oops! That email doesn’t look right. We need it to send you your delicious meal details.").email(),
    address: z.string().min(2, "please enter address"),
    city: z.string().min(2, "please enter city"),
    pinCode: z.string().min(2, "please enter pincode"),
    notes: z.string().optional(),
});

interface ScheduleTime {
    time: string; // Change to the appropriate type
    date: string; // Change to the appropriate type (e.g., Date, string, etc.)
}

interface DeliveryProps {
    setDeliveryCharge: (value: number | null) => void;
    deliveryCharge: number | null;
}

interface errordata {
    response: {
        data: {
            success: boolean;
            code: number;
            msg: string;
        };
    };
}

type FormData = z.infer<typeof FormValidation>;

type DeliveryData = {
    name?: string;
    phone?: string;
    email?: string;
    notes?: string;
    address?: string;
    city?: string;
    pinCode?: string;
    scheduleTime: {
        time?: string;
        date?: string;
    };
    pickup: string;
};

const Delivery: FC<DeliveryProps> = ({ setDeliveryCharge, deliveryCharge }) => {
    const { apiUrl, restaurantID, restaurant } = useRestaurant();
    const { cartValue } = useCart();
    const router = useRouter();
    const { cartItems } = useCart();
    const parsedPickup = JSON.parse(localStorage.getItem("delivery") as string) as DeliveryData;
    const [pickup, setPickUp] = useState<string>(parsedPickup?.pickup ? parsedPickup.pickup : "Standard");
    const [scheduleTime, setScheduleTime] = useState<ScheduleTime>({
        time: parsedPickup?.scheduleTime?.time ? parsedPickup?.scheduleTime.time : "",
        date: parsedPickup?.scheduleTime?.date ? parsedPickup?.scheduleTime.date : "",
    });

    const form = useForm<FormData>({
        resolver: zodResolver(FormValidation),
    });

    const finalCart = cartItems.map((item) => {
        const modifierCount: Record<string, CartItemModifier & { quantity: number }> = {};

        item.modifiers.forEach((modifier) => {
            if (!modifier.price._id) return; // Ensure price._id exists before processing

            const key = modifier.price._id; // Use only price._id as the key

            if (modifierCount[key]) {
                modifierCount[key].quantity += 1;
            } else {
                modifierCount[key] = { ...modifier, quantity: 1 };
            }
        });

        return {
            ...item,
            modifiers: Object.values(modifierCount), // Convert object back to array
        };
    });
    const dateStr = scheduleTime?.date ?? "1970-01-01";
    const timeStr = scheduleTime?.time?.split("-")[0] ?? "00:00";

    const [hours, minutes] = timeStr.split(":");
    const sheduleDate = new Date(dateStr);
    if (hours && minutes) {
        sheduleDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    }
    const { mutate, isPending } = useMutation({
        mutationFn: async (data: FormData) => {
            const res: AxiosResponse<{
                data: {
                    _id: string;
                    orderType: number;
                    totalAmount: number;
                };
            }> = await axios.post(`${apiUrl}/orders`, {
                _idRestaurant: restaurantID,
                orderType: 2,
                deliveryType: pickup === "Standard" ? "standard" : "scheduled",
                deliveryTime:
                    pickup === "Standard"
                        ? new Date(Date.now() + Number(restaurant?.totalDeliveryETA) * 60000).toISOString()
                        : new Date(sheduleDate).toISOString(),
                description: "Order for " + data.name,
                orderStatus: "placed_order",
                items: finalCart,
                notes: data.notes,
                userDetails: {
                    name: data.name,
                    email: data.email,
                    phone: {
                        number: data.phone,
                    },
                    address: {
                        shipping: {
                            address: data.address,
                            pincode: data.pinCode,
                            city: data.city,
                        },
                        billing: {
                            address: data.address,
                            pincode: data.pinCode,
                            city: data.city,
                        },
                    },
                },
                // New Additions
                tip: 0,
                serviceCharge: calculateServiceCharge(cartValue(), restaurant?.serviceCharge ?? 0),
                preview: false,
            });

            return res.data.data;
        },
        onSuccess: (data) => {
            toast("Order created successfully");
            if (data?.orderType === 2) {
                localStorage.setItem("totalAmount", data?.totalAmount.toString());
            }
            if (data?.orderType === 2 && deliveryCharge !== null) {
                const totalAmount = data.totalAmount + deliveryCharge;
                localStorage.setItem("totalAmount", totalAmount.toString());
            }
            router.push("/payment/" + data._id);
        },
        onError: (error: errordata) => {
            toast.error(error?.response?.data?.msg);
        },
    });
    useEffect(() => {
        const localpickup = localStorage.getItem("delivery");
        if (localpickup) {
            // form.setValue('name')
            const parsedPickup = JSON.parse(localpickup) as DeliveryData;
            form.setValue("name", parsedPickup.name as string);
            form.setValue("phone", parsedPickup.phone as string);
            form.setValue("email", parsedPickup.email as string);
            form.setValue("notes", parsedPickup.notes as string);
            form.setValue("address", parsedPickup.address as string);
            form.setValue("city", parsedPickup.city as string);
            form.setValue("pinCode", parsedPickup.pinCode as string);
            if (parsedPickup.pickup) {
                setPickUp(parsedPickup.pickup);
                if (parsedPickup.pickup === "Standard") {
                    setScheduleTime({
                        date: "",
                        time: "",
                    } as ScheduleTime);
                }
            }
            if ((parsedPickup?.scheduleTime as ScheduleTime) && parsedPickup.scheduleTime.date !== undefined && parsedPickup.scheduleTime.time !== undefined) {
                setScheduleTime({
                    date: parsedPickup?.scheduleTime?.date?.toString(),
                    time: parsedPickup?.scheduleTime?.time?.toString(),
                } as ScheduleTime);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "delivery",
            JSON.stringify({
                name: form.watch("name"),
                phone: form.watch("phone"),
                email: form.watch("email"),
                notes: form.watch("notes"),
                address: form.watch("address"),
                city: form.watch("city"),
                pinCode: form.watch("pinCode"),
                scheduleTime: {
                    time: scheduleTime.time,
                    date: scheduleTime.date,
                },
                pickup: scheduleTime.time ? "Schedule" : "Standard",
            })
        );
    }, [form.watch("name"), scheduleTime, form.watch("phone"), form.watch("email"), form.watch("notes"), form, pickup]);

    useEffect(() => {
        if (scheduleTime.time) {
            setPickUp("Schedule");
        }
    }, [scheduleTime.time]);

    const onSubmit = (data: FormData) => {
        mutate(data);
    };

    const { mutate: postMutate } = useMutation({
        mutationFn: async () => {
            const res: AxiosResponse<{
                data: {
                    deliveryCharge: number;
                };
            }> = await axios.post(`${apiUrl}/orders/delivery-charge`, {
                _idRestaurant: restaurant?._id,
                shippingPincode: form.watch("pinCode"),
            });

            return res.data.data;
        },
        onSuccess: (data) => {
            // toast("Added Delivery Charge");
            setDeliveryCharge(data?.deliveryCharge);
        },
        onError: () => {
            setDeliveryCharge(null);
            // toast.error(error?.response?.data?.msg);
        },
    });

    useEffect(() => {
        if (form.watch("pinCode")?.length >= 5 && form.watch("pinCode")?.length <= 8) {
            postMutate();
        } else {
            setDeliveryCharge(null);
        }
    }, [form.watch("pinCode")]);

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                    <div className="flex w-full flex-col items-start justify-between gap-3 border-b-[2px] border-borderinput py-3 pb-5">
                        <p className="w-full text-xl font-semibold text-menusecondary">Delivery Time</p>
                        <div className="flex w-full flex-col gap-3 px-1 py-1">
                            <div
                                className={cn("flex w-full items-center gap-3 border-[2px] border-borderinput px-4 py-3 lg:w-2/3", pickup === "Standard" && "border-inputbg")}
                                onClick={() => {
                                    setPickUp("Standard");
                                    setScheduleTime({
                                        date: "",
                                        time: "",
                                    } as ScheduleTime);
                                }}
                            >
                                <Calendar stroke="#000"/>
                                <div className="flex flex-col">
                                    <p className="text-lg font-semibold text-menusecondary">Standard</p>
                                    <p className="text-menusecondary">{restaurant?.totalDeliveryETA} min</p>
                                </div>
                            </div>
                            <ScheduleTImePopup setScheduleTime={setScheduleTime} orderType="Delivery">
                                <div
                                    className={cn(
                                        "flex w-full items-center gap-3 border-[2px] border-borderinput px-4 py-3 lg:w-2/3",
                                        pickup === "Schedule" && "border-inputbg"
                                    )}
                                >
                                    <CalendarClock stroke="#000"/>
                                    <div className="flex flex-col">
                                        <p className="text-lg font-semibold text-menusecondary">Schedule</p>
                                        <p className="text-menusecondary">
                                            {scheduleTime.date || scheduleTime.time ? `${format(scheduleTime?.date, "dd-MM-yyyy")},\u00A0${scheduleTime.time} ` : "Choose a time"}
                                        </p>
                                    </div>
                                </div>
                            </ScheduleTImePopup>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 border-b-[2px] border-b-borderinput pb-7 pt-7">
                        <div className="w-full lg:w-2/6">
                            <p className="text-lg font-semibold text-menusecondary">Contact Details</p>
                        </div>
                        <div className="flex w-full flex-col gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full lg:w-4/5">
                                        <FormControl>
                                            <Input
                                                placeholder="Name"
                                                {...field}
                                                className="h-12 rounded-none border-b-[3px] text-black border-l-0 border-r-0 border-t-0 border-b-borderinput bg-inputbg outline-none placeholder:text-placeholder focus-visible:border-b-[2px] focus-visible:border-b-menuprimary focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="w-full lg:w-4/5">
                                        <FormControl>
                                            <Input
                                                placeholder="Phone Number"
                                                {...field}
                                                className="h-12 rounded-none border-b-[3px] text-black border-l-0 border-r-0 border-t-0 border-b-borderinput bg-inputbg outline-none placeholder:text-placeholder focus-visible:border-b-[2px] focus-visible:border-b-menuprimary focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full lg:w-4/5">
                                        <FormControl>
                                            <Input
                                                placeholder="Email ID"
                                                {...field}
                                                className="h-12 rounded-none border-b-[3px] text-black border-l-0 border-r-0 border-t-0 border-b-borderinput bg-inputbg outline-none placeholder:text-placeholder focus-visible:border-b-[2px] focus-visible:border-b-menuprimary focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 border-b-[2px] border-b-borderinput pb-7 pt-7">
                        <div className="w-full lg:w-2/6">
                            <p className="text-lg font-semibold text-menusecondary">Delivery Address</p>
                        </div>
                        <div className="flex w-full flex-col gap-6">
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="w-full lg:w-4/5">
                                        <FormControl>
                                            <Input
                                                placeholder="Building/House/flat No/floor"
                                                {...field}
                                                className="h-12 rounded-none border-b-[3px] text-black border-l-0 border-r-0 border-t-0 border-b-borderinput bg-inputbg outline-none placeholder:text-placeholder focus-visible:border-b-[2px] focus-visible:border-b-menuprimary focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem className="w-full lg:w-4/5">
                                        <FormControl>
                                            <Input
                                                placeholder="City"
                                                {...field}
                                                className="h-12 rounded-none border-b-[3px] text-black border-l-0 border-r-0 border-t-0 border-b-borderinput bg-inputbg outline-none placeholder:text-placeholder focus-visible:border-b-[2px] focus-visible:border-b-menuprimary focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pinCode"
                                render={({ field }) => (
                                    <FormItem className="w-full lg:w-4/5">
                                        <FormControl>
                                            <Input
                                                placeholder="PostCode"
                                                {...field}
                                                className="h-12 rounded-none border-b-[3px] text-black border-l-0 border-r-0 border-t-0 border-b-borderinput bg-inputbg outline-none placeholder:text-placeholder focus-visible:border-b-[2px] focus-visible:border-b-menuprimary focus-visible:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="notes"
                                render={({ field }) => (
                                    <FormItem className="flex w-full flex-col gap-2">
                                        <FormLabel className="flex cursor-pointer items-center gap-2 pt-10 text-menusecondary">
                                            <Icons.pencil />
                                            Packing/Delivery Instructions
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea rows={3} className="border-none bg-inputbg placeholder:text-placeholder lg:w-4/5 text-black" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="flex w-full flex-col pt-7 lg:w-4/5 lg:flex-row">
                        <div className="fixed bottom-0 left-0 flex w-full flex-col gap-2 border-t-[1px] border-t-borderinput bg-background md:static md:px-0 md:py-0">
                            <Button
                                className="h-16 w-full rounded-none bg-menuprimary text-lg font-bold uppercase tracking-[1px] text-menuforeground hover:bg-buttonhover"
                                disabled={isPending}
                            >
                                Place Delivery Order
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default Delivery;
