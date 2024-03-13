import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Marketing Navbar</div>                         //adding the specific line for just marketing group
      {children}
    </div>
  );
}


// make sure when you create more than one layout in a project there must be one `<html>` & `<body>` tags that is in the main layout.

// you can see in this layout I remove these tags. When I dont do this it gives `Hydration failed` error.