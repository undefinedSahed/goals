import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="bg-[#cab694] lg:rounded-t-[20px] lg:py-32 py-16">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between gap-10 lg:gap-0">
          {/* {/ Left side - 4 Phone screens /} */}
          <div className="lg:w-[48%] w-full">
            <div className="relative flex justify-center">
              {/* {/ First phone /} */}
              <div className="relative w-24 h-32 md:w-52 md:h-80 rounded-xl z-10 mr-4 rotate-6">
                <Image
                  src="/assets/featuresection/mobile1.png"
                  alt="Goals app dark theme interface"
                  fill
                />
              </div>

              {/* {/ Second phone /} */}
              <div className="relative w-24 h-32 md:w-52 md:h-80 rounded-xl overflow-hidden rotate-16 z-20">
                <Image
                  src="/assets/featuresection/mobile2.png"
                  alt="Goals app chat interface"
                  fill
                  className=""
                />
              </div>

              {/* {/ Third phone /} */}
              <div className="relative w-24 h-32 md:w-60 md:h-80 rounded-xl overflow-hidden -ml-6 mt-4 rotate-6 z-30">
                <Image
                  src="/assets/featuresection/mobile3.png"
                  alt="Goals app login screen"
                  fill
                  className=""
                />
              </div>

              {/* {/ Fourth phone /} */}
              <div className="relative w-24 h-32 md:w-52 md:h-80 rounded-xl overflow-hidden -mt-2 -rotate-3 z-30">
                <Image
                  src="/assets/featuresection/mobile4.png"
                  alt="Goals app finance goals"
                  fill
                  className=""
                />
              </div>
            </div>

            {/* {/ Bottom text /} */}
            <p className="lg:text-[40px] md:text-[32px] text-[24px] text-white leading-[100%] font-normal text-center mt-8">
              Choose from 7 vibrant colors to match your personality and mood each day, creating a fresh tracking experience uniquely yours.
            </p>
          </div>

          {/* {/ Right side - Text and color palette /} */}
          <div className="lg:w-[48%] w-full">
            <div className="flex justify-center">
              {/* {/ Top text /} */}
              <div className="">
                <p className="lg:text-[40px] md:text-[32px] text-[24px] text-white leading-[100%] font-normal text-center mb-4 md:mb-10 lg:mb-10">
                  With private messaging for easy goal collaboration, notification
                  alerts, and a simple login process, Goals makes setting and
                  achieving your goals effortless.
                </p>

                <div className="relative lg:w-[600px] w-full lg:h-[300px] md:h-[300px] h-[200px] mx-auto lg:mx-0">
                  <Image
                    src="/assets/featuresection/allmobiles.png"
                    alt="Mobile view screenshot"
                    fill
                    className=""
                  />
                  {/* <div className="relative">
                    <div className="absolute left-0 top-0 z-10">
                      <div className="relative w-20 h-44 lg:w-36 lg:h-80">
                        <Image
                          src="/assets/featuresection/color/color2.png"
                          alt="Goals app dark theme interface"
                          fill
                          className=""
                        />
                      </div>
                    </div>
                    <div className="absolute left-[50px] lg:left-[80px] top-0 z-10">
                      <div className="relative lg:w-36 lg:h-80 w-20 h-44">
                        <Image
                          src="/assets/featuresection/color/color1.png"
                          alt="Goals app dark theme interface"
                          fill
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-[100px] lg:left-[160px] top-0 z-30">
                      <div className="relative lg:w-36 lg:h-80 w-20 h-44">
                        <Image
                          src="/assets/featuresection/color/color5.png"
                          alt="Goals app dark theme interface"
                          fill
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-[150px] lg:left-[240px] top-0 z-40">
                      <div className="relative lg:w-36 lg:h-80 w-20 h-44">
                        <Image
                          src="/assets/featuresection/color/color7.png"
                          alt="Goals app dark theme interface"
                          fill
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-[200px] lg:left-[320px] top-0 z-50">
                      <div className="relative lg:w-36 lg:h-80 w-20 h-44">
                        <Image
                          src="/assets/featuresection/color/color6.png"
                          alt="Goals app dark theme interface"
                          fill
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-[250px] lg:left-[400px] top-0 z-50">
                      <div className="relative lg:w-36 lg:h-80 w-20 h-44">
                        <Image
                          src="/assets/featuresection/color/color4.png"
                          alt="Goals app dark theme interface"
                          fill
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-[300px] lg:left-[480px] top-0 z-50">
                      <div className="relative lg:w-36 lg:h-80 w-20 h-44">
                        <Image
                          src="/assets/featuresection/color/color3.png"
                          alt="Goals app dark theme interface"
                          fill
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
