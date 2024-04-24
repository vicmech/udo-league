import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UDOLEAGUE | Welcome",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class='w-screen h-screen bg-[#f0f0f0] snap-mandatory snap-y overflow-scroll' className={inter.className}>{children}</body>
    </html>
  );
}
