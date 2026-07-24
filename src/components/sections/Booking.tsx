"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import services from "@/data/services.json";
import team from "@/data/team.json";
import settings from "@/data/settings.json";

const fieldClass =
  "peer w-full border-b border-border bg-transparent py-3 font-sans text-sm text-ink placeholder-transparent outline-none transition-colors focus:border-gold";
const labelClass =
  "pointer-events-none absolute left-0 top-3 font-sans text-sm text-ink-soft transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-3.5 peer-[&:not(:placeholder-shown)]:text-xs";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="booking" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Запис"
              title={["Забронюйте", "свій час", "для краси."]}
              description="Заповніть форму — і ми зв'яжемось із вами протягом дня, щоб підтвердити зручний час візиту."
            />
            <div className="mt-10 space-y-4 border-t border-border pt-8 font-sans text-sm text-ink-soft">
              <p>Або зателефонуйте нам напряму:</p>
              <a
                href={`tel:${settings.phoneHref}`}
                data-cursor="link"
                className="block font-display text-2xl text-ink"
              >
                {settings.phone}
              </a>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-[28px] p-8 md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[380px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="text-gold" size={44} strokeWidth={1.2} />
                  <h3 className="mt-6 font-display text-2xl text-ink">
                    Дякуємо за запис!
                  </h3>
                  <p className="mt-3 max-w-xs font-sans text-sm text-ink-soft">
                    Ми зв&apos;яжемось із вами найближчим часом для
                    підтвердження візиту.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    data-cursor="link"
                    className="mt-8 rounded-full border border-ink/15 px-6 py-3 font-sans text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink/40"
                  >
                    Новий запис
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2"
                >
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="name" className={labelClass}>
                      Ім&apos;я
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      id="phone"
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="phone" className={labelClass}>
                      Телефон
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      required
                      id="service"
                      defaultValue=""
                      className={`${fieldClass} appearance-none`}
                    >
                      <option value="" disabled hidden></option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="service" className={labelClass}>
                      Послуга
                    </label>
                  </div>
                  <div className="relative">
                    <select
                      id="master"
                      defaultValue=""
                      className={`${fieldClass} appearance-none`}
                    >
                      <option value="">Без різниці</option>
                      {team.map((m) => (
                        <option key={m.id} value={m.name}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="master" className={labelClass}>
                      Майстер
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      required
                      type="date"
                      id="date"
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="date" className={labelClass}>
                      Дата
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="time"
                      id="time"
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="time" className={labelClass}>
                      Час
                    </label>
                  </div>

                  <div className="relative sm:col-span-2">
                    <textarea
                      id="comment"
                      placeholder=" "
                      rows={2}
                      className={`${fieldClass} resize-none`}
                    />
                    <label htmlFor="comment" className={labelClass}>
                      Коментар
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    data-cursor="link"
                    className="mt-4 flex items-center justify-center rounded-full bg-ink px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] text-bg transition-colors hover:bg-ink/90 disabled:opacity-60 sm:col-span-2"
                  >
                    {loading ? "Надсилаємо..." : "Записатися онлайн"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
