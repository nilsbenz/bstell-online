import fries from "@/assets/images/fries.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FadeIn } from "../ui/fade-in";

const faqItems = [
  {
    question: "Kann ich das Kassensystem testen?",
    answer: (
      <>
        Ja, alle Komponenten des Kassensystems können gratis getestet werden.
        Nur um Bestellungen zu Drucken, brauchst du eine Lizenz, alle anderen
        Funktionen sind auch davor verfügbar.
        <br />
        Wie du loslegen kannst, erfährst du in der{" "}
        <a href="/docs/loslegen" className="styled">
          Dokumentation
        </a>
        .
      </>
    ),
  },
  {
    question: "Welche Zahlungsarten werden unterstützt?",
    answer:
      "Bstell online arbeitet mit dem Zahlungsanbieter Stripe zusammen. Es können alle Zahlungsarten verwendet werden, die Stripe unterstützt. Das sind grundsätzlich alle gängigen Zahlungsmittel, unter anderem Kreditkarte, Twint, Apple Pay und Google Pay.",
  },
  {
    question: "Welche Hardware brauche ich, um die Software einzusetzen?",
    answer:
      "Du brauchst einen an das Internet angeschlossenen Laptop, um die Bestellungen zu drucken. Zusätzlich brauchst du mindestens einen netzwerkfähigen Epson POS-Drucker. Das Servicepersonal benötigt ein Smartphone (am besten das eigene), um die Bestellungen aufzunehmen.",
  },
  {
    question:
      "Ich habe bereits einen POS-Drucker, aber nicht von Epson. Kann ich diesen trotzdem verwenden?",
    answer:
      "Nein. Es werden aktuell nur Drucker der Marke Epson unterstützt. Es ist aber geplant, irgendwann auch Drucker anderer Hersteller zu unterstützen.",
  },
  {
    question: "Brauche ich keine Tablets für das Servicepersonal?",
    answer:
      "Nein. Das Personal nimmt die Bestellungen mit dem eigenen Smartphone auf.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl scroll-mt-24 space-y-8 px-6" id="faq">
      <h2 className="text-3xl font-semibold sm:text-4xl">
        Oft gestellte Fragen
      </h2>
      <div className="flex gap-4">
        <Accordion type="multiple" className="grow">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <FadeIn delay={0.3} className="hidden shrink-0 md:block">
          <img src={fries.src} alt="" className="size-80 animate-move-y" />
        </FadeIn>
      </div>
    </section>
  );
}
