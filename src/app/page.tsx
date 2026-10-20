import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  CircleAlert,
  Download,
  Gauge,
  HardDrive,
  MapPin,
  Plus,
  RotateCcw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Tag,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import { Header, Logo } from "@/components/header";
import { BookingForm } from "@/components/booking-form";
import { BrandIcon } from "@/components/brand-icons";
import { site, waLink } from "@/config/site";

const problems = [
  { icon: Gauge, text: "Laptop slow, buka apps pun lambat" },
  { icon: CircleAlert, text: "Blue screen / asyik restart sendiri" },
  { icon: Bug, text: "Popup iklan pelik, rasa ada virus" },
  { icon: Wifi, text: "Wi-Fi atau bunyi hilang lepas update" },
  { icon: HardDrive, text: "Storage penuh, tak tahu nak buang apa" },
  { icon: Tag, text: "Nak jual laptop — nak reset bersih" },
];

const services = [
  {
    icon: RotateCcw,
    title: "Format & reset Windows",
    text: "Pasang semula Windows 10 / 11 yang bersih. Buang semua sampah, bloatware dan masalah lama — laptop rasa macam baru.",
    tags: ["Windows 10 & 11", "Laptop & PC", "Clean install"],
    featured: true,
  },
  {
    icon: Download,
    title: "Install software",
    text: "Apps untuk kerja, belajar atau gaming — dipasang dan disetup siap.",
    tags: ["Kerja", "Belajar"],
  },
  {
    icon: Settings2,
    title: "Install driver",
    text: "Wi-Fi, audio, graphic, printer — semua berfungsi semula.",
    tags: ["Wi-Fi", "Audio", "GPU"],
  },
  {
    icon: Zap,
    title: "Troubleshoot software",
    text: "Error, crash, hang, “kenapa dia buat macam ni?” — kita cari puncanya.",
    tags: ["Error", "Crash"],
    wide: true,
  },
];

const before = [
  "Boot lama, kena tunggu",
  "Popup & apps entah dari mana",
  "Storage penuh dengan sampah",
  "Driver hilang, Wi-Fi meragam",
];
const after = [
  "Windows bersih & segar",
  "Hanya apps yang anda perlukan",
  "Driver lengkap & berfungsi",
  "Diterangkan setup — tanpa jargon",
];

const steps = [
  {
    title: "WhatsApp kami",
    text: "Bagitahu device dan masalah. Screenshot error pun boleh.",
  },
  {
    title: "Sahkan harga & masa",
    text: "Kami confirm skop kerja, harga dan lokasi dulu — takde caj tersembunyi.",
  },
  {
    title: "Kami datang & settle",
    text: "Servis di tempat anda. Siap, kami tunjuk apa yang dah dibuat.",
  },
];

const faqs = [
  {
    q: "Data saya hilang ke kalau format?",
    a: "Format akan padam semua data dalam drive Windows. Sebelum mula, kami bincang dulu apa yang perlu di-backup. Sila simpan salinan fail penting anda (gambar, dokumen) sebelum servis.",
  },
  {
    q: "Berapa harga servis?",
    a: "Harga bergantung pada jenis servis dan device. WhatsApp kami dengan butiran — kami akan beri harga yang jelas sebelum apa-apa kerja dimulakan.",
  },
  {
    q: "Berapa lama masa nak siap?",
    a: "Bergantung pada spec device dan jumlah software yang perlu dipasang. Kami akan beri anggaran masa semasa booking.",
  },
  {
    q: "Kawasan mana yang dilayan?",
    a: "Servis onsite — kami datang ke tempat anda. Hantar lokasi anda di WhatsApp dan kami akan sahkan sama ada kawasan anda dilayan.",
  },
  {
    q: "Lesen Windows dan software macam mana?",
    a: "Kami bincang keperluan lesen dengan anda masa booking. Laptop yang datang dengan Windows asli biasanya aktif semula secara automatik selepas format.",
  },
  {
    q: "Boleh repair hardware (skrin, bateri, motherboard)?",
    a: "Buat masa ni FormatBro fokus pada format, install dan troubleshoot Windows — tak termasuk repair hardware. Kalau tak pasti masalah anda software atau hardware, tanya je dulu.",
  },
];

