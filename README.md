# PixlForge — Demo-Webshop

Dieses Repository enthält den statischen Demo-Webshop der **PixlForge GmbH** (fiktives Unternehmen, erstellt im Rahmen einer Lehrveranstaltung).

## Projektstruktur

```
pixlforge/
├── index.html        # Haupt-HTML-Datei mit allen 7 Seiten
├── css/
│   └── style.css     # Alle Styles
├── js/
│   └── main.js       # Navigation, Formulare, Cookie-Banner
├── assets/           # Platz für zukünftige Bilder/Icons
└── README.md
```

## Seiten

| Seite | Aufgabe |
|---|---|
| Start (Home) | — |
| Shop | Aufgabe 1 |
| Über uns | Aufgabe 2 + 3 |
| Lizenz | Aufgabe 4 |
| Datenschutz | Aufgabe 5 |
| Impressum | Aufgabe 6 |
| Kontakt | Aufgabe 6 |

## Deployment auf GitHub Pages

1. Repository auf GitHub erstellen (z. B. `pixlforge-webshop`)
2. Alle Dateien hochladen (Ordnerstruktur beibehalten!)
3. **Settings → Pages → Source: Deploy from a branch → main / (root)**
4. Warten (~1 Min.) → Site ist unter `https://<username>.github.io/pixlforge-webshop/` erreichbar

## Technische Details

- **Statische Website** — kein Backend, kein Build-Prozess nötig
- **Single Page Application** (alle Seiten in einer HTML-Datei, JS-gesteuert)
- **WCAG 2.2 AA konform** — Skip-Link, ARIA-Labels, Fokusindikator, Farbkontraste ≥ 4.5:1
- **Google Fonts** via CDN (DM Mono + Lora) — Internetverbindung beim ersten Aufruf nötig
- Alle Kaufprozesse und Formulare sind **vollständig gemockt** — keine echten Daten werden verarbeitet

## Urheberrecht & Lizenzen

Alle verwendeten Drittmaterialien sind auf der Seite „Über uns → Mediennachweise" dokumentiert.

- **DM Mono**: SIL Open Font License 1.1
- **Lora**: SIL Open Font License 1.1
- **Feather Icons (Basis)**: MIT License
- Alle übrigen Inhalte: © 2024–2025 PixlForge GmbH (fiktiv)

---

> **Hinweis:** Alle Unternehmens- und Personenangaben sind fiktiv und dienen ausschließlich Ausbildungszwecken.
