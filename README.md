
# 📦 Skip Selection UI – README

This project provides a clean and user-friendly interface for selecting skip bin sizes, hire duration, and pricing, with visual warnings for certain restrictions (e.g., **Private Property Only**, **Not Suitable for Heavy Waste**).

---

## 🚀 Features

- 📏 Skip selection cards with clear yard size, hire period, and weekly price
- ⚠️ Warning indicators for skips that:
  - Aren’t allowed on public roads
  - Aren’t suitable for heavy waste
- 🚫 Disabled states for skips not suitable for heavy waste
- 🖱️ Entire card is clickable except when disabled
- 🧑‍💻 Fully responsive layout
- 📱 Mobile-optimized bottom bar with selection summary and action buttons
- 🎨 Custom styling using Tailwind CSS

---

## 🛠 Tech Stack

- React
- Tailwind CSS
- JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── SkipCard.jsx       # Individual skip card with warnings & states
│   └── BottomBar.jsx      # Responsive footer for selection summary
├── hooks/
│   ├── useFetchSkips.js   # Hook to fetch skips data from API - can be done using redux or other store
├── pages/
│   ├── SkipSelector.jsx   # Skip selector page
└── App.js                 # Main view to render skip cards
```

---

## 📸 Screenshots

**Desktop view**

- Cards show yard size, warnings, and pricing
- Disabled cards are faded with disabled buttons

**Mobile view**

- Bottom bar adjusts layout to keep all info in a single line
- Responsive buttons for Back and Continue

---

## 🧪 How to Run

```bash
# Install dependencies
npm install

# Run the server
npm run start
```

Ensure Tailwind CSS is set up in your project (if not, run `npx tailwindcss init` and configure it).