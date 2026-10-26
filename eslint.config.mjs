// @ts-check
import prettier from 'eslint-config-prettier/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Последним: отключает правила ESLint, которые спорят с Prettier о форматировании
  prettier,
)
