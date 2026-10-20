export const site = {
  name: "FormatBro",
  description:
    "Servis format Windows untuk laptop & PC — datang ke tempat anda. Format & reset Windows, install software, driver dan troubleshoot. Booking terus di WhatsApp.",
  whatsapp: "https://wa.me/601110709875",
  // Set NEXT_PUBLIC_SITE_URL to your production origin in Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://formatbro.example",
  // Masukkan URL penuh (https://...) untuk aktifkan. Yang `null` tak dipaparkan.
  socials: [
    { name: "Instagram", url: null },
    { name: "Threads", url: null },
    { name: "TikTok", url: null },
    { name: "Facebook", url: null },
  ] as { name: SocialName; url: string | null }[],
};

export type SocialName = "WhatsApp" | "Instagram" | "Threads" | "TikTok" | "Facebook";

/** WhatsApp link with a prefilled message. */
export function waLink(message?: string) {
  return message
    ? `${site.whatsapp}?text=${encodeURIComponent(message)}`
    : site.whatsapp;
}
