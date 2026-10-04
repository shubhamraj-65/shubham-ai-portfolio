import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = "Shubham Raj | Data Analyst";
const description = "Data Analyst portfolio of Shubham Raj showcasing Python, SQL, Power BI, Excel, analytics projects and AI-powered data solutions.";

export const metadata: Metadata = {
  title, description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, type: "website", images: ["/images/profile.jpg"] },
};
export const viewport: Viewport = { themeColor: "#08090A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
