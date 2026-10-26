# art-nuxt

Галерея Art Institute of Chicago на Vue 3 + Nuxt 4 — порт проекта art-v2.0 (Next.js 16, https://art-v20.vercel.app/).
Эталонная реализация лежит рядом: `../art-v2.0`.

## Учебный контекст

Файлы ниже есть только на машине автора; на других машинах импорты просто не найдутся.

@~/Desktop/RoadToDream/CLAUDE.md
@~/Desktop/RoadToDream/19-nuxt/projects/art-nuxt.md

- Это учебный проект трека Vue / Nuxt из RoadToDream (`~/Desktop/RoadToDream`). Текущий шаг, план и журнал — в плане проекта (второй импорт).
- Код шага пишет ученик. Claude объясняет концепцию через аналог из React / Next (смотреть, как это сделано в `../art-v2.0`), ставит задачу на шаг и делает ревью. Готовое решение шага — только по просьбе ученика.
- После каждого шага обновить в RoadToDream: статус и журнал в `19-nuxt/projects/art-nuxt.md`, уровни подтем в `18-vue/README.md` и `19-nuxt/README.md` (только по итогам проверки), запись в `PROGRESS.md`, конспект в `theory/` при найденном пробеле. Затем предложить два коммита: код — здесь, прогресс — в RoadToDream.

## Стек и соглашения

- Nuxt 4: `app/` — код приложения, `server/` — серверная часть (Nitro), `shared/` — общее для app и server, `public/` — статика.
- Vue 3.5, TypeScript, Composition API, `<script setup lang="ts">`; стили — SCSS.
- Форматирование — Prettier (`.prettierrc`: 100 символов, без `;`, одинарные кавычки), при сохранении в VS Code;
  ESLint — качество кода (`eslint-config-prettier` отключает его правила форматирования). `npm run format`, `npm run lint`.
- Структура — соглашения Nuxt (не FSD): компоненты сгруппированы по доменам, автоимпорт по пути —
  `app/components/painting/PaintingCard.vue` → `<PaintingCard>`.
- API Nuxt меняется между версиями: сверяться с https://nuxt.com/docs, а не с памятью.
