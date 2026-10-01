import "./globals.css";

export const metadata = {
  title: "Staffroom Review",
  description: "An independent publication about teaching, schooling and the human experience of education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
