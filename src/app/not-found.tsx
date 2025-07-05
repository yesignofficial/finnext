// src/app/not-found.tsx
import { Metadata } from "next";
import NotFoundPage from "@/components/NotFoundPage";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Finnext Learning",
  description:
    "The page you are looking for could not be found. Return to Finnext Learning for professional accounting courses.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return <NotFoundPage />;
}
