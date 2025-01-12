# Sudoku Setter

A Sudoku variant setter and solver using svelte. The solver uses minizinc-wasm.

https://raizus.github.io/sudoku-setter/

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## 

When adding new tools, first add the tool to the tools.ts enums, then create the elementInfo object and add it to the element Handlers map.