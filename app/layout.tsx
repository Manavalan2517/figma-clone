import type { Metadata } from "next";
import {Work_Sans} from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

//const geistSans = localFont({
//  src: "./fonts/GeistVF.woff",
//  variable: "--font-geist-sans",
//  weight: "100 900",
//});
//const geistMono = localFont({
//  src: "./fonts/GeistMonoVF.woff",
//  variable: "--font-geist-mono",
//  weight: "100 900",
//});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: "figmaClone",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
