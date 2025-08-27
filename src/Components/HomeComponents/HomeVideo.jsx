import React, { useState, useEffect, useRef } from "react";

export default function HomeVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleWords = "Welcome to SEMLA".split(" ");

  return (
    <>
      <div className="min-h-[100vh] overflow-hidden relative">
        <div className="relative  h-full">
          <div className="relative h-screen">
            {/* Hero Video with Parallax */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="h-[120%] w-full object-cover"
              >
                <source src="Home/Hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Enhanced Multi-layered Gradient Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>

            {/* Animated Particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-white/20 rounded-full transform transition-all duration-3000 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 8}%`,
                    animationDelay: `${i * 0.5}s`,
                    animation: isLoaded
                      ? `float ${3 + i * 0.5}s ease-in-out infinite alternate`
                      : "none",
                  }}
                />
              ))}
            </div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 pb-8 px-4">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  {/* Enhanced Title Section */}
                  <div className="flex-1 max-w-6xl">
                    <div className="space-y-6">
                      {/* Animated Title Words with Enhanced Effects */}
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
                              <h1 className="text-white font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
                                {word}
                                {/* Glowing Effect */}
                                <span className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text opacity-0 hover:opacity-30 transition-opacity duration-500">
                                  {word}
                                </span>
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Description */}
                      <div
                        className={`transform transition-all duration-1000 ease-out ${
                          isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: "1500ms" }}
                      >
                        <p className="text-white text-lg lg:text-2xl font-light max-w-3xl leading-relaxed drop-shadow-lg backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                          Guiding students to achieve their dreams of studying
                          abroad with expert counseling, trusted guidance, and
                          personalized support every step of the way.
                        </p>
                      </div>

                      {/* New Stats Section */}
                      <div
                        className={`transform transition-all duration-1000 ease-out ${
                          isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: "1700ms" }}
                      >
                        <div className="flex flex-wrap gap-4 mt-8">
                          {[
                            { number: "500+", label: "Students Placed" },
                            { number: "50+", label: "Partner Universities" },
                            { number: "15+", label: "Countries" },
                          ].map((stat, index) => (
                            <div key={index} className="text-center">
                              <div className="text-2xl lg:text-4xl font-bold text-white drop-shadow-lg">
                                {stat.number}
                              </div>
                              <div className="text-sm lg:text-base text-white/80 font-light">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <div
                    className={`transform transition-all duration-1000 ease-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: "1800ms" }}
                  >
                    <div className="flex flex-col gap-4 hidden md:block">
                      <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10">
                          Start Your Journey
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </button>

                      <button className="px-6 py-3 border-2 border-white/30 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                        Watch Our Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Background Elements */}
            <div
              className={`absolute top-1/4 left-8 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform transition-all duration-3000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "-translate-x-16 opacity-0 -rotate-45"
              }`}
              style={{
                transitionDelay: "1000ms",
                animation: isLoaded
                  ? "pulse 4s ease-in-out infinite alternate"
                  : "none",
              }}
            />

            <div
              className={`absolute top-1/3 right-12 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-2xl transform transition-all duration-3000 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "translate-x-16 opacity-0 rotate-45"
              }`}
              style={{
                transitionDelay: "1200ms",
                animation: isLoaded
                  ? "pulse 3s ease-in-out infinite alternate-reverse"
                  : "none",
              }}
            />

            <div
              className={`absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl transform transition-all duration-2500 ${
                isLoaded
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "-translate-y-16 opacity-0 rotate-90"
              }`}
              style={{
                transitionDelay: "1400ms",
                animation: isLoaded ? "float 5s ease-in-out infinite" : "none",
              }}
            />

            {/* Scroll Indicator */}
            <div
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "2000ms" }}
            >
              <div className="flex flex-col items-center text-white/60 animate-bounce">
                <span className="text-sm mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}
