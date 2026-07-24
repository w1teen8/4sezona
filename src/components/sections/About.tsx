"use client";

import { motion } from "framer-motion";
import { Sun, Leaf, Snowflake, Flower2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const seasons = [
  {
    icon: Flower2,
    name: "Весна",
    text: "Оновлення образу та легкість у кожній деталі.",
  },
  {
    icon: Sun,
    name: "Літо",
    text: "Сяйво шкіри та стійкість кольору у спеку.",
  },
  {
    icon: Leaf,
    name: "Осінь",
    text: "Глибокий догляд та відновлення структури волосся.",
  },
  {
    icon: Snowflake,
    name: "Зима",
    text: "Інтенсивне живлення та захист від холоду.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <SectionHeading
            eyebrow="Про нас"
            title={["Простір, створений", "для тиші", "та краси."]}
          />

          <div className="flex flex-col justify-end gap-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl italic leading-relaxed text-ink md:text-[1.7rem]"
            >
              «Ми вважаємо, що краса — це не поспіх, а ритуал. Тому кожна
              деталь у 4 СЕЗОНА підпорядкована спокою.»
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md font-sans text-base leading-relaxed text-ink-soft"
            >
              Назва 4 СЕЗОНА — це філософія догляду, що змінюється разом із
              природою. Ми підбираємо ритуали краси, які відповідають ритму
              кожної пори року — для волосся, шкіри та настрою.
            </motion.p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-14 border-t border-border pt-16 md:grid-cols-4 md:gap-x-10">
          {seasons.map((season, i) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <season.icon
                className="mb-5 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                size={26}
                strokeWidth={1.25}
              />
              <span className="font-display text-xl text-ink">
                {season.name}
              </span>
              <span className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                {season.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