const chat = [
  { from: "me", text: "Bro, laptop saya slow gila. Boleh format?" },
  { from: "bro", text: "Boleh! Laptop model apa & area mana?" },
  { from: "me", text: "Acer Aspire. Esok petang boleh datang?" },
  { from: "bro", text: "Boleh, saya datang esok petang 👍" },
];

const marquee = [
  "Format Windows",
  "Laptop & PC",
  "Install Driver",
  "Install Software",
  "Troubleshoot",
  "Datang ke rumah",
  "Booking WhatsApp",
];

function Booking({
  children = "Booking di WhatsApp",
  message,
  className = "",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <BrandIcon name="WhatsApp" size={19} />
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  areaServed: "MY",
  sameAs: site.socials.flatMap((s) => (s.url ? [s.url] : [])),
};

export default function Home() {
  const socials = site.socials.filter((s) => s.url);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-mesh" aria-hidden="true" />
      <Header />
      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="pill">
              <span className="status-dot" />
              Kami datang ke rumah anda
            </div>
            <h1>
              Laptop slow?
              <br />
              <span className="gradient-text">Format, laju balik.</span>
            </h1>
            <p className="hero-description">
              Servis format Windows untuk laptop &amp; PC. Kami datang ke rumah
              atau pejabat anda, format &amp; setup sampai siap. Booking terus di
              WhatsApp.
            </p>
            <div className="hero-actions">
              <Booking message="Hi FormatBro! Saya nak tanya pasal servis format." />
              <a className="button button-ghost" href="#servis">
                Tengok servis <ArrowDown size={16} />
              </a>
            </div>
            <ul className="hero-assurance">
              <li>
                <Check size={15} /> Datang ke tempat anda
              </li>
              <li>
                <Check size={15} /> Harga confirm dulu
              </li>
              <li>
                <Check size={15} /> Laptop &amp; PC
              </li>
            </ul>
          </div>

          <div
            className="hero-art"
            role="img"
            aria-label="Contoh perbualan booking servis FormatBro di WhatsApp"
          >
            <div className="glow" />
            <div className="phone">
              <div className="chat-head">
                <span className="chat-avatar" aria-hidden="true">
                  f<span>_</span>
                </span>
                <div>
                  FormatBro
                  <small>online</small>
                </div>
              </div>
              <div className="chat-body">
                {chat.map(({ from, text }, i) => (
                  <p
                    key={text}
                    className={`bubble ${from}`}
                    style={{ animationDelay: `${0.4 + i * 0.6}s` }}
                  >
                    {text}
                  </p>
                ))}
                <div className="job-card" style={{ animationDelay: `${0.4 + chat.length * 0.6}s` }}>
                  <span className="job-title">
                    <Check size={14} strokeWidth={3} /> Servis siap
                  </span>
                  <ul>
                    <li>Windows 11 dipasang</li>
                    <li>Driver lengkap</li>
                    <li>Apps siap setup</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="float-chip chip-a">
              <MapPin size={16} /> Datang ke rumah
            </div>
            <div className="float-chip chip-b">
              <Zap size={16} /> Laju balik
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>
                {m} <Sparkles size={14} />
              </span>
            ))}
          </div>
        </div>

        <section className="section shell reveal">
          <div className="section-head center">
            <span className="eyebrow">Masalah biasa</span>
            <h2>Pernah rasa macam ni?</h2>
            <p>Kalau ada satu pun yang kena, FormatBro boleh tolong.</p>
          </div>
          <div className="problem-grid">
            {problems.map(({ icon: Icon, text }) => (
              <div className="problem" key={text}>
                <Icon size={20} />
                {text}
              </div>
            ))}
          </div>
        </section>

        <section id="servis" className="section shell reveal">
          <div className="section-head">
            <span className="eyebrow">Servis kami</span>
            <h2>Apa yang kami buat untuk device anda.</h2>
            <p>Dari format penuh sampai error yang degil — klik mana-mana servis untuk tanya terus.</p>
          </div>
          <div className="bento">
            {services.map(({ icon: Icon, title, text, tags, featured, wide }) => (
              <a
                className={`card service-card ${featured ? "featured" : ""} ${wide ? "wide" : ""}`}
                key={title}
                href={waLink(`Hi FormatBro! Saya nak tanya pasal servis ${title.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service-icon">
                  <Icon size={featured ? 28 : 22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="card-cta">
                  Tanya di WhatsApp <ArrowRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section shell reveal">
          <div className="section-head center">
            <span className="eyebrow">Sebelum vs selepas</span>
            <h2>Beza dia memang terasa.</h2>
          </div>
          <div className="compare">
            <div className="card compare-card before">
              <span className="compare-label">Sebelum</span>
              <ul>
                {before.map((t) => (
                  <li key={t}>
                    <X size={16} /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare-arrow" aria-hidden="true">
              <ArrowRight />
            </div>
            <div className="card compare-card after">
              <span className="compare-label">Selepas FormatBro</span>
              <ul>
                {after.map((t) => (
                  <li key={t}>
                    <Check size={16} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="cara-booking" className="section shell reveal">
          <div className="booking-layout">
            <div>
              <div className="section-head">
                <span className="eyebrow">Cara booking</span>
                <h2>3 langkah. Settle.</h2>
                <p>Takde borang panjang, takde app nak download.</p>
              </div>
              <ol className="steps">
                {steps.map(({ title, text }, i) => (
                  <li className="step" key={title}>
                    <span className="step-number">{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="note">
                <ShieldCheck size={16} /> Kami bincang backup data sebelum
                sebarang format.
              </p>
            </div>
            <div className="card form-card">
              <h3>Booking pantas</h3>
              <p>Isi sikit, kami siapkan mesej WhatsApp untuk anda.</p>
              <BookingForm />
            </div>
          </div>
        </section>

        <section id="faq" className="section shell reveal">
          <div className="section-head center">
            <span className="eyebrow">Soalan lazim</span>
            <h2>Ada soalan?</h2>
          </div>
          <div className="faq">
            {faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="shell cta-wrap reveal">
          <div className="cta">
            <span className="pill">
              <span className="status-dot" /> Sedia bila anda sedia
            </span>
            <h2>
              Windows baru.
              <br />
              <span className="gradient-text">Mood pun baru.</span>
            </h2>
            <p>Satu mesej je. Kami uruskan selebihnya.</p>
            <Booking message="Hi FormatBro! Saya nak booking servis.">
              WhatsApp FormatBro
            </Booking>
            <div className="social-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <BrandIcon name="WhatsApp" />
              </a>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  <BrandIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <div>
            <Logo />
            <p>
              Servis format laptop &amp; PC di Malaysia.
              <br />
              Kami datang ke tempat anda.
            </p>
          </div>
          <div className="footer-links">
            <a href="#servis">Servis</a>
            <a href="#cara-booking">Cara booking</a>
            <a href="#faq">Soalan lazim</a>
            {[{ name: "WhatsApp" as const, url: site.whatsapp }, ...socials].map((s) => (
              <a key={s.name} href={s.url!} target="_blank" rel="noopener noreferrer">
                {s.name} <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FormatBro. Hak cipta terpelihara.</span>
          <span>
            <MapPin size={13} /> Malaysia · Servis datang ke rumah
          </span>
        </div>
      </footer>

      <a
        className="wa-float"
        href={waLink("Hi FormatBro! Saya nak tanya pasal servis.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat di WhatsApp"
      >
        <BrandIcon name="WhatsApp" size={22} />
        <span>Chat sekarang</span>
      </a>
    </>
  );
}
