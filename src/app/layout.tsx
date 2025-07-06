// import "@/styles/globals.css";
// import "@/styles/ham.css";
// import { cn } from "@/lib/utils";
// import { type Metadata } from "next";
// import {
//   Inter,
//   Birthstone,
//   Open_Sans,
//   Poppins,
//   Merriweather,
// } from "next/font/google";
// import Providers from "@/app/Providers";

// export const metadata: Metadata = {
//   title: "Finnext",
//   description: "Finnext",
//   icons: [{ rel: "icon", url: "/images/logo.png" }],
//   keywords: "Finnext",
// };

// const stone = Birthstone({
//   subsets: ["latin"],
//   variable: "--font-stone",
//   weight: ["400"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["300"],
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// const opens = Open_Sans({
//   subsets: ["latin"],
//   variable: "--font-open",
//   weight: ["400"],
// });

// const merriweather = Merriweather({
//   subsets: ["latin"],
//   variable: "--font-merriweather",
//   weight: ["400"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={cn(
//           "theme-custom flex min-h-screen font-inter text-[#FBEAD2] antialiased",
//           stone.variable,
//           inter.variable,
//           opens.variable,
//           poppins.variable,
//           merriweather.variable,
//         )}
//       >
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx
import { Metadata, Viewport } from "next";
import PWAInstaller from "@/components/PWAInstaller";
import "../styles/globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Finnext Learning - Professional Accounting Training",
  description:
    "Transform your career with industry-leading accounting courses designed by experts for real-world success.",
  applicationName: "Finnext Learning",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Finnext Learning",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Finnext Learning",
    title: "Professional Accounting Training",
    description:
      "Transform your career with industry-leading accounting courses",
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Essential PWA Meta Tags */}
        <meta name="application-name" content="Finnext Learning" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Finnext Learning" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-180x180.png"
        />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          {children}
          <PWAInstaller />
        </Providers>
      </body>
    </html>
  );
}
