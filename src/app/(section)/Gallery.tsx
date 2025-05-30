import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pb-12 pt-12 md:pb-24 md:pt-0">
      <div className="left-0 right-0 top-0 hidden md:block">
        <h1
          className="w-full font-open_sans text-6xl text-[18vw] font-[600] uppercase tracking-[-16px]"
          style={{
            background:
              "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: "scaleX(1.4)",
            transformOrigin: "left",
            whiteSpace: "nowrap",
          }}
        >
          Gallery
        </h1>
      </div>
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2 md:hidden">
          <div>
            <h1
              className="text-center font-open_sans text-6xl font-[600] uppercase md:text-8xl"
              style={{
                background:
                  "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gallery{" "}
            </h1>
          </div>
        </div>
        <div className="flex w-full flex-col bg-[#fff] md:flex-row">
          <div className="grid w-full grid-cols-1 gap-4 bg-[#fff] px-4 md:w-[55%] md:grid-cols-2 md:px-0">
            <Image
              src={"/images/home/gallery/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image4.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
          </div>
          <div className="relative flex w-full flex-col gap-2 md:w-[45%]">
            <div className="absolute inset-0 z-50 hidden items-center justify-center md:flex">
              <div className="flex flex-col gap-6">
                <Image
                  src={"/images/home/gallery/image4.png"}
                  width={281}
                  height={74}
                  alt="image"
                  className="h-[300px] w-[270px] object-cover md:h-[250px]"
                />
                <Image
                  src={"/images/home/gallery/image4.png"}
                  width={281}
                  height={74}
                  alt="image"
                  className="h-[300px] w-[270px] object-cover md:h-[250px]"
                />
              </div>
            </div>
            <div className="absolute -top-6 left-4 hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* second one  */}
            <div className="absolute -top-6 left-[48%] z-20 hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* tird one  */}
            <div className="absolute -top-6 left-[25%] hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth one  */}
            <div className="absolute -top-6 left-[72%] z-30 hidden md:block">
              <div className="flex flex-col">
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1
                      className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile screen start */}
        <div className="relative flex h-[450px] w-full flex-col gap-2 md:w-[45%]">
          <div className="absolute inset-0 z-50 ml-12 mt-10 items-center justify-center md:hidden">
            <div className="flex flex-col gap-6">
              <Image
                src={"/images/home/gallery/image4.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[200px] w-[270px] object-cover md:h-[250px]"
              />
              <Image
                src={"/images/home/gallery/image4.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[200px] w-[270px] object-cover md:h-[250px]"
              />
            </div>
          </div>
          <div className="absolute left-6 top-4 md:hidden">
            <div className="z-0 flex flex-col">
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* second one  */}
          <div className="absolute left-[28%] top-4 z-20 md:hidden">
            <div className="z-0 flex flex-col">
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* tird one  */}
          <div className="absolute left-[48%] top-4 z-20 md:hidden">
            <div className="z-0 flex flex-col">
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* fourth one  */}
          <div className="absolute left-[72%] top-4 z-20 md:hidden">
            <div className="z-0 flex flex-col">
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile screen end */}
      </div>
    </section>
  );
};

export default Gallery;
