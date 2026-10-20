"use client";
import { useState } from "react";
import { ArrowUpRight, Laptop, Monitor } from "lucide-react";
import { waLink } from "@/config/site";
import { BrandIcon } from "@/components/brand-icons";

const devices = [
  { label: "Laptop", icon: Laptop },
  { label: "PC Desktop", icon: Monitor },
];

const problems = [
  "Format / reset Windows",
  "Install software",
  "Install driver",
  "Troubleshoot error",
  "Tak pasti — nak tanya dulu",
];

export function BookingForm() {
  const [device, setDevice] = useState(devices[0].label);
  const [problem, setProblem] = useState(problems[0]);
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");

  const message = [
    "Hi FormatBro! Saya nak booking servis.",
    `• Device: ${device}`,
    `• Servis: ${problem}`,
    area.trim() && `• Kawasan: ${area.trim()}`,
    note.trim() && `• Masalah: ${note.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      className="booking-form"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(message), "_blank", "noopener,noreferrer");
      }}
    >
      <fieldset>
        <legend>Device kau</legend>
        <div className="choice-row">
          {devices.map(({ label, icon: Icon }) => (
            <label key={label} className="choice">
              <input
                type="radio"
                name="device"
                value={label}
                checked={device === label}
                onChange={() => setDevice(label)}
              />
              <span>
                <Icon size={18} /> {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Nak buat apa?</legend>
        <div className="choice-row wrap">
          {problems.map((p) => (
            <label key={p} className="choice small">
              <input
                type="radio"
                name="problem"
                value={p}
                checked={problem === p}
                onChange={() => setProblem(p)}
              />
              <span>{p}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span>Kawasan (pilihan)</span>
        <input
          type="text"
          placeholder="Contoh: Shah Alam, Seksyen 7"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          maxLength={80}
        />
      </label>
      <label className="field">
        <span>Cerita sikit masalah (pilihan)</span>
        <textarea
          rows={3}
          placeholder="Contoh: Laptop slow sangat, selalu hang bila buka Chrome."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={400}
        />
      </label>
      <div className="preview" aria-live="polite">
        <span className="preview-label">Mesej yang akan dihantar</span>
        <pre>{message}</pre>
      </div>
      <button type="submit" className="button button-primary full">
        <BrandIcon name="WhatsApp" size={18} />
        Hantar ke WhatsApp
        <ArrowUpRight size={17} />
      </button>
    </form>
  );
}
