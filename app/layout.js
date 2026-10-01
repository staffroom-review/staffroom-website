import "./globals.css";
import { Archivo, Frank_Ruhl_Libre } from "next/font/google";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  variable: "--font-frank-ruhl-libre",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Staffroom Review",
  description: "An independent publication about teaching, schooling and the human experience of education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${frankRuhlLibre.variable} ${archivo.variable}`}>{children}</body>
    </html>
  );
}
