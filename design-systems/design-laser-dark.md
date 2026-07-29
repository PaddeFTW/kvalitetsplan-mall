# Laser Dark Design System
**Aggressive Laser Edition – Dark Mode**
Version 1.0 | Juni 2026

## 1. Brand Philosophy
Futuristisk, kraftfull, premium sci-fi känsla med aggressiv cyan laser-glow. Djup rymd-bakgrund för maximal kontrast och wow-effekt.

## 2. Color Palette

### Core Colors
| Token                | HEX        | RGB                    | Usage |
|----------------------|------------|------------------------|-------|
| `--bg-primary`       | `#050508`  | rgb(5, 5, 8)           | Main background (deep space void) |
| `--bg-secondary`     | `#11131A`  | rgb(17, 19, 26)        | Cards, panels, sidebars |
| `--bg-tertiary`      | `#1A1C26`  | rgb(26, 28, 38)        | Modals, elevated surfaces |
| `--text-primary`     | `#FFFFFF`  | rgb(255, 255, 255)     | Headings, primary text |
| `--text-secondary`   | `#A8B0C0`  | rgb(168, 176, 192)     | Body text, labels |
| `--text-muted`       | `#64748B`  | rgb(100, 116, 139)     | Captions, disabled |
| `--accent-primary`   | `#00E5FF`  | rgb(0, 229, 255)       | Primary CTAs, links, icons |
| `--accent-secondary` | `#00FF9F`  | rgb(0, 255, 159)       | Success, highlights |
| `--laser`            | `#00B4FF`  | rgb(0, 180, 255)       | Signature Laser Glow |
| `--silver`           | `#A8B5C7`  | rgb(168, 181, 199)     | Borders |
| `--diamond`          | `#E0F0FF`  | rgb(224, 240, 255)     | Premium highlights |

### Signature Laser Glow
```css
.laser-glow {
  box-shadow: 0 0 8px #00E5FF, 0 0 20px #00B4FF, 0 0 40px rgba(0, 180, 255, 0.35);
}
.laser-glow-intense {
  box-shadow: 0 0 12px #00E5FF, 0 0 30px #00B4FF, 0 0 60px rgba(0, 180, 255, 0.5);
}
```

## 3. Typography
- **Headings**: 'Space Grotesk', system-ui, sans-serif (tracking: -0.025em)
- **Body**: 'Inter', system-ui, sans-serif
- **Mono**: 'JetBrains Mono', monospace

## 4. Component Guidelines
- **Buttons**: Aggressive laser glow, border-radius 12px, hover: scale 105% + intense glow
- **Cards**: Glassmorphism (`backdrop-blur-xl border border-white/10`), hover laser glow
- **Inputs**: Laser focus ring
- **Navigation**: Active item with laser left border + glow
- **Border Radius**: 12px (futuristic round)

## 5. CSS Variables
```css
:root {
  --bg-primary: #050508;
  --bg-secondary: #11131A;
  --bg-tertiary: #1A1C26;
  --text-primary: #FFFFFF;
  --text-secondary: #A8B0C0;
  --text-muted: #64748B;
  --accent-primary: #00E5FF;
  --accent-secondary: #00FF9F;
  --laser: #00B4FF;
  --silver: #A8B5C7;
  --diamond: #E0F0FF;
  --radius: 12px;
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```
