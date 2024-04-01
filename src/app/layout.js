import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TikTik - Enhance your time with us",
  description: "Experience luxurious",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1300px] mx-auto`}>{children}</body>
    </html>
  );
}
