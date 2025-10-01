import bacon from "@/assets/images/bacon.svg";
import beer from "@/assets/images/beer.svg";
import popcorn from "@/assets/images/popcorn.svg";
import sushi from "@/assets/images/sushi.svg";
import { TabletSmartphoneIcon, WalletCardsIcon } from "lucide-react";
import Feature from "./feature";

const features = [
  {
    title: "Für Vereine",
    description: (
      <>
        Bstell online kann genau das, was ein{" "}
        <b>Bestellsystem für Vereinsanlässe</b> können muss, nicht mehr und
        nicht weniger. Durch die{" "}
        <span className="bg-gradient-to-br from-rose-500 to-pink-600 bg-clip-text font-semibold text-transparent">
          einfache Benutzeroberfläche
        </span>{" "}
        soll jedes Vereinsmitglied im Service arbeiten können, mit minimaler
        Einführung.
      </>
    ),
    image: bacon.src,
  },
  {
    title: "Hardware",
    description: (
      <>
        Um Bstell online einzusetzen braucht es{" "}
        <span className="inline-block whitespace-nowrap bg-gradient-to-br from-teal-400 to-teal-500 px-1.5 font-semibold shadow-md">
          <TabletSmartphoneIcon
            className="inline-block size-5"
            strokeWidth={2.5}
          />{" "}
          keine teure Hardware
        </span>
        . Das Servicepersonal nimmt die Bestellungen{" "}
        <b>mit dem eigenen Handy</b> auf, in der Küche brauchst du nur einen
        Laptop mit Internet und einen netzwerkfähigen Epson POS Drucker.
      </>
    ),
    image: beer.src,
  },
  {
    title: "Online-Bestellungen",
    description: (
      <>
        Um das Servicepersonal zu entlasten, können Kunden direkt über die
        Internetseite Bestellungen aufgeben und gleich{" "}
        <span className="inline-block whitespace-nowrap bg-gradient-to-br from-teal-400 to-teal-500 px-1.5 font-semibold shadow-md">
          <WalletCardsIcon className="inline-block size-5" strokeWidth={2.5} />{" "}
          online bezahlen
        </span>
        . Dazu muss nur der <b>QR-Code</b> auf dem Tisch gescannt werden.
      </>
    ),
    image: popcorn.src,
  },
  {
    title: "Kapazität",
    description: (
      <>
        Da das Servicepersonal die Bestellungen mit dem eigenen Handy aufnimmt,
        kann Bstell online an{" "}
        <span className="bg-gradient-to-br from-rose-500 to-pink-600 bg-clip-text font-semibold text-transparent">
          Events beliebiger Grösse
        </span>{" "}
        eingesetzt werden.
      </>
    ),
    image: sushi.src,
  },
];

export default function FeatureSection() {
  return (
    <section
      className="mx-auto max-w-4xl scroll-mt-24 space-y-20 px-6"
      id="funktionen"
    >
      {features.map((feature, index) => (
        <div key={index}>
          <Feature {...feature} index={index} />
        </div>
      ))}
    </section>
  );
}
