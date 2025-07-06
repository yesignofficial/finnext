// src/app/offline/page.tsx
import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-blue-500/30 bg-blue-600/20">
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
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z"
              />
            </svg>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-white">You're Offline</h1>
          <p className="mb-6 text-gray-300">
            No internet connection detected. Some features may not be available.
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-gray-700/50 bg-gray-800/50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            What you can still do:
          </h3>
          <ul className="space-y-2 text-left text-gray-300">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span>Access previously viewed courses</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
              <span>Review downloaded materials</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
              <span>Continue learning offline</span>
            </li>
          </ul>
        </div>

        <Link href="/">
          <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
