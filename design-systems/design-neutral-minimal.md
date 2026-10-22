# Neutral Minimal Design System
**Calm & Clean Edition**
Version 1.0 | Juni 2026

Lugn, minimalistisk stil med fokus på användarvänlighet och klarhet.

## 1. Brand Philosophy
- **Känsla**: Neutral, professionell, lugn, modern.
- **Estetik**: Gråvitt med blå/gröna accenter – ingen distraktion.

## 2. Color Palette

### Core Colors
| Token                | HEX        | RGB                    | Usage |
|----------------------|------------|------------------------|-------|
| `--bg-primary`       | `#F9FAFB`  | rgb(249, 250, 251)     | Main background |
| `--bg-secondary`     | `#F3F4F6`  | rgb(243, 244, 246)     | Cards, panels |
| `--bg-tertiary`      | `#E5E7EB`  | rgb(229, 231, 235)     | Modals |
| `--text-primary`     | `#1F2937`  | rgb(31, 41, 55)        | Headings |
| `--text-secondary`   | `#4B5563`  | rgb(75, 85, 99)        | Body |
| `--text-muted`       | `#6B7280`  | rgb(107, 114, 128)     | Captions |
| `--accent-primary`   | `#0EA5E9`  | rgb(14, 165, 233)      | Sky Blue |
| `--accent-secondary` | `#10B981`  | rgb(16, 185, 129)      | Emerald Green |
| `--border`           | `#D1D5DB`  | rgb(209, 213, 219)     | Borders |

## 3. Typography
- Headings & Body: 'Inter', system-ui, sans-serif

## 4. Spacing & Layout
Samma globala mått.

## 5. Component Guidelines
- **Border Radius**: 8px (balanserad)
- **Buttons**: Ren, lätt skugga, subtil hover
- **Cards**: Ren border, minimal skugga
- **Active Nav**: Blå accent + bakgrund

## 6. CSS Variables
```css
:root {
  --bg-primary: #F9FAFB;
  --bg-secondary: #F3F4F6;
  --bg-tertiary: #E5E7EB;
  --text-primary: #1F2937;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --accent-primary: #0EA5E9;
  --accent-secondary: #10B981;
  --border: #D1D5DB;
  --radius: 8px;
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```
