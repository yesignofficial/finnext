import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Finnext ",
  description: "Contact Finnext",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "Contact Finnext",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
