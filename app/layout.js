import "./globals.css";
import { Archivo, Lora } from "next/font/google";
import Script from "next/script";
import Analytics from "../components/Analytics";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora", preload: true, display: "swap", weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Staffroom Review",
  description: "An independent publication about teaching, schooling and the human experience of education.",
};

export default function RootLayout({ children }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const analyticsScript = "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\nwindow.gtag = gtag;\ngtag(\'js\', new Date());\ngtag(\'config\', " + JSON.stringify(measurementId) + ", { send_page_view: false });";
  return (
    <html lang="en">
      <body className={`${lora.variable} ${archivo.variable}`}>
        {measurementId ? (
          <>
            <Script src={"https://www.googletagmanager.com/gtag/js?id=" + measurementId} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">{analyticsScript}</Script>
            <Analytics />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
