export interface RefreshPayment {
    _idRestaurant: string;
    _idRestaurantTable: (string | null)[];
    _idRestaurantUser: string | null;
    restaurantUserName: string;
    _idRestaurantDevice: string | null;
    restaurantDeviceName: string;
    orderType: number;
    deliveryTime: string | null;
    totalAmount: number;
    courseAway: string | null;
    orderStatus: string;
    deliveryCharge:{
      amount:number;
    };
    totalDiscount: number;
    notes: string;
    transactionId: string;
    transactionStatus: string;
    transactionMessage: string | null;
    tip: number;
    serviceCharge: number;
    totalCartAmount: number;
    vat: number;
    _id: string;
    deviceName: string;
    description: string;
    userDetails: {
        name: string;
        email: string;
        phone: {
            number: string;
        };
        address: {
            shipping: {
                address: string;
                pincode: string;
                city: string;
            };
            billing: {
                address: string;
                pincode: string;
                city: string;
            };
        };
    };
    cart: {
        menuItemName: string;
        modifiers: {
            _idMenuItem: string;
            _idModifiers: string;
            quantity: number;
            menuItem: {
                description: string;
                name: string;
            };
            price: {
                currency: string;
                value: number;
                _id: string;
            };
        }[];
        _idRestaurantCourse: string | null;
        restaurantCourseName: string;
        price: {
            value: number;
            currency: string;
            _id: string;
        };
        quantity: number;
        notes: string;
        options: string;
        _id: string;
        _idMenuItem: string;
    }[];
    charges: {        
        chargeItems:chargeItem[];
        chargeAmount:number;
    };
    discountType: number;
    totalpayment: number;
    paymentType: number;
    onlinePayemtInfo: {
        status: string;
        transactionId: string;
        updatedAt: string;
        createdAt: string;
    }[];
    createdAt: string;
    orderRef:string;
    updatedAt: string;
    __v: number;
}

interface chargeItem {
    isPercentage: boolean;
    isActive: boolean;
    _id: string;
    name: string;
    value: number;
}
