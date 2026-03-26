import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "AI Workspace for Students",
  description: "A Google-centered agenda workspace for students with bounded AI assistance."
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
