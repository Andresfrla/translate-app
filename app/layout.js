import { DM_Sans } from "next/font/google";
import "./globals.css";
import dotenv from 'dotenv';
dotenv.config();

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
