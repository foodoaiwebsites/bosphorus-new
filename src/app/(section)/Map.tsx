
const Map = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center overflow-hidden">
            <div className="relative flex flex-col gap-4 h-fit lg:min-h-[60vh]  w-full  items-center justify-center px-4 lg:px-0 py-12 lg:py-24">
                <div className="w-full flex">
                    {/* <Image
                        src="/images/home/map/map.png"
                        width={1462}
                        height={597}
                        alt="map"
                    />
                    <Button className="hidden absolute rounded-full lg:flex flex-col h-fit lg:top-1/3 lg:left-1/2 px-2 py-2 lg:px-7 lg:py-7"><span>Get<br />Direction<br /></span> <ArrowUpRight /></Button> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.4092789861006!2d-1.5313305999999998!3d52.3992582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b270621f741%3A0x2ae96b4885385d6b!2sBosphorus%20Istanbul%20Restaurant!5e0!3m2!1sen!2sin!4v1738319017764!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[500px] grayscale invert hover:grayscale hover:invert"
                    ></iframe>
                </div>
            </div>
        </section >
    );
};

export default Map;
