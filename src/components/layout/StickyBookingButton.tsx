"use client";

import { Phone, CalendarCheck } from "lucide-react";
import settings from "@/data/settings.json";

export default function StickyBookingButton() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-[75] lg:hidden">
      <div className="glass flex items-center gap-2 rounded-full p-2 shadow-[0_12px_40px_rgba(42,39,37,0.12)]">
        <a
          href={`tel:${settings.phoneHref}`}
          data-cursor="link"
          aria-label="Зателефонувати"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg-secondary text-ink"
        >
          <Phone size={18} />
        </a>
        <a
          href="#booking"
          data-cursor="link"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink font-sans text-[13px] uppercase tracking-[0.1em] text-bg"
        >
          <CalendarCheck size={16} />
          Записатися онлайн
        </a>
      </div>
    </div>
  );
}
