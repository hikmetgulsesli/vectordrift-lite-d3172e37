---
name: Vector Drift
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303035'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#fcf5ff'
  on-tertiary: '#3c0090'
  tertiary-container: '#e3d4ff'
  on-tertiary-container: '#7318ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  stats-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style
The design system is built on a high-octane, neon-noir aesthetic designed to evoke the sensation of speed, precision, and digital adrenaline. It targets a gaming audience that appreciates the intersection of retro arcade nostalgia and futuristic high-tech interfaces.

The visual style is a hybrid of **Vaporwave** and **Glassmorphism**, set against a deep-space backdrop. It utilizes vibrant, emissive "light-trail" outlines to define structure, creating a UI that feels like a Head-Up Display (HUD) projected into a cockpit. Motion is implied through directional glows, high-contrast accents, and sharp, geometric precision. The interface should feel like a living machine—reactive, luminous, and relentlessly modern.

## Colors
This design system utilizes a "Neon-on-Void" palette. The core is a deep, near-black neutral that provides the necessary contrast for emissive elements.

- **Primary (Electric Cyan):** Used for primary actions, telemetry data, and "safe" system states. It should always carry a subtle outer glow.
- **Secondary (Neon Magenta):** Used for high-energy accents, competitive rankings, and "boost" indicators.
- **Tertiary (Plasma Purple):** Used for secondary UI layers, background depth, and specialized power-up states.
- **Functional Colors:** Success and Error states use highly saturated greens and reds, treated with the same glowing properties as the primary palette to maintain visual consistency.

## Typography
The typography strategy blends aggressive geometric shapes with high-readability sans-serifs to ensure clarity during high-speed gameplay.

- **Sora** is the voice of the brand, used for large headings and impactful UI moments. It should be styled with "neon flicker" or "glitch" animations in high-priority states.
- **Inter** handles all functional body text, ensuring instructions and settings are legible against complex backgrounds.
- **Space Grotesk** is reserved for technical data, labels, and "HUD-style" telemetry. It should frequently be used in all-caps to reinforce the military-grade aerospace aesthetic.

## Layout & Spacing
The layout follows a **Fluid Grid** model that emphasizes the edges of the screen, mimicking a pilot's field of vision. 

- **Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile.
- **Safe Zones:** Crucial HUD elements (speed, map, health) should be anchored to the corners with a consistent 24px margin to prevent visual clutter in the center "action zone."
- **Rhythm:** Spacing is strictly based on a 4px baseline. Use tighter spacing (4px-8px) for related data points to create a "technical block" feel, and larger gaps (40px+) to separate distinct UI modules like Navigation vs. Gameplay Stats.

## Elevation & Depth
In this design system, depth is not created through shadows, but through **light and transparency**.

- **Glassmorphism:** All containers use a semi-transparent dark fill (`rgba(20, 20, 28, 0.7)`) with a high-intensity backdrop blur (20px-30px). This allows game backgrounds to bleed through without sacrificing text contrast.
- **Emissive Outlines:** Instead of drop shadows, use 1px inner or outer borders with a `box-shadow` glow (e.g., `0 0 10px rgba(0, 242, 255, 0.5)`).
- **Z-Axis Hierarchy:** Higher elevation elements have brighter, more saturated border glows. Lower elevation elements are more transparent and have muted, purple-toned borders.

## Shapes
The shape language is sharp and aerodynamic. While most elements use a "Soft" 4px radius (`rounded-sm`) to keep the interface from feeling "cheap" or "unpolished," avoid large rounded corners.

- **Angled Cuts:** Incorporate 45-degree clipped corners for primary containers and buttons to reinforce the "stealth fighter" aesthetic.
- **Dividers:** Use thin, 1px horizontal lines that fade out at the edges (linear gradient: transparent -> cyan -> transparent) to separate list items.

## Components
- **Buttons:** Primary buttons feature a solid cyan background with black text. On hover, they should trigger a "bloom" effect. Secondary buttons are "ghost style" with a 1px neon magenta border and magenta text.
- **HUD Chips:** Small, semi-transparent capsules used for displaying active modifiers (e.g., "BOOST x2"). These should use **Space Grotesk** in all-caps.
- **Input Fields:** Dark backgrounds with a 1px bottom-border only. When focused, the border should glow primary cyan and expand slightly.
- **Cards:** Use the glassmorphic style with a subtle "scanline" overlay pattern (low-opacity horizontal lines) to give them a retro-monitor feel.
- **Progress Bars:** Lean, 4px tall bars. The "fill" should be a gradient from Tertiary to Primary, with a bright "leading edge" light point to indicate movement.
- **Gauges:** Circular telemetry indicators for speed or energy, using segmented strokes rather than continuous lines to feel more mechanical.