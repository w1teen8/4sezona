"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ArtPlate from "@/components/ui/ArtPlate";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import team from "@/data/team.json";

export default function Team() {
  return (
    <section id="team" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Команда"
          title={["Майстри, яким", "довіряють."]}
          description="Кожен майстер салону — сертифікований фахівець із багаторічним досвідом та відчуттям стилю."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <ArtPlate
                seed={member.id}
                tone={i % 2 === 0 ? "rose" : "gold"}
                className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.015]"
              >
                <span className="font-display text-6xl font-light text-ink/70">
                  {member.initials}
                </span>
              </ArtPlate>

              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-ink-soft">
                    {member.role}
                  </p>
                  <p className="mt-0.5 font-sans text-xs uppercase tracking-[0.1em] text-gold">
                    {member.experience}
                  </p>
                </div>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  aria-label={`Instagram ${member.name}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-gold hover:text-ink"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>

              <a
                href="#booking"
                data-cursor="link"
                className="mt-5 flex items-center gap-1.5 border-t border-border pt-5 font-sans text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-gold"
              >
                Записатися до майстра
                <ArrowUpRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
