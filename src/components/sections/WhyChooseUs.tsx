"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Сертифіковані майстри",
    text: "Кожен спеціаліст регулярно підвищує кваліфікацію на міжнародних курсах.",
  },
  {
    title: "Преміальні матеріали",
    text: "Працюємо лише з професійними брендами, перевіреними часом.",
  },
  {
    title: "Стерильність",
    text: "Повний цикл дезінфекції та стерилізації інструментів перед кожним візитом.",
  },
  {
    title: "Комфорт",
    text: "Атмосфера тиші та затишку у кожній деталі інтер'єру салону.",
  },
  {
    title: "Онлайн запис",
    text: "Оберіть зручний час і майстра за кілька дотиків — без дзвінків.",
  },
  {
    title: "Індивідуальний підхід",
    text: "Кожен ритуал підбирається під ваш стиль, тип шкіри та волосся.",
  },
  {
    title: "Сучасне обладнання",
    text: "Апаратура нового покоління для точних і безпечних процедур.",
  },
  {
    title: "Високий сервіс",
    text: "Увага до найменших деталей — від зустрічі до чашки чаю.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Чому ми"
          title={["Стандарт, який", "відчувається."]}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-20 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-b border-border p-8 transition-colors duration-500 hover:bg-card sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <span className="font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink">
                {feature.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
