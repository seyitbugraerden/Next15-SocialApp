import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next 15 Social App",
  description: "created by Next 15 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
