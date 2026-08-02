# Laser Light Design System
**Aggressive Laser Edition – Light Mode**
Version 1.0 | Juni 2026

Ljus variant av Laser Brand. Behåller den futuristiska känslan men med ljus bakgrund för bättre läsbarhet i ljusa miljöer.

## 1. Brand Philosophy
- **Känsla**: Ljus, futuristisk, energisk.
- **Estetik**: Ljus bakgrund + stark cyan laser glow som poppar.

## 2. Color Palette

### Core Colors
| Token                | HEX        | RGB                    | Usage |
|----------------------|------------|------------------------|-------|
| `--bg-primary`       | `#F8FAFC`  | rgb(248, 250, 252)     | Main background (light space) |
| `--bg-secondary`     | `#F1F5F9`  | rgb(241, 245, 249)     | Cards, panels |
| `--bg-tertiary`      | `#E2E8F0`  | rgb(226, 232, 240)     | Modals, elevated |
| `--text-primary`     | `#0F172A`  | rgb(15, 23, 42)        | Headings |
| `--text-secondary`   | `#475569`  | rgb(71, 85, 105)       | Body text |
| `--text-muted`       | `#64748B`  | rgb(100, 116, 139)     | Captions |
| `--accent-primary`   | `#00E5FF`  | rgb(0, 229, 255)       | Primary CTAs |
| `--accent-secondary` | `#00FF9F`  | rgb(0, 255, 159)       | Success |
| `--laser`            | `#00B4FF`  | rgb(0, 180, 255)       | Signature glow |
| `--silver`           | `#94A3B8`  | rgb(148, 163, 184)     | Borders |

**Laser Glow:**
```css
.laser-glow { box-shadow: 0 0 10px #00E5FF, 0 0 25px #00B4FF, 0 0 50px rgba(0,180,255,0.4); }
```

## 3. Typography
- Headings: Space Grotesk
- Body: Inter
- Mono: JetBrains Mono

## 4. Spacing & Layout
Samma globala mått som Laser Dark.

## 5. Component Guidelines
- **Border Radius**: 12px
- **Buttons**: Stark laser glow på ljus bakgrund
- **Cards**: Subtil skugga + glassmorphism-effekt
- **Active Nav**: Laser accent + glow

## 6. CSS Variables
```css
:root {
  --bg-primary: #F8FAFC;
  --bg-secondary: #F1F5F9;
  --bg-tertiary: #E2E8F0;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --accent-primary: #00E5FF;
  --accent-secondary: #00FF9F;
  --laser: #00B4FF;
  --silver: #94A3B8;
  --radius: 12px;
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```
