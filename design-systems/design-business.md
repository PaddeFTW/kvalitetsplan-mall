# Business Professional Design System
**Clean Corporate Edition**
Version 1.0 | Juni 2026

Professionell stil för konsult-, ISO- och affärsapplikationer. Ren, trovärdig och minimalistisk.

## 1. Brand Philosophy
- **Känsla**: Seriös, pålitlig, professionell.
- **Estetik**: Vitt + blåa accenter, minimal glow.

## 2. Color Palette

### Core Colors
| Token                | HEX        | RGB                    | Usage |
|----------------------|------------|------------------------|-------|
| `--bg-primary`       | `#FFFFFF`  | rgb(255, 255, 255)     | Main background |
| `--bg-secondary`     | `#F8F9FA`  | rgb(248, 249, 250)     | Cards, panels |
| `--bg-tertiary`      | `#F1F3F5`  | rgb(241, 243, 245)     | Modals |
| `--text-primary`     | `#1F2937`  | rgb(31, 41, 55)        | Headings |
| `--text-secondary`   | `#4B5563`  | rgb(75, 85, 99)        | Body text |
| `--text-muted`       | `#6B7280`  | rgb(107, 114, 128)     | Captions |
| `--accent-primary`   | `#1E40AF`  | rgb(30, 64, 175)       | Professional Blue |
| `--accent-secondary` | `#3B82F6`  | rgb(59, 130, 246)      | Ljusare blå |
| `--success`          | `#10B981`  | rgb(16, 185, 129)      | Success |
| `--border`           | `#E5E7EB`  | rgb(229, 231, 235)     | Borders |

## 3. Typography
- Headings & Body: 'Inter', system-ui, sans-serif

## 4. Spacing & Layout
Samma som Laser-serien.

## 5. Component Guidelines
- **Border Radius**: 6px (mer affärsmässigt)
- **Buttons**: Clean, minimal shadow, blå accent
- **Cards**: Subtil border + lätt skugga
- **Active Nav**: Tjock blå vänsterkant + bakgrundsfärg

## 6. CSS Variables
```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --bg-tertiary: #F1F3F5;
  --text-primary: #1F2937;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --accent-primary: #1E40AF;
  --accent-secondary: #3B82F6;
  --success: #10B981;
  --border: #E5E7EB;
  --radius: 6px;
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```
