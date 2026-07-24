import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import faq from "@/data/faq.json";

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-bg-secondary/60 py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeading
          eyebrow="FAQ"
          title={["Питання, які", "виникають найчастіше."]}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-16">
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}
