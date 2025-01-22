import { cn } from "@/lib/utils";
import { getCollection } from "astro:content";
import { navigate } from "astro:transitions/client";
import { AlignRightIcon, BookMarkedIcon, InfoIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { defaultGroupIcon, groupIcons } from "@/lib/content";

const docsEntries = (await getCollection("docs")).filter(
  (e) => e.data.published,
);
const groups = Array.from(
  new Set(docsEntries.map((entry) => entry.data.group)),
);

export default function DocsNavDrawer({
  label,
  currentSlug,
}: {
  label: string;
  currentSlug: string;
}) {
  const [open, setOpen] = useState(false);

  function handleLinkClicked(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();

    setOpen(false);

    const href = e.currentTarget.href;

    setTimeout(() => {
      navigate(href);
    }, 150);
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between gap-2 truncate px-3"
        >
          <span className="truncate">{label}</span>
          <AlignRightIcon strokeWidth={2.25} className="size-5 shrink-0" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Dokumentation</DrawerTitle>
          <DrawerDescription>
            Bstell online – das Kassensystem für Vereinsanlässe.
          </DrawerDescription>
        </DrawerHeader>
        <nav className="max-h-[calc(90dvh-10rem)] overflow-y-auto p-4 pb-2">
          <ul>
            {groups.map((group) => (
              <React.Fragment key={group}>
                <li className="mb-1.5 mt-6 flex items-center gap-1.5 font-medium first:mt-0">
                  {groupIcons[group as keyof typeof groupIcons] ??
                    defaultGroupIcon}
                  {group}
                </li>
                {docsEntries
                  .filter((e) => e.data.group === group)
                  .map((e) => (
                    <DrawerClose asChild key={e.slug}>
                      <li
                        className={cn(
                          "relative ml-2 mr-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
                          e.slug === currentSlug &&
                            "text-foreground before:absolute before:-left-2 before:-top-px before:bottom-0 before:w-[3px] before:rounded before:bg-primary",
                        )}
                      >
                        <a
                          href={`/docs/${e.slug}`}
                          className="inline-block w-full rounded-sm px-1 pt-0.5 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          onClick={handleLinkClicked}
                        >
                          {e.data.title}
                        </a>
                      </li>
                    </DrawerClose>
                  ))}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Schliessen
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
