// // next.config.js
// import withPWAInit from "next-pwa";

// const withPWA = withPWAInit({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   skipWaiting: true,
//   buildExcludes: [/middleware-manifest.json$/],
//   fallbacks: {
//     document: "/offline",
//   },
//   workboxOptions: {
//     disableDevLogs: true,
//   },
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// export default withPWA(nextConfig);

// next.config.js
// next.config.js - Remove fallbacks to avoid TypeScript errors
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWA(nextConfig);
