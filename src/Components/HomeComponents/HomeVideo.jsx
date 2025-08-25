import React, { useState, useEffect } from "react";

export default function HomeVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const titleWords = "Welcome to SEMLA".split(" ");

  return (
    <>
      <div className="min-h-[100vh] overflow-hidden relative">
        <div className="relative continer mx-auto h-full">
          <div className="relative h-screen ">
            {/* Hero Video */}
            <div className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="Home/Hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Multi-layered Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70"></div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 pb-6 px-4">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  {/* Title Section */}
                  <div className="flex-1 max-w-5xl">
                    <div className="space-y-4">
                      {/* Animated Title Words */}
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
                          {titleWords.map((word, index) => (
                            <div
                              key={index}
                              className={`transform transition-all duration-1000 ease-out ${
                                isLoaded
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-full opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${index * 200 + 300}ms`,
                              }}
                            >
                              <h1 className="text-white font-black text-6xl sm:text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tight drop-shadow-2xl">
                                {word}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subtitle */}
                      <div
                        className={`transform transition-all duration-1000 ease-out ${
                          isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: "1500ms" }}
                      >
                        <p className="text-white text-lg lg:text-2xl font-extralight max-w-2xl leading-relaxed drop-shadow-lg">
                          Guiding students to achieve their dreams of studying
                          abroad with expert counseling, trusted guidance, and
                          personalized support every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div
                    className={`transform transition-all duration-1000 ease-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: "1800ms" }}
                  >
                    <div className="relative cursor-pointer">
                      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full px-8 py-2 lg:px-12 lg:py-4 text-center shadow-2xl border-4 border-white/20">
                        <div className="text-white font-bold text-xl lg:text-2xl mb-2">
                          Order Now
                        </div>
                        <div className="w-12 h-0.5 bg-white/60 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Background Elements */}
            <div
              className={`absolute top-1/4 left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform transition-all duration-2000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "-translate-x-16 opacity-0 -rotate-45"
              }`}
              style={{ transitionDelay: "1000ms" }}
            />

            <div
              className={`absolute top-1/3 right-12 w-24 h-24 bg-secondary/10 rounded-full blur-xl transform transition-all duration-2000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "translate-x-16 opacity-0 rotate-45"
              }`}
              style={{ transitionDelay: "1200ms" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
