import { EMAIL } from "@/lib/constants";
import useConfig from "@/lib/useConfig";
import { cn } from "@/lib/utils";
import { MailIcon, PrinterIcon, RocketIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FadeIn } from "../ui/fade-in";

export default function Pricing() {
  const config = useConfig();

  return (
    <section className="mx-auto max-w-4xl scroll-mt-24 px-6" id="preise">
      <h2 className="text-3xl font-semibold sm:text-4xl">Und was kostet es?</h2>
      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-20 md:mt-12 md:grid-cols-2">
        <FadeIn className="h-full" delay={0.3}>
          <Card className="relative flex h-full flex-col">
            <CardHeader>
              <CardTitle>
                Nur die{" "}
                <span className="inline-block bg-gradient-to-br from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Software
                </span>
              </CardTitle>
              <CardDescription>
                Optimal, wenn du bereits einen netzwerkfähigen Epson POS-Drucker
                besitzt. Siehe{" "}
                <a
                  href="/docs/hardware"
                  className="font-medium text-foreground"
                >
                  Dokumentation
                </a>
                .
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <ul className="list-disc space-y-2 pl-6 [&>li]:font-medium">
                <li>Alle Features der Software, z.B.:</li>
                <ul className="list-disc pl-6">
                  <li>Bestellungen vom Personal</li>
                  <li>Online-Bestellungen per QR-Code</li>
                  <li>Auswertung nach dem Event</li>
                </ul>
                <li>Du brauchst noch:</li>
                <ul className="list-disc pl-6">
                  <li>
                    mind. einen netzwerk&shy;fähigen Epson POS-Drucker (z.B.
                    Epson TM-T20iii)
                  </li>
                  <li>stabiles Internet am Event</li>
                  <li>einen Laptop</li>
                </ul>
              </ul>
            </CardContent>
            <div className="space-y-1 pb-16 pt-8">
              <p className="text-center text-5xl font-semibold">
                {config?.eventLicensePrice.integerValue ?? 100} Fr.*
              </p>
              <p className="text-center text-sm font-medium">
                + {(config?.onlineOrderFee.doubleValue ?? 0.01) * 100}% vom
                Umsatz aus Online-Bestellungen**
              </p>
            </div>
            <a
              href="/docs/loslegen"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
              )}
            >
              <RocketIcon className="size-5" strokeWidth={2.5} />
              Erste Schritte
            </a>
          </Card>
        </FadeIn>
        <FadeIn className="relative flex flex-col p-0.5" delay={0.5}>
          <CardHeader>
            <CardTitle>
              Software +{" "}
              <span className="inline-block whitespace-nowrap bg-gradient-to-br from-teal-400 to-teal-500 px-1.5 shadow-md">
                <PrinterIcon className="inline-block size-5" strokeWidth={3} />{" "}
                Hardware
              </span>
            </CardTitle>
            <CardDescription>
              In Zusammenarbeit mit dem Musikverein Konkordia Au bieten wir
              umfangreichen Support, bei Bedarf auch vor Ort.
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <ul className="list-disc space-y-2 pl-6 [&>li]:font-medium">
              <li>Alle Features der Software</li>
              <li>Support bei Bedarf:</li>
              <ul className="list-disc pl-6">
                <li>Einpflegen der Speisekarte</li>
                <li>Unterstützung beim Einrichten der Online-Bestellungen</li>
              </ul>
              <li>Je nach Verfügbarkeit am Event:</li>
              <ul className="list-disc pl-6">
                <li>3 Drucker</li>
                <li>Router inkl. Internet</li>
                <li>Admin-Laptop</li>
                <li>Betreuung des Systems vor Ort</li>
              </ul>
            </ul>
          </CardContent>
          <div className="space-y-1 pb-16 pt-8">
            <p className="text-center text-5xl font-semibold">
              <span className="text-base font-medium">ab</span> 400 Fr.*
            </p>
            <p className="text-center text-sm font-medium">
              genauere Infos{" "}
              <a
                href="/downloads/pricing_au.pdf"
                className="decoration-foreground"
              >
                hier
              </a>
            </p>
          </div>
          <a
            href="mailto:info@mvau.ch"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
            )}
          >
            <MailIcon className="size-5" strokeWidth={2.5} />
            Anfrage
          </a>
        </FadeIn>
      </div>
      <div className="col-span-full mt-20 space-y-4">
        <div>
          <p>
            * Preis pro Event mit einer Speisekarte. Die Lizenz ist 7 Tage
            gültig.
          </p>
          <p className="text-muted-foreground">
            Preis für grössere Veranstaltungen mit mehreren Speisekarten{" "}
            <a href={`mailto:${EMAIL}`} className="styled">
              auf Anfrage
            </a>
            .
          </p>
        </div>
        <div>
          <p>
            ** Die Gebühren gelten nur für Online-Bestellungen von Kunden und
            werden zusätzlich zu den Gebühren des Zahlungsanbieters (Stripe)
            abgerechnet. Bestellungen vom Servicepersonal sind kostenlos.
          </p>
          <p className="text-muted-foreground">
            Wird eine Online-Bestellung also mit Twint bezahlt, fallen etwa 30
            Rp. + 2.9% Gebühren an (ohne Gewähr,{" "}
            <a
              href="https://stripe.com/de-ch/pricing/local-payment-methods"
              target="_blank"
              rel="noreferer"
              className="styled"
            >
              siehe Stripe
            </a>
            ).
          </p>
        </div>
      </div>
    </section>
  );
}
