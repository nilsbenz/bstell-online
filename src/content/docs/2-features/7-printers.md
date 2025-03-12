---
title: Drucker
group: Funktionen
published: true
slug: funktionen/drucker
---

# Drucker einrichten

In diesem Artikel erfährst du, wie du deinen Epson Drucker mit der Webapp
verbinden kannst.

## Drucker anschliessen

Als erstes muss der Drucker an den Strom angeschlossen und **mit dem Router
verbunden** werden. Empfohlen ist hier eine kabelgebundene Internetverbindung,
da die WLAN-Drucker unzuverlässig sein können.

Nach einigen Sekunden druckt der Drucker folgenden Zettel, von dem wir die ihm
zugewiesene IP-Adresse ablesen können.

<img src="/docs-assets/ip-address.png" alt="IP-Adresse des Druckers" style="width: 100%; max-width: 24rem; margin-inline: auto" />

## EpsonNet Config

In der Konfiguration des Druckers muss eine Änderung vorgenommen werden, damit
aus dem Web gedruckt werden kann. Navigiere dazu in deinem Browser zur
IP-Adresse des Druckers, in diesem Fall also
[http://192.168.1.101](http://192.168.1.101).

Da der Drucker kein SSL-Zertifikat hat, muss die unsichere Verbindung zuerst
bestätigt werden.

> Die Bestätigung der unsicheren Verbindung muss **nach einigen Tagen neu
> gemacht werden**. Denke daran, wenn du Bestellungen drucken willst.

<img src="/docs-assets/insecure.png" alt="Unsichere Verbindung bestätigen" class="shadow-none" />

Um uns einzuloggen, brauchen wir einen Benutzernamen und Passwort.

- Der Standard-Benutzername ist «**epson**».
- Das Standardpasswort ist je nach Alter des Druckers unterschiedlich. Je nach
  Modell ist dies ebenfalls «**epson**», die **Seriennummer** des Druckers oder
  der im Bild markierte **Zahlencode**. Der abgebildete Sticker befindet sich
  wahrscheinlich an der Unterseite des Druckers.

<img src="/docs-assets/password.png" alt="Passwort für das Admin-Dashboard des Druckers" style="width: 100%; max-width: 24rem; margin-inline: auto" />

In der Konfiguration kann nun **ePOS-Print** aktiviert und mit «**Send**»
gespeichert werden. Der Drucker startet anschliessend neu.

<img src="/docs-assets/enable-epos.png" alt="ePOS aktivieren" class="shadow-none" />

> Die Device ID muss zwingend den Wert _local_printer_ haben, diesen Wert also
> unbedingt unverändert lassen.

Es kann von Vorteil sein, wenn der Drucker immer dieselbe IP-Adresse zugewiesen
bekommt. Dies kannst du in der Konfiguration und am besten im Router so
definieren.

## Drucker verbinden

> Das funktioniert ohne gültiges SSL-Zertifikat des Druckers nur im Browser und
> **nicht in der PWA**. Dies, weil in der PWA keine HTTP (ohne S) Anfragen
> erlaubt sind.

Öffne auf [bstell.online](https://bstell.online) nun deinen Event und dort die
Drucker-Seite. Hier kannst du den eben konfigurierten Drucker hinzufügen und
testen. Benutze dafür die Schaltfläche rechts oben und gib die IP-Adresse des
Druckers an.

<img src="/docs-assets/add-printer.png" alt="Drucker hinzufügen" class="shadow-none" />

Nun siehst du den Drucker in der Liste. Verbinde ihn mit dem Stecker-Symbol,
nach einigen Sekunden solltest du hier eine Testnachricht drucken können.

> Achte darauf, dass du die **richtige IP-Adresse angegeben** hast. Sobald der
> Drucker aus dem Netzwerk aus- und wieder eingetreten ist, kann es sein dass
> ihm eine andere IP-Adresse zugewiesen wurde.

<img src="/docs-assets/connect-printer.png" alt="Drucker verbinden" class="shadow-none" />

## Outputs zuweisen

Nun kannst du die Outputs einem Drucker zuweisen. Klicke dafür weiter unten auf
derselben Seite auf die Drucker-Schaltfläche des jeweiligen Outputs und gib den
gewünschten Drucker an. Anschliessend werden alle Artikel, welche diesem Output
zugewiesen wurden, gedruckt.

Für jeden verbundenen Output wird ein Status angezeigt. Dieser ist auch auf
einem anderen Gerät aus sichtbar, du kannst also auch mit deinem Handy schauen,
ob beim Drucken ein Fehler aufgetreten ist.

### Was passiert, wenn ein Fehler auftritt?

Sollte beim Drucker das Papier leer sein oder sonst ein Fehler auftreten, geht
die zu druckende Bestellung nicht verloren. Die App wartet, bis der Fehler
behoben und der Zettel erfolgreich gedruckt wurde, bevor sie abgehakt und die
nächste Bestellung ins Visier genommen wird.
