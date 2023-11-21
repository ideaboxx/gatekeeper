import "./globals.css";
import { Providers } from "@/lib/providers";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
