# PixlForge Webshop

Statischer Webshop der PixlForge GmbH — KI-gestützte Grafiksoftware für Illustration, 3D-Modellierung, Architektur­visualisierung und VFX-Compositing.

## Projektstruktur

```
pixlforge/
├── index.html        Haupt-HTML-Datei (Single-Page-Architektur, 8 Seiten)
├── css/
│   └── style.css     Sämtliche Styles
├── js/
│   └── main.js       Navigation, Mobile-Menü, Kauf-Modal, Kontaktformular, Cookie-Banner
├── assets/
│   ├── feature-vector-design.png        (KI-generiert via OpenAI)
│   ├── feature-3d-modeling.png          (KI-generiert via OpenAI)
│   ├── feature-architecture.png         (KI-generiert via OpenAI)
│   ├── feature-vfx-compositing.png      (KI-generiert via OpenAI)
│   ├── team-anna-hofer.png              (KI-generiert via OpenAI)
│   ├── team-markus-kern.png             (KI-generiert via OpenAI)
│   ├── team-lena-berger.png             (KI-generiert via OpenAI)
│   ├── team-thomas-pichler.png          (KI-generiert via OpenAI)
│   ├── team-sara-reiter.png             (KI-generiert via OpenAI)
│   └── team-felix-wagner.png            (KI-generiert via OpenAI)
└── README.md
```

## Seiten

| Seite | Erreichbar über |
|---|---|
| Startseite | Logo (oben links) |
| Features | Header-Link „Features" |
| Über uns | Header-Link „Über uns" — enthält Geschichte, Grundsätze, Team (mit Fotos), Marken, Mediennachweise, Barrierefreiheits­erklärung |
| Kontakt | Header-Link „Kontakt" + Footer |
| Shop | CTA-Button „Jetzt kaufen" |
| Lizenz | Footer |
| Datenschutz | Footer |
| Impressum | Footer |

## Navigation

Header: **Logo (links) — Features — Über uns — Kontakt — Jetzt kaufen (CTA, rechts).**
Auf Mobilgeräten unter 820 px wird das Menü zu einem Hamburger-Toggle.

## Deployment auf GitHub Pages

1. Repository auf GitHub anlegen (z. B. `pixlforge-webshop`)
2. Sämtliche Dateien aus diesem Ordner ins Repository laden — die Ordner­struktur muss erhalten bleiben
3. Im Repository unter **Settings → Pages → Source** „Deploy from a branch" wählen und Branch `main` sowie Ordner `/ (root)` festlegen
4. Nach kurzer Wartezeit ist die Seite unter `https://<benutzername>.github.io/pixlforge-webshop/` erreichbar

## Verwendete Schriften und Bilder

- **Schriftarten** DM Mono und Lora — beide unter SIL Open Font License Version 1.1 (über Google Fonts)
- **Foto-Inhalte** (Features-Seite und Team-Porträts auf „Über uns") wurden mit dem KI-Bild­generator von OpenAI (ChatGPT/DALL·E) erzeugt. Die genaue Lizenz­regelung ist auf der Lizenz-Seite unter § 10 dokumentiert
- **Icon-Set** basiert auf Feather Icons von Cole Bemis (MIT License)

## Technische Hinweise

- Vollständig statische Website ohne Backend
- WCAG 2.2 Konformitäts­stufe AA (teil­konform — siehe Barrierefreiheits­erklärung mit dokumentierten Ausnahmen)
- Single-Page-Architektur — Seitenwechsel ohne Page-Reload via JavaScript
- Mobile-First-Optimierung mit Hamburger-Menü ab 820 px
- Container-Breite max. 1400 px für volle Ausnutzung großer Bildschirme
- Sämtliche Kauf- und Kontakt­prozesse sind clientseitig gemockt

## Rechtliche Grundlagen

Die rechtlichen Inhalte der Website wurden auf folgende österreichische und europäische Vorschriften abgestimmt:

- **Datenschutz:** DSGVO (Verordnung (EU) 2016/679), österreichisches Daten­schutzgesetz (DSG), § 165 Telekommunikations­gesetz 2021 (TKG 2021)
- **Barrierefreiheit:** Web Content Accessibility Guidelines 2.2 (WCAG 2.2 AA), österreichisches Web-Zugänglichkeits-Gesetz (WZG), Barrierefreiheits­gesetz (BaFG) ab 28. Juni 2025, Richtlinie (EU) 2016/2102, Richtlinie (EU) 2019/882 (European Accessibility Act); Beschwerde- und Durchsetzungs­stelle: Österreichische Forschungs­förderungs­gesellschaft (FFG)
- **Lizenz/EULA:** Konsumenten­schutzgesetz (KSchG), Verbraucher­gewähr­leistungs­gesetz (VGG), Allgemeines Bürgerliches Gesetz­buch (ABGB), Produkt­haftungs­gesetz (PHG), Urheber­rechts­gesetz (UrhG), Unternehmens­gesetzbuch (UGB), Bundesabgaben­ordnung (BAO)
- **Impressum:** § 24 Mediengesetz (MedienG), § 5 E-Commerce-Gesetz (ECG)
