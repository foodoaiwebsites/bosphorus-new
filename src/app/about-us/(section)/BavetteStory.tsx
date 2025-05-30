import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The Bosphorus<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.png"
              width={1109}
              height={1600}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none md:h-[600px]"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl sm:text-7xl md:text-start">
              From Dream<br /> to Flavor
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Located in the heart of Coventry, Bosphorus Istanbul is a tribute to Turkey’s rich culinary heritage. Inspired by the vibrant flavors of Istanbul, we bring authentic recipes that capture the essence of Turkish cuisine. From the sizzling grills to the comforting warmth of traditional dishes, every bite tells a story of passion and tradition.
              <br />
              <br />
              Our menu is a journey through Turkey’s most beloved flavors, featuring everything from succulent kebabs to the sweet delight of baklava. Paired with warm hospitality and a cozy atmosphere, Bosphorus Istanbul isn’t just a place to dine—it’s a taste of Istanbul, right here in Coventry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
