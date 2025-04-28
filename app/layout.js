import "./_reset.css";
import "./globals.css";

export const metadata = {
  title: "Sete Studio",
  description:
    "Sete is an Estonian design studio specialized in visual identities, websites and animations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
