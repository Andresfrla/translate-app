import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "translated.io",
  description: "Traduce translation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
