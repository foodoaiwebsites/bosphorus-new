import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuData = {
  food: [
    {
      name: "Beef burger meal",
      description:
        "Classic greek salad, barrel aged feta cheese, bread",
      price: 32,
    },
    {
      name: "Roasted lamb rump",
      description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
      price: 25,
    },
    {
      name: "Pan seared sea bass",
      description:
        "Saffron and mussel’s broth, new potatoes, edamame beans",
      price: 38,
    },
    {
      name: "King prawns and lobster",
      description: "Creamy saffron, sauce Vierge",
      price: 38,
    },
    {
      name: "Citrus cured salmon",
      description:
        "Horseradish creme fraiche, beetroot mousse, oil",
      price: 41,
    },
  ],
  drinks: [
    {
      name: "Pan seared scallops",
      description:
        "Saffron, celeriac puree, black pudding, olive oil",
      price: 29,
    },
    {
      name: "Baked Camembert",
      description:
        "Red onion marmelade, garlic Foccacia bread, grilled figs",
      price: 25,
    },
    {
      name: "TUTTI Braised ox cheek ravioli",
      description:
        "Mediterranean olives casserole, celeriac puree, mushrooms",
      price: 23,
    },
    {
      name: "Corn fed chicken",
      description:
        "Wild mushrooms, truffle potatoes, braised leeks, carrots",
      price: 17,
    },
    {
      name: "Nduja pork chicken terrine",
      description:
        "Smoked duck breast, pistachio, smoked pancetta",
      price: 41,
    },
  ],
};

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
      <div className="absolute right-0 top-0 w-full h-full md:block"
      style={{
        backgroundImage:"url('/images/home/topbg.png'),url('/images/home/bottombg.png')",
        backgroundPosition:"top left, bottom right",
        backgroundRepeat:"no-repeat",
        backgroundSize:"60%,60%"
      }}
      >
      </div>
      <div className="relative flex h-full w-full flex-col items-center gap-4 z-40">
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <h6 className="text-center font-open_sans text-4xl font-[400] uppercase text-[#D3A641] md:text-5xl md:tracking-[8px]">
               From our menu
            </h6>
          </div>
        </div>

        <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-20 2xl:gap-40">
          {/* Food Items */}
          <div className="flex flex-col gap-6 md:gap-14">
            {menuData.food.map((item, index) => (
            <div
            key={`food-item-${index}`}
            className="flex w-full flex-row items-center gap-4"
          >
            {/* Left Content */}
            <div className="flex flex-col md:w-[488px]">
              <p className="font-inter text-base font-semibold uppercase text-[#D3A641] md:text-lg md:tracking-[3px]">
                {item.name}
              </p>
              <p className="text-[#afafaf] font-inter text-sm font-light md:text-base">
                {item.description}
              </p>
            </div>
          
            {/* Spacer with Lines */}
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center gap-2">
                <div className="flex-1">
                  <div className="h-[1px] w-full bg-[#D3A641]" />
                  <div className="h-[1px] w-full bg-[#D3A641] mt-1" />
                </div>
                {/* Price */}
                <p className="font-inter text-lg font-medium uppercase tracking-[0.57px] text-[#D3A641] whitespace-nowrap">
                  £{item.price}
                </p>
              </div>
            </div>
          </div>
                 
            ))}
          </div>

          {/* Drink Items */}
          <div className="flex flex-col gap-6 md:gap-14">
            {menuData.drinks.map((item, index) => (
            <div
            key={`food-item-${index}`}
            className="flex w-full flex-row items-center gap-4"
          >
            {/* Left Content */}
            <div className="flex flex-col md:w-[488px]">
              <p className="font-inter text-base font-semibold uppercase text-[#D3A641] md:text-lg md:tracking-[3px]">
                {item.name}
              </p>
              <p className="text-[#afafaf] font-inter text-sm font-light md:text-base">
                {item.description}
              </p>
            </div>
          
            {/* Spacer with Lines */}
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center gap-2">
                <div className="flex-1">
                  <div className="h-[2px] w-full bg-[#D3A641]" />
                  <div className="h-[2px] w-full bg-[#D3A641] mt-1" />
                </div>
                {/* Price */}
                <p className="font-inter text-lg font-medium uppercase tracking-[0.57px] text-[#D3A641] whitespace-nowrap">
                  £{item.price}
                </p>
              </div>
            </div>
          </div>
          
           
            ))}
          </div>
        </div>

        <div>
        <Link href={"/menu"}>
          <Button
            className="relative z-40 flex items-center justify-center gap-3 px-7 py-7 mt-10 uppercase rounded-none text-black bg-[#D3A641]"
          >
            View Menu
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
