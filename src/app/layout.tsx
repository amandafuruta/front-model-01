import type { Metadata } from "next";
import "../styles/globals.css";
import StyledComponentsRegistry from './registry'

export const metadata: Metadata = {
  title: "Market street",
  description: "Just to practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
