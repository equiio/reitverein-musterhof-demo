# Reitverein Musterhof e.V. – Demowebsite

Eine eigenständige, vollständig fiktive Vereins-Demowebsite. Gestaltung und technische Einfachheit orientieren sich an der getrennten Reitstall-Demo, während Inhalt, Farbwelt und Schwerpunkt klar auf Gemeinschaft, Kinder und Jugendliche, Mitgliedschaft, Veranstaltungen, Vorstand und Vereinsnachrichten ausgerichtet sind.

## Technischer Aufbau

Das Projekt ist bewusst statisch und benötigt keine Laufzeitabhängigkeiten:

- HTML für Startseite und Unterseiten
- `style.css` für das gemeinsame responsive Design
- `script.js` für mobile Navigation, dezente Scroll-Reveals und lokale Demofunktionen
- `news.js` und `content/beitraege.json` für die datenbasierte Aktuelles-Ansicht
- lokale, optimierte WebP-Bilder unter `assets/`

## Lokal starten

Da die Aktuelles-Seite JSON lädt, sollte das Projekt über einen lokalen Webserver geöffnet werden:

```bash
python -m http.server 8080
```

Anschließend `http://localhost:8080/` öffnen.

## Build und Veröffentlichung

Es gibt keinen Build-Schritt. Die Quelldateien sind bereits das veröffentlichungsfähige Ergebnis.

- Build-Befehl: keiner
- optionaler Prüf-/Startbefehl: `python -m http.server 8080`
- Veröffentlichungsverzeichnis bei IONOS Deploy Now: Repository-Root (`.`)
- Framework-Einstellung: `Other` / `Static HTML`

## Inhaltsstruktur

- `index.html` – Startseite und sechs nummerierte Hauptkacheln
- `verein.html` – Werte, Gemeinschaft und fiktiver Vorstand
- `jugend.html` – Kinder- und Jugendbereich
- `mitglied.html` – unverbindliche Informationen zur Mitgliedschaft
- `veranstaltungen.html` – eindeutig fiktive Beispielveranstaltungen
- `aktuelles.html` – datenbasierte Vereinsnachrichten mit Detailansichten
- `impressum.html`, `datenschutz.html` – deutlich gekennzeichnete rechtliche Platzhalter

## Bilder

- `assets/hero-gemeinschaft.webp` – Hero-Motiv
- `assets/aktuelles/` – Beitragsbilder

Alle verwendeten Bilddateien liegen lokal vor. Neue Bilder sollten vor dem Einspielen auf passende Rechte, anonyme Darstellung, aussagekräftige Alternativtexte, WebP-Format und angemessene Dateigröße geprüft werden.

## Neuen Beitrag ergänzen

1. Optimiertes WebP-Bild unter `assets/aktuelles/` ablegen.
2. In `content/beitraege.json` ein neues Objekt ergänzen.
3. Folgende Felder pflegen: `slug`, `titel`, `date` (`JJJJ-MM-TT`), `kurztext`, `text` (Liste von Absätzen), `image`, `alt`, `demo`.
4. Für Musterinhalte `demo` auf `true` setzen.

Die Beiträge werden automatisch nach Datum sortiert. Der neueste Beitrag ist auf der Aktuelles-Seite geöffnet; über `aktuelles.html#slug` kann direkt auf einen Beitrag verwiesen werden.

## Anonyme Demoversion

Die Website enthält ausschließlich fiktive Namen, Inhalte, Termine, Personen, Orte und rechtliche Platzhalter. Sie hat keinen Bezug zu einem realen Verein, Reitstall oder einer realen Organisation. Vor einer echten Veröffentlichung müssen insbesondere Impressum, Datenschutz, Vereinsinformationen, Mitgliedschaftsbedingungen und sämtliche Inhalte rechtlich und redaktionell geprüft werden.

Es werden keine Trackingdienste, externen Einbettungen, Formulare oder zustimmungspflichtigen Cookies verwendet.
