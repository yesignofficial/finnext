import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Programs Finnext ",
  description: "Programs Finnext",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "Programs Finnext",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
