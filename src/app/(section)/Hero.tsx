import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimpleAccountingHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 pt-16 lg:pt-2">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Animated floating geometric shapes */}
        <div className="absolute right-1/4 top-1/4 h-32 w-32 animate-pulse rounded-full bg-blue-500/5 blur-3xl"></div>
        <div
          className="left-1/5 absolute bottom-1/3 h-24 w-24 animate-bounce rounded-full bg-cyan-400/5 blur-2xl"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute left-1/4 top-1/3 h-16 w-16 rotate-45 animate-spin rounded-lg bg-indigo-400/10"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="right-1/5 absolute bottom-1/4 h-20 w-20 animate-pulse rounded-full bg-slate-400/5"
          style={{ animationDuration: "2s" }}
        ></div>

        {/* Additional floating elements */}
        <div
          className="right-1/6 bg-blue-400/8 absolute top-1/2 h-12 w-12 animate-ping rounded-full"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="left-1/6 bg-cyan-300/6 absolute bottom-1/2 h-10 w-10 rotate-12 animate-bounce rounded-lg"
          style={{ animationDuration: "2.5s" }}
        ></div>

        {/* Animated math symbols with floating effect */}
        <div
          className="top-1/5 absolute right-1/3 animate-bounce text-6xl font-light text-white/5"
          style={{ animationDuration: "4s" }}
        >
          ∑
        </div>
        <div
          className="bottom-1/5 absolute left-1/3 animate-pulse text-4xl font-light text-white/5"
          style={{ animationDuration: "3s" }}
        >
          π
        </div>
        <div
          className="right-1/6 absolute top-2/3 animate-bounce text-3xl font-light text-white/5"
          style={{ animationDuration: "5s" }}
        >
          %
        </div>
        <div
          className="top-1/6 left-1/6 absolute animate-pulse text-2xl font-light text-white/5"
          style={{ animationDuration: "2.5s" }}
        >
          ∆
        </div>

        {/* Moving gradient orbs */}
        <div
          className="absolute left-0 top-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 opacity-30 blur-3xl"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 h-80 w-80 animate-bounce rounded-full bg-gradient-to-l from-indigo-600/10 to-blue-500/10 opacity-20 blur-3xl"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Subtle floating lines */}
        <div
          className="absolute left-1/2 top-1/4 h-32 w-px animate-pulse bg-gradient-to-b from-transparent via-white/5 to-transparent"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/2 h-px w-32 animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ animationDuration: "4s" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-transparent"></div>

        {/* Additional depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/30"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen items-center py-8 lg:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:space-y-8 lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Master Professional{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Accounting Skills
                  </span>
                </h1>

                <p className="mx-auto max-w-lg text-base text-gray-300 sm:text-lg lg:mx-0 lg:text-xl">
                  Transform your career with industry-leading accounting courses
                  designed by experts for real-world success.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start lg:gap-6">
                <Link href="/programs">
                  <button className="group inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto lg:px-8 lg:py-4">
                    Explore Programs
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 lg:h-5 lg:w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </Link>

                <Link href="/contact">
                  <button className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-white hover:text-white sm:w-auto lg:px-8 lg:py-4">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Stats - Hidden on mobile and tablet */}
              <div className="hidden flex-wrap justify-center gap-6 pt-2 lg:justify-start lg:gap-8 lg:pt-4 xl:flex">
                <div className="text-center lg:text-left">
                  <div className="text-xl font-bold text-white lg:text-2xl">
                    500+
                  </div>
                  <div className="text-xs text-gray-400 lg:text-sm">
                    Students Trained
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl font-bold text-white lg:text-2xl">
                    95%
                  </div>
                  <div className="text-xs text-gray-400 lg:text-sm">
                    Success Rate
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl font-bold text-white lg:text-2xl">
                    10+
                  </div>
                  <div className="text-xs text-gray-400 lg:text-sm">
                    Expert Instructors
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    width={800}
                    height={533}
                    src="/images/home/hero/hero.webp"
                    alt="Professional accounting workspace"
                    className="h-[250px] w-full object-cover sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Cards - Progressive visibility */}
                <div className="absolute -bottom-3 -left-3 hidden rounded-xl bg-white p-3 shadow-lg sm:-bottom-4 sm:-left-4 sm:block lg:-bottom-6 lg:-left-6 lg:p-4">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Certified Training
                      </div>
                      <div className="hidden text-xs text-gray-600 md:block">
                        Industry Recognized
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-3 -top-3 hidden rounded-xl bg-white p-3 shadow-lg sm:-right-4 sm:-top-4 sm:block lg:-right-6 lg:-top-6 lg:p-4">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Expert Support
                      </div>
                      <div className="hidden text-xs text-gray-600 md:block">
                        24/7 Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <div className="animate-bounce">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleAccountingHero;
