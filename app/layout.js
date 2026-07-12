export const metadata = {
  title: "United Container Depot",
  description: "United Container Depot website traffic router",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
