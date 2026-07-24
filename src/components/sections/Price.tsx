"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import prices from "@/data/prices.json";

export default function Price() {
  return (
    <section id="price" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Прайс"
          title={["Прозорі ціни", "без сюрпризів."]}
          description="Орієнтовна вартість основних напрямків. Точну ціну майстер узгодить під час консультації."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prices.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass flex flex-col rounded-[28px] p-8 transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(42,39,37,0.08)]"
            >
              <h3 className="font-display text-2xl text-ink">
                {category.title}
              </h3>
              <ul className="mt-6 flex flex-1 flex-col gap-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-dotted border-border pb-3 font-sans text-sm"
                  >
                    <span className="text-ink-soft">{item.name}</span>
                    <span className="whitespace-nowrap text-ink">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                data-cursor="link"
                className="group mt-8 flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-gold"
              >
                Записатися
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
