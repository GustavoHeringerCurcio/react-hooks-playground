import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Practice app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}