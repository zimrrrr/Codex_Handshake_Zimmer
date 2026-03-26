import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Workspace",
  description:
    "Workspace helps students turn classes, career work, and personal projects into a clear operating system for what matters now."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
