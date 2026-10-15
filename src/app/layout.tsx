import type { Metadata } from "next";
import { site } from "@/config/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "FormatBro — Fresh Windows. Fresh Start.",
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Windows format Malaysia",
    "onsite PC service",
    "laptop software troubleshooting",
    "FormatBro",
  ],
  openGraph: {
    title: "FormatBro — Fresh Windows. Fresh Start.",
    description: site.description,
    type: "website",
    locale: "en_MY",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "FormatBro — Fresh Windows. Fresh Start.",
    description: site.description,
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
