import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCheck,
  ChevronRight,
  CircleHelp,
  Download,
  Laptop,
  MapPin,
  MessageCircle,
  RotateCcw,
  Settings2,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { Header } from "@/components/header";
import { site } from "@/config/site";
const services = [
  {
    number: "01",
    icon: RotateCcw,
    title: "Windows format & reset",
    text: "A clean slate for your PC. Fresh Windows setup to leave the clutter and slowdowns behind.",
    tags: ["Windows 10 & 11", "Fresh start"],
  },
  {
    number: "02",
    icon: Download,
    title: "Software installation",
    text: "Get the apps you need, installed and configured. Ready for work, study, or your next big idea.",
    tags: ["Essential apps", "Proper setup"],
  },
  {
    number: "03",
    icon: Settings2,
    title: "Driver installation",
    text: "Get your devices talking again. The right drivers for your Wi-Fi, audio, graphics, and more.",
    tags: ["Compatible drivers", "Connected again"],
  },
  {
    number: "04",
    icon: Terminal,
    title: "Software troubleshooting",
    text: "Errors, crashes, and “why is it doing that?” Let’s find the software issue and sort it out.",
    tags: ["System errors", "App issues"],
  },
];
function Booking({
  children = "Book on WhatsApp",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} />
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow pill">
              <span className="status-dot" />
              YOUR LOCAL SOFTWARE GUY, BRO.
            </div>
            <h1>
              Slow PC?
              <br />
              Let’s make it
              <br />
              <span className="gradient-text">fresh again.</span>
            </h1>
            <p className="hero-description">
              Less lag. Less stress. More getting things done.
              <br className="desktop-break" /> Onsite PC & laptop software
              services, made simple.
            </p>
            <div className="hero-actions">
              <Booking />
              <a className="text-link" href="#services">
                Explore services <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-assurance">
              <span>
                <Check size={14} /> Onsite convenience
              </span>
              <span>
                <Check size={14} /> No tech jargon
              </span>
              <span>
                <Check size={14} /> Malaysian service
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Illustration of a Windows laptop with a successfully refreshed system"
            role="img"
          >
            <div className="orb orb-one" />
            <div className="art-cross cross-one">+</div>
            <div className="art-cross cross-two">+</div>
            <div className="floating-label top-label">
              <span className="mini-icon">
                <Zap size={16} />
              </span>
              <div>
                Goodbye, lag.<small>Hello, fresh start.</small>
              </div>
              <span className="tiny-dot" />
            </div>
            <div className="laptop">
              <div className="screen-frame">
                <div className="camera" />
                <div className="screen">
                  <div className="screen-top">
                    <span>
                      <span className="terminal-dot" /> FORMATBRO / SYSTEM
                    </span>
                    <span>— □ ×</span>
                  </div>
                  <div className="windows-glow" />
                  <div className="window-icon">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="system-card">
                    <div className="success-icon">
                      <Check size={16} />
                    </div>
                    <div>
                      All set, bro.<small>Your fresh start is ready.</small>
                    </div>
                    <span className="system-badge">100%</span>
                  </div>
                  <div className="screen-bottom">
                    <span>◆ &nbsp; ▦ &nbsp; ⌕ &nbsp; ▰ &nbsp; ◉</span>
                    <span>⌁ &nbsp; ◖ &nbsp; ▰</span>
                  </div>
                </div>
              </div>
              <div className="laptop-base">
                <div className="base-notch" />
              </div>
              <div className="laptop-shadow" />
            </div>
            <div className="floating-label bottom-label">
              <span className="mini-icon green">
                <ShieldCheck size={20} />
              </span>
              <div>
                Software sorted.<small>You’re back in control.</small>
              </div>
              <CheckCheck className="blue" size={18} />
            </div>
            <div className="art-caption">
              <span className="status-dot" /> A FRESH START IS ONE MESSAGE AWAY
            </div>
          </div>
          <a href="#services" className="scroll-cue">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={14} />
          </a>
        </section>
        <div className="service-strip">
          <div className="shell strip-inner">
            <span>
              <MapPin />
              We come to you
            </span>
            <span>
              <Laptop />
              PC & laptop friendly
            </span>
            <span>
              <ShieldCheck />
              Software-focused service
            </span>
            <span>
              <MessageCircle />
              Easy WhatsApp booking
            </span>
          </div>
        </div>
        <section id="services" className="section shell">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                WHAT WE DO <span className="small-line" />
              </div>
              <h2>
                A little tech help.
                <br />A big difference.
              </h2>
            </div>
            <p>
              From a fresh install to a stubborn error,
              <br className="desktop-break" /> we get your software back on
              track.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text, tags }) => (
              <article className="service-card" key={number}>
                <div className="card-top">
                  <span className="service-icon">
                    <Icon size={23} />
                  </span>
                  <span className="card-number">/{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={`${site.whatsapp}?text=${encodeURIComponent(`Hi FormatBro! I'd like to ask about ${title.toLowerCase()}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  aria-label={`Ask about ${title.toLowerCase()} on WhatsApp`}
                >
                  <ArrowUpRight size={19} />
                </a>
              </article>
            ))}
          </div>
          <p className="service-note">
            <CircleHelp size={15} /> Not sure what’s wrong? Tell us what’s
            happening. We’ll help you figure out the next step.
          </p>
        </section>
        <section id="how-it-works" className="process-section">
          <div className="shell">
            <div className="section-top">
              <div>
                <div className="eyebrow">
                  NO COMPLICATED STUFF <span className="small-line" />
                </div>
                <h2>Three steps. Sorted.</h2>
              </div>
              <p>
                Getting help shouldn’t need
                <br />a troubleshooting guide.
              </p>
            </div>
            <div className="steps">
              {[
                {
                  title: "Say hello on WhatsApp",
                  text: "Tell us about your device and what’s going on. A screenshot helps, too.",
                  icon: MessageCircle,
                },
                {
                  title: "Pick a time & place",
                  text: "We’ll confirm the scope, price, and onsite availability with you before booking.",
                  icon: MapPin,
                },
                {
                  title: "Get back to your day",
                  text: "We sort the software and walk you through the setup. Simple as that.",
                  icon: CheckCheck,
                },
              ].map(({ title, text, icon: Icon }, i) => (
                <article className="step" key={title}>
                  <div className="step-head">
                    <span className="step-icon">
                      <Icon size={23} />
                    </span>
                    <span className="step-line" />
                    <span className="step-number">0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="why-us" className="section shell why-section">
          <div className="why-visual">
            <div className="terminal-title">
              <span className="traffic">
                <i />
                <i />
                <i />
              </span>
              <span>the_formatbro_way.txt</span>
              <Terminal size={14} />
            </div>
            <div className="terminal-content">
              <p>
                <span className="muted">01</span>{" "}
                <span className="blue">const</span> yourTechGuy = {"{"}
              </p>
              <p>
                <span className="muted">02</span> &nbsp; approach:{" "}
                <span className="code-green">&quot;straightforward&quot;</span>,
              </p>
              <p>
                <span className="muted">03</span> &nbsp; location:{" "}
                <span className="code-green">&quot;your place&quot;</span>,
              </p>
              <p>
                <span className="muted">04</span> &nbsp; focus:{" "}
                <span className="code-green">&quot;software&quot;</span>,
              </p>
              <p>
                <span className="muted">05</span> &nbsp; unnecessaryJargon:{" "}
                <span className="code-orange">false</span>
              </p>
              <p>
                <span className="muted">06</span> {"}"};
              </p>
              <div className="terminal-output">
                <ChevronRight size={14} /> Tech help, with a human touch.
                <span className="cursor" />
              </div>
            </div>
            <div className="terminal-footer">
              <span className="status-dot" /> MADE FOR EVERYDAY PEOPLE
            </div>
          </div>
          <div className="why-copy">
            <div className="eyebrow">TECH HELP. HUMAN FIRST.</div>
            <h2>
              Your PC deserves
              <br />a good bro.
            </h2>
            <p>
              No confusing explanations. No unnecessary extras. Just practical
              software help that gets you moving again.
            </p>
            <div className="benefit">
              <span>
                <MapPin size={19} />
              </span>
              <div>
                <h3>Your place. Your convenience.</h3>
                <p>
                  Onsite service, with location and availability confirmed when
                  you book.
                </p>
              </div>
            </div>
            <div className="benefit">
              <span>
                <MessageCircle size={19} />
              </span>
              <div>
                <h3>Clear from the first message.</h3>
                <p>
                  We talk you through the work and confirm pricing before
                  getting started.
                </p>
              </div>
            </div>
            <div className="benefit">
              <span>
                <ShieldCheck size={19} />
              </span>
              <div>
                <h3>A little care goes a long way.</h3>
                <p>
                  We’ll discuss backups before any reset. Keep a copy of your
                  important files.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="shell cta-wrap">
          <div className="cta">
            <div className="cta-decoration" aria-hidden="true">
              <RotateCcw />
            </div>
            <div className="eyebrow">
              <span className="status-dot" /> READY WHEN YOU ARE
            </div>
            <h2>
              Fresh Windows.
              <br />
              <span className="gradient-text">Fresh start.</span>
            </h2>
            <p>
              Your next productive day starts with one message.
              <br />
              Let’s get your PC feeling like itself again.
            </p>
            <Booking>Let’s sort your PC</Booking>
            <span className="cta-footnote">
              PC or laptop. Work or study. We’ve got your software covered.
            </span>
          </div>
        </section>
      </main>
      <footer className="shell">
        <div className="footer-top">
          <div>
            <a className="logo" href="#">
              <span className="logo-mark">
                f<span>_</span>
              </span>
              Format<span className="blue">Bro</span>
            </a>
            <p>
              Fresh systems. Less stress.
              <br />
              Your local software guy in Malaysia.
            </p>
          </div>
          <div className="footer-links">
            <span className="footer-heading">EXPLORE</span>
            <a href="#services">Our services</a>
            <a href="#how-it-works">How it works</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              Get in touch <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="footer-social">
            <span className="footer-heading">FIND YOUR BRO</span>
            <div className="social-grid">
              {site.socials.map((s) =>
                s.url ? (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.name}
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="social-placeholder" key={s.name}>
                    {s.name}
                    <small>Coming soon</small>
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} FormatBro. All rights reserved.
          </span>
          <span>
            Software services. Straightforward solutions.
            <span className="malaysia-dot" />
          </span>
        </div>
      </footer>
    </>
  );
}
