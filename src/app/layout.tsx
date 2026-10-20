import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "FormatBro — Format Windows Laptop & PC, Datang ke Tempat Anda";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: site.name,
  keywords: [
    "format laptop",
    "format windows",
    "servis format laptop Malaysia",
    "install windows 11",
    "install driver",
    "servis laptop onsite",
    "FormatBro",
  ],
  openGraph: {
    title,
    description: site.description,
    type: "website",
    locale: "ms_MY",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07090f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms-MY" className={font.variable}>
      <body>
        <a href="#main" className="skip-link">
          Langkau ke kandungan
        </a>
        {children}
      </body>
    </html>
  );
}
