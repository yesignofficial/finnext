import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Gallery Finnext ",
  description: "Gallery Finnext",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "Gallery Finnext",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
