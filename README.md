# Reitverein Musterhof e.V. â€“ Demowebsite

Eine eigenstÃ¤ndige, vollstÃ¤ndig fiktive Vereins-Demowebsite. Gestaltung und technische Einfachheit orientieren sich an der getrennten Reitstall-Demo, wÃ¤hrend Inhalt, Farbwelt und Schwerpunkt klar auf Gemeinschaft, Kinder und Jugendliche, Mitgliedschaft, Veranstaltungen, Vorstand und Vereinsnachrichten ausgerichtet sind.

## Technischer Aufbau

Das Projekt ist bewusst statisch und benÃ¶tigt keine LaufzeitabhÃ¤ngigkeiten:

- HTML fÃ¼r Startseite und Unterseiten
- `style.css` fÃ¼r das gemeinsame responsive Design
- `script.js` fÃ¼r mobile Navigation, dezente Scroll-Reveals und lokale Demofunktionen
- `news.js` und `content/beitraege.json` fÃ¼r die datenbasierte Aktuelles-Ansicht
- lokale, optimierte WebP-Bilder unter `assets/`

## Lokal starten

Da die Aktuelles-Seite JSON lÃ¤dt, sollte das Projekt Ã¼ber einen lokalen Webserver geÃ¶ffnet werden:

```bash
python -m http.server 8080
```

AnschlieÃŸend `http://localhost:8080/` Ã¶ffnen.

## Build und VerÃ¶ffentlichung

Es gibt keinen Build-Schritt. Die Quelldateien sind bereits das verÃ¶ffentlichungsfÃ¤hige Ergebnis.

- Build-Befehl: keiner
- optionaler PrÃ¼f-/Startbefehl: `python -m http.server 8080`
- VerÃ¶ffentlichungsverzeichnis bei IONOS Deploy Now: Repository-Root (`.`)
- Framework-Einstellung: `Other` / `Static HTML`

## Inhaltsstruktur

- `index.html` â€“ Startseite und sechs nummerierte Hauptkacheln
- `verein.html` â€“ Werte, Gemeinschaft und fiktiver Vorstand
- `jugend.html` â€“ Kinder- und Jugendbereich
- `mitglied.html` â€“ unverbindliche Informationen zur Mitgliedschaft
- `veranstaltungen.html` â€“ eindeutig fiktive Beispielveranstaltungen
- `aktuelles.html` â€“ datenbasierte Vereinsnachrichten mit Detailansichten
- `impressum.html`, `datenschutz.html` â€“ deutlich gekennzeichnete rechtliche Platzhalter

## Bilder

- `assets/hero-gemeinschaft.webp` â€“ Hero-Motiv
- `assets/aktuelles/` â€“ Beitragsbilder

Alle verwendeten Bilddateien liegen lokal vor. Neue Bilder sollten vor dem Einspielen auf passende Rechte, anonyme Darstellung, aussagekrÃ¤ftige Alternativtexte, WebP-Format und angemessene DateigrÃ¶ÃŸe geprÃ¼ft werden.

## Neuen Beitrag ergÃ¤nzen

1. Optimiertes WebP-Bild unter `assets/aktuelles/` ablegen.
2. In `content/beitraege.json` ein neues Objekt ergÃ¤nzen.
3. Folgende Felder pflegen: `slug`, `titel`, `date` (`JJJJ-MM-TT`), `kurztext`, `text` (Liste von AbsÃ¤tzen), `image`, `alt`, `demo`.
4. FÃ¼r Musterinhalte `demo` auf `true` setzen.

Die BeitrÃ¤ge werden automatisch nach Datum sortiert. Der neueste Beitrag ist auf der Aktuelles-Seite geÃ¶ffnet; Ã¼ber `aktuelles.html#slug` kann direkt auf einen Beitrag verwiesen werden.

## Anonyme Demoversion

Die Website enthÃ¤lt ausschlieÃŸlich fiktive Namen, Inhalte, Termine, Personen, Orte und rechtliche Platzhalter. Sie hat keinen Bezug zu einem realen Verein, Reitstall oder einer realen Organisation. Vor einer echten VerÃ¶ffentlichung mÃ¼ssen insbesondere Impressum, Datenschutz, Vereinsinformationen, Mitgliedschaftsbedingungen und sÃ¤mtliche Inhalte rechtlich und redaktionell geprÃ¼ft werden.

Es werden keine Trackingdienste, externen Einbettungen, Formulare oder zustimmungspflichtigen Cookies verwendet.

