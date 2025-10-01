---
title: Zahlungsanbieter
group: Funktionen
published: true
slug: funktionen/zahlungsanbieter
---

# Zahlungsanbieter

«Bstell online» arbeitet mit dem Zahlungsanbieter Stripe zusammen. Stripe ist im
Vergleich zur Konkurrenz eher günstig und weit verbreitet. Es werden die meisten
gängigen Zahlungsmethoden unterstützt, unter anderem Kreditkarten und Twint.

Zahlungen gehen direkt an das Stripe-Konto deines Vereins, es gibt also keine
Zwischenstation auf einem «Bstell online»-Konto. Dafür wird
[Stripe Connect](https://stripe.com/de-ch/connect) verwendet, dasselbe Prinzip
wie auch bei grossen Platformen wie Shopify. Du hast die volle Kontrolle und
Transparenz über sämtliche Zahlungen über das Stripe Dashboard.

## Stripe verbinden

Öffne den Tab «Online-Bestellungen» auf der Vereinsseite in der Webapp. Dort
siehst du eine Schaltfläche **«Loslegen»**, welche dich zu Stripe weiterleitet.
Erstelle einen Account bei Stripe oder melde dich alternativ mit einem bereits
vorhandenen Account an.

> **Tipp:** Registriere dich früh genug bei Stripe, dies kann einige Tage
> dauern. Schau ab und zu im Dashboard von Stripe vorbei, um allfällige
> Fehlermeldungen nicht zu übersehen. Stripe kann, wenn z.B. die
> Unternehmungs&shy;registrierung nicht erfolgreich war, Zahlungen ab einem
> späteren Zeitpunkt deaktivieren. Dann können Kunden nicht mehr online bezahlen
> und daher auch nicht bestellen.

## Zahlungsmethoden definieren

Standardmässig sind nur Kartenzahlungen aktiviert. Du kannst im Stripe Dashboard
weitere Zahlungsmöglichkeiten wie z.B. Twint erlauben.

Achte dabei darauf, dass du die Konfiguration für Bstell online ausgewählt hast:

![Zahlungsmethode für die Konfiguration «Bstell online» bearbeiten](/docs-assets/update-stripe-paymentmethods.png)

<a href="https://dashboard.stripe.com/settings/payment_methods" class="button">Zahlungsmethoden
bearbeiten</a>

> **Apple Pay** ist standardmässig aktiviert, muss jedoch noch im Dashboard
> konfiguriert werden. Dafür bei der Zahlungsmethode «Apple Pay» die Option
> «Domains konfigurieren» wählen und die Domain bstell.online hinzufügen
