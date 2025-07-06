// src/components/PWAInstaller.tsx
"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkIfInstalled = () => {
      if (typeof window !== "undefined") {
        if (
          window.matchMedia &&
          window.matchMedia("(display-mode: standalone)").matches
        ) {
          setIsInstalled(true);
        }
        if (
          window.navigator &&
          "standalone" in window.navigator &&
          (window.navigator as any).standalone
        ) {
          setIsInstalled(true);
        }
      }
    };

    checkIfInstalled();

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Show install prompt after a delay (better UX)
      setTimeout(() => {
        if (!isInstalled && !sessionStorage.getItem("pwa-install-dismissed")) {
          setShowInstallPrompt(true);
        }
      }, 5000); // Show after 5 seconds
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      console.log("PWA was installed");
    };

    if (typeof window !== "undefined") {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.addEventListener("appinstalled", handleAppInstalled);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt,
        );
        window.removeEventListener("appinstalled", handleAppInstalled);
      }
    };
  }, [isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
        setIsInstalled(true);
      } else {
        console.log("User dismissed the install prompt");
      }

      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      console.error("Error during install prompt:", error);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Don't show again for this session
    sessionStorage.setItem("pwa-install-dismissed", "true");
  };

  // Don't show if already installed or dismissed in this session
  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="animate-slide-up fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-600 to-cyan-600 p-4 text-white shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 rounded-lg bg-white/10 p-2">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="mb-1 text-sm font-semibold">
            Install Finnext Learning
          </h4>
          <p className="text-xs opacity-90">
            Get quick access to your accounting courses offline
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={handleInstallClick}
            className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-blue-600 transition-colors hover:bg-gray-100"
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-white/80 transition-colors hover:text-white"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;
