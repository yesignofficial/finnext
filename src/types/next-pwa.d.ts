// types/next-pwa.d.ts
declare module "next-pwa" {
  import { NextConfig } from "next";

  interface PWAConfig {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    sw?: string;
    publicExcludes?: string[];
    buildExcludes?: RegExp[];
    startUrl?: string;
    dynamicStartUrl?: boolean;
    dynamicStartUrlRedirect?: string;
    fallbacks?: {
      image?: string;
      document?: string;
      font?: string;
      audio?: string;
      video?: string;
    };
    cacheStartUrl?: boolean;
    cacheOnFrontendNav?: boolean;
    subdomainPrefix?: string;
    scope?: string;
    reloadOnOnline?: boolean;
    workboxOptions?: any;
    runtimeCaching?: any[];
  }

  function withPWA(config: PWAConfig): (nextConfig: NextConfig) => NextConfig;

  export = withPWA;
}
