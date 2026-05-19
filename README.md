# Moringa Market — Admin Portal

This is a React single-page application built as a Moringa School summative project, modeled after the provided lab rubric. It demonstrates admin features for a mini e-commerce store.

## Features

- Client-side routing across 4 pages: landing, products list, product detail, and add product.
- Custom hook with context provider for shared product state.
- Simulated CRUD operations: read products from `db.json`, add products, update price, and delete products.
- Search functionality with live filtering.
- Simple responsive styling that feels student-built.
- Unit tests covering important interactions.

## Setup

```bash
npm install
npm run dev
```

## Testing

```bash
npm test
```

## Rubric alignment

- Custom and standard hooks: `useProducts` custom hook, `useContext`, `useEffect`, `useState`, `useRef`, and `useId`.
- CRUD: read from `db.json`, create product, patch price, delete product.
- Client-side routing: 4 routes and navigation via the navbar.
- Testing: UI tests for add product, search filtering, and product detail actions.

## Notes
- Changes are persisted in browser `localStorage` so the app can behave like a backend-driven CRUD experience.
- For a real API, you can run `json-server --watch db.json --port 3000` and adapt the service layer.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
