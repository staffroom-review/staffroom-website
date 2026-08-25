import "./globals.css";

export const metadata = {
  title: "Staffroom Review",
  description:
    "An independent publication about teachers, education and the human experience of teaching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
