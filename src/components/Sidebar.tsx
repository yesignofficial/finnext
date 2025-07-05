import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { type FC, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

// Simple className utility function
const cn = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(" ");
};

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState("/");
  const [open, setOpen] = useState(false);

  const navigationItems = [
    {
      href: "/",
      label: "Home",
      icon: (
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
      ),
    },
    {
      href: "/programs",
      label: "Our Programs",
      icon: (
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
      ),
    },
    {
      href: "/gallery",
      label: "Gallery",
      icon: (
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      href: "/contact",
      label: "Contact",
      icon: (
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const handleNavClick = (href: string) => {
    setActiveItem(href);
    setOpen(false);
    console.log(`Navigating to: ${href}`);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex h-full w-80 flex-col border-l border-gray-700/50 bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 p-0">
        <SheetHeader className="flex-shrink-0 border-b border-gray-700/50 p-6">
          <SheetTitle className="flex items-center justify-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-600/20">
              <svg
                className="h-6 w-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Finnext Learning
              </h3>
              <p className="text-sm text-gray-400">Professional Training</p>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <nav className="p-6">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200",
                      activeItem === item.href
                        ? "border border-blue-500/30 bg-blue-600/20 text-white"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white",
                    )}
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center",
                        activeItem === item.href
                          ? "text-blue-400"
                          : "text-gray-400",
                      )}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex-shrink-0 border-t border-gray-700/50 p-6">
          <div className="rounded-lg border border-gray-700/50 bg-gray-800/50 p-4">
            <h4 className="mb-2 text-sm font-semibold text-white">
              Ready to Start Learning?
            </h4>
            <p className="mb-4 text-xs text-gray-400">
              Join our expert accounting courses and transform your career
              today.
            </p>
            <Link href="/contact">
              <Button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
