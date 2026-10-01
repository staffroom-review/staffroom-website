import "./globals.css";
import { Archivo, Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
      <body className={`${newsreader.variable} ${archivo.variable}`}>{children}</body>
    </html>
  );
}
