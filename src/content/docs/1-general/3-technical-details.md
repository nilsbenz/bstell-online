---
title: Wie's funktioniert
description:
  "Erfahre, wie «Bstell online» technisch funktioniert: Cloud-basiertes
  Kassensystem mit QR-Bestellung, ePOS-Druckern und einfacher Netzwerkstruktur."
group: Allgemeines
published: true
slug: wies-funktioniert
---

# Wie «Bstell online» funktioniert

In diesem Artikel erfährst du, wie «Bstell online» technisch aufgebaut ist. Für
die Verwendung des Kassensystems musst du die Details nicht kennen, du kannst
diesen Artikel also auch ganz getrost auslassen.

Nachfolgend findest du eine Grafik, welche die Struktur des Kassensystems
aufzeigt. Die Pfeile zeigen den Weg einer Bestellung vom Servicepersonal oder
dem Kunden bis zum Drucker.

<img src="/docs-assets/overview.svg" alt="Aufbau des Kassensystems" class="shadow-none" />

## Das lokale Netzwerk

Für das Drucken der Bestellungen wird ein lokales Netzwerk benötigt, welches
mindestens folgende Geräte umfasst:

- Ein Router mit Internetverbindung. Das Netzwerk muss ans Internet
  angeschlossen sein, da die Bestellungen aus der Cloud geladen werden.
- Ein Laptop, welcher mit der Webapp die Bestellungen lädt und diese via das
  ePOS SDK von Epson direkt aus dem Browser an einen Drucker schickt.
- Einen oder mehrere Epson POS Drucker. Empfohlen sind kabelgebundene
  Netzwerkdrucker, da diese zuverlässiger sind als WLAN-Drucker.

## Die Google Cloud

Für die Datenbank und das Serverless Backend werden die Dienste von Firebase
(Google Cloud) verwendet. Jede Bestellung wird in die Firestore Datenbank
geschrieben, von wo sie vom oben erwähnten Laptop geladen und gedruckt werden.

Der Vorteil von diesem Aufbau ist, dass keine Bestellungen lokal gespeichert
werden und sie daher nicht aufgrund von lokalen Ausfällen gelöscht werden
können. Ausserdem kann so die Anzahl Geräte im lokalen Netzwerk minimiert
werden, da das Servicepersonal nur mit der Google Cloud interagiert.

## Bestellungen aufgeben

Bestellungen werden vom Personal oder auch von Kunden direkt über das eigene
Smartphone erfasst. Es ist also keine zusätzliche Hardware nötig. Da die
Bestellungen in die Firestore Datenbank geschrieben werden, müssen die Geräte
der bestellenden Personen nicht im selben Netzwerk sein wie die Drucker.

### Servicepersonal

Das Personal installiert die PWA und kann anschliessend über die integrierte
Benutzerverwaltung für einen Event freigeschaltet werden. Dann kann eine
Servicekraft Bestellungen erfassen, welche in die Firestore Datenbank
geschrieben werden.

### QR-Code Bestellungen

Ein Kunde scannt einen QR-Code auf dem Tisch und gelangt auf die Webapp, wo er
die gewünschten Artikel wählen kann. Für die Bezahlung wird Stripe verwendet,
sobald diese bestätigt wurde kann die Bestellung in der Küche gedruckt werden.
Wird nicht bezahlt, wird auch nichts gedruckt.
