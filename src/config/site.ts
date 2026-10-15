export const site = {
  name: "FormatBro",
  description:
    "Onsite PC and laptop software services in Malaysia. Windows format and reset, software installation, drivers, and troubleshooting. Book with FormatBro on WhatsApp.",
  whatsapp: "https://wa.me/601110709875",
  // Set NEXT_PUBLIC_SITE_URL to your production origin in Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://formatbro.example",
  socials: [
    { name: "Instagram", url: null },
    { name: "Threads", url: null },
    { name: "Facebook", url: null },
    { name: "TikTok", url: null },
  ] as { name: string; url: string | null }[],
};
