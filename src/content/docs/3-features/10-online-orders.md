---
title: Online-Bestellungen
description:
  "Online-Bestellungen mit «Bstell online»: QR-Codes, Stripe-Zahlung, Trinkgeld,
  Kommentare und Gebühren flexibel verwalten – direkt vom Smartphone."
group: Funktionen
published: true
slug: funktionen/online-bestellungen
---

# Online-Bestellungen

Um Online-Bestellungen anzunehmen, musst du deinen Verein zuerst
[mit Stripe verbinden](/docs/funktionen/zahlungsanbieter). Dieser Artikel
beschreibt die verschiedenen Funktionen der Online-Bestellungen.

## Gebühren

Zusätzlich zu den
[Gebühren von Stripe](https://stripe.com/de-ch/pricing/local-payment-methods)
werden automatisch 1% vom Umsatz aus Online-Bestellungen abgezogen. Dies gilt
nicht für Bestellungen des Servicepersonals.

Wird eine Bestellung von 20 Fr. also per Twint bezahlt, werden Gebühren im Wert
von 88 Rp. verrechnet:

- 20 Rp. (1%) gehen an «Bstell online»
- 68 Rp. (30 Rp. + 1.9%) gehen an Stripe (ohne Gewähr, siehe Platformgebühren)

### Gebühren an Kunden verrechnen

Es besteht die Möglichkeit, dem Kunden zusätzlich zum Kaufpreis automatisch
Gebühren zu verrechnen. Diese können für einen Event auf der Seite
«Online-Bestellungen» auf einen Wert von 0-4% des Warenwerts festgelegt werden.

## QR-Codes

Um eine Bestellung aufzugeben, muss der Kunde einen QR-Code scannen, in dem die
Tischnummer enthalten ist. Daher hat jeder Tisch einen anderen QR-Code, dafür
werden Bestellungen an den falschen Tisch minimiert.

Die QR-Codes können automatisch generiert und heruntergeladen werden. Es gibt
zwei verschiedene Vorlagen, zum einen nur den QR-Code (z.B. um auf Etiketten zu
Drucken), zum anderen die Tischnummer mit dem entsprechenden QR-Code.

### QR-Codes wiederverwenden

Es gibt zwei verschiedene Varianten der QR-Codes:

- **pro Event**: diese QR-Codes findest du in den Online-Bestellungen im Event.
  Sie können nur für den entsprechenden Event verwendet werden.
- **wiederverwendbar**: auf der Vereins-Seite der Webapp findest du einen Tab
  «QR-Codes». Hier können QR-Codes für den Verein erstellt werden, sodass sie
  für zukünftige Events wiederverwendet werden können.

> Bei **wiederverwendbaren QR-Codes** muss jeweils angegeben werden, zu welchem
> Event die Kunden **weitergeleitet** werden sollen.

## Kommentare

Falls erwünscht kannst du Kunden erlauben, Kommentare zu bestellten Artikeln zu
verfassen. Beachte, dass das Servicepersonal unabhängig von dieser Einstellung
immer Kommentare erfassen kann.

## Trinkgeld

Du kannst selber entscheiden, ob ihr Trinkgeld annehmen wollt oder nicht. Der
Kunde hat die Möglichkeit, 1.– oder 10% Trinkgeld zu geben oder selber einen
Betrag einzugeben.

Der Begriff «Trinkgeld» kann durch einen beliebigen Text ersetzt werden, falls
ihr zum Beispiel für einen speziellen Zweck sammelt.
