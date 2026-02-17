import "./_reset.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import localFont from "next/font/local";

const nhaas = localFont({
  src: "../public/NHaasGroteskDSPro-55Rg.woff2",
  display: "swap",
  variable: "--font-nhaas",
});

export const metadata = {
  title: "Sete Studio",
  description:
    "Sete is a design studio based in Estonia specialized in visual identities, websites and animations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nhaas.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
