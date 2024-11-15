import type { Metadata } from "next";
import "@/assets/style/global.admin.css";
import { geistMono, geistSans } from "@/assets/fonts/fontDefinitions";
import Sidebar from "./_ui/Sidebar";

export const metadata: Metadata = {
  title: {
    absolute: "Kestion · Dashboard",
    template: "Kestion · %s",
  },
  description: "Blog app built using Next JS · Dashboard",
  authors: [
    {
      name: "NZANZU MUHAYRWA L.",
      url: "https://amaru.onrender.com",
    },
  ],
  keywords: ["Blog", "Kestion", "NextJs"],
  publisher: "Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          <Sidebar />
          <div className="replace">{children}</div>
        </main>
      </body>
    </html>
  );
}
