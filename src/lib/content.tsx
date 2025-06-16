import { BookMarkedIcon, FlameIcon, InfoIcon, PrinterIcon } from "lucide-react";

export const groupIcons = {
  Allgemeines: <BookMarkedIcon className="size-5" strokeWidth={2.25} />,
  Hardware: <PrinterIcon className="size-5" strokeWidth={2.25} />,
  Funktionen: <FlameIcon className="size-5" strokeWidth={2.25} />,
};

export const defaultGroupIcon = (
  <InfoIcon className="size-5" strokeWidth={2.25} />
);
