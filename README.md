# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Шпаргалка по разработке

### Каркас `.vue`-файла — сниппет `vsfc`

В пустом `.vue`-файле набрать `vsfc` и нажать `Tab`:

```vue
<script setup lang="ts">

</script>

<template>
  <div class="appheader">

  </div>
</template>

<style lang="scss" scoped>
.appheader {
}
</style>
```

- Класс корневого элемента = имя файла в нижнем регистре (`AppHeader.vue` → `appheader`).
- `Tab` переключает курсор: `<script>` → имя класса (меняется сразу и в стилях) → содержимое шаблона.
- Для Header / Footer корневой `div` заменить на семантический `<header>` / `<footer>`.
- Сниппет пользовательский (работает во всех проектах):
  `~/Library/Application Support/Code/User/snippets/vue-sfc.code-snippets`.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
