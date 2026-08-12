export const metadata = {
  title: "The Staff Room Review",
  description: "A journal for teachers, ideas, culture, and education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
