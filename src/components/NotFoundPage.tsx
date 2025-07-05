import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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

        {/* Animated floating shapes */}
        <div className="absolute right-1/4 top-1/4 h-32 w-32 animate-pulse rounded-full bg-blue-500/5 blur-3xl"></div>
        <div
          className="left-1/5 absolute bottom-1/3 h-24 w-24 animate-bounce rounded-full bg-cyan-400/5 blur-2xl"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Math symbols */}
        <div
          className="top-1/5 absolute right-1/3 animate-pulse text-6xl font-light text-white/5"
          style={{ animationDuration: "4s" }}
        >
          404
        </div>
        <div
          className="bottom-1/5 absolute left-1/3 animate-bounce text-4xl font-light text-white/5"
          style={{ animationDuration: "3s" }}
        >
          ∑
        </div>
        <div
          className="right-1/6 absolute top-2/3 animate-pulse text-3xl font-light text-white/5"
          style={{ animationDuration: "5s" }}
        >
          π
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-blue-500/30 bg-blue-600/20">
              <svg
                className="h-12 w-12 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            {/* Floating accounting symbols around icon */}
            <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
              <span className="text-xs text-cyan-400">%</span>
            </div>
            <div className="absolute -bottom-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
              <span className="text-xs text-blue-400">$</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Page Not Found
          </h2>
          <p className="mb-2 text-lg text-gray-300">
            Oops! It seems like this accounting lesson has gone missing.
          </p>
          <p className="text-gray-400">
            Don't worry - even the best accountants sometimes misplace their
            ledgers!
          </p>
        </div>

        {/* Helpful Suggestions */}
        <div className="mb-8 rounded-xl border border-gray-700/50 bg-gray-800/30 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Let's get you back on track:
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              </div>
              <p className="text-sm text-gray-300">
                Check the URL for any typos in the web address
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
              </div>
              <p className="text-sm text-gray-300">
                Browse our accounting courses and programs
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20">
                <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
              </div>
              <p className="text-sm text-gray-300">
                Contact our support team for assistance
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </button>
          </Link>

          <Link href="/our-programs">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-8 py-4 font-semibold text-gray-300 transition-all duration-300 hover:border-white hover:text-white sm:w-auto">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              View Courses
            </button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 border-t border-gray-700/50 pt-6">
          <p className="mb-4 text-sm text-gray-400">
            Need immediate help with your accounting studies?
          </p>
          <Link href="/contact">
            <button className="text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300">
              Contact Our Expert Team →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
