import { cn } from "./utils";

export const EMAIL = "info@bstell.online";

export function BstellIcon({ className }: { className?: string }) {
  return <img src="/icon.svg" alt="" className={cn("size-6", className)} />;
}
