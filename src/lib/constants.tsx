import { cn } from "./utils";

export const EMAIL = "info@bstell.online";

export const EVENT_LICENSE_PRICE = 150;
export const TRANSACTION_FEE = 1;

export function BstellIcon({ className }: { className?: string }) {
  return <img src="/icon.svg" alt="" className={cn("size-6", className)} />;
}
