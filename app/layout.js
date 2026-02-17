import "./_reset.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import localFont from "next/font/local";

export const metadata = {
  title: "Sete Studio",
  description:
    "Sete is a design studio from Estonia creating visual identities, websites, and animations for modern, forward-thinking brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
