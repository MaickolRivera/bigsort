# Big Sort

Interactive web app to **visualize how sorting algorithms work**, with step-by-step animations, live stats, Big O notation, and the algorithm's source code in multiple programming languages.

🌐 **Live demo:** [bigsort.vercel.app](https://bigsort.vercel.app/)
🌍 **Languages:** English & Español (auto-detected, switchable in-app)

![Big Sort preview](https://bigsort.vercel.app/bigsort.webp)

---

## ✨ Features

- **Interactive visualization** of Bubble Sort, Insertion Sort, Selection Sort, and Quick Sort.
- **Step-by-step animation controls**: play/pause, speed (0.5x–2.0x), and manual step navigation.
- **Live stats** per run: comparisons, swaps, elapsed time, and Big O complexity (best/worst case).
- **Source code viewer** for each algorithm in JavaScript, Python, and Java.
- **Ascending/descending order** toggle and randomized array generation.
- **i18n support**: fully translated UI in English and Spanish.
- Modern, responsive UI built with Tailwind CSS and Radix primitives.

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) as build tool
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) primitives (dialog, select, slider, tooltip, etc.)
- [i18next](https://www.i18next.com/) / [react-i18next](https://react.i18next.com/) for internationalization
- Package manager: [pnpm](https://pnpm.io/)

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/MaickolRivera/bigsort.git
cd bigsort
pnpm install
```

### Available Scripts

```bash
pnpm dev       # Start the dev server
pnpm build     # Type-check and build for production
pnpm preview   # Preview the production build locally
pnpm lint      # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/     # UI components (sidebar, controls, code field, icons...)
├── sections/       # Main app sections (Bigsort, Controls, Overview, Settings, Stats)
├── snippets/
│   ├── debugger/    # Step-by-step algorithm logic used for the visualization
│   └── reference/    # Reference implementations shown in the code viewer (JS/Python/Java)
├── locales/         # i18n translation files (en/es)
├── hooks/, lib/     # Shared hooks and utilities
└── types.ts         # Shared TypeScript types
```

## 🌍 Internationalization

The app ships with full translations for **English** and **Spanish**, detected automatically from the browser and persisted in `localStorage`. Translations live under `src/locales/{en,es}` and are organized by namespace (`bigsort`, `overview`, `settings`).

## 🤝 Contributing

Contributions are welcome! If you'd like to add new algorithms, languages, or features, feel free to open an issue or submit a pull request.

---

Made with ❤️ by [Maickol Rivera](https://github.com/MaickolRivera)
