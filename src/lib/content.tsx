import { BookMarkedIcon, InfoIcon, StarIcon } from "lucide-react";

export const groupIcons = {
  Allgemeines: <BookMarkedIcon className="size-5" strokeWidth={2.25} />,
  Funktionen: <StarIcon className="size-5" strokeWidth={2.25} />,
};

export const defaultGroupIcon = (
  <InfoIcon className="size-5" strokeWidth={2.25} />
);
