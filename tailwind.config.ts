import type { Config } from 'tailwindcss'

export default  <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
        // => @media (min-width: {size}px) { ... }
      '2xs': '280px',
      xs: '512px',
      s: '640px',
      md: '768px',
      lg: '880px',
      xl: '1024px',
      '2xl': '1280px',
      '3xl': '1920px',
    }
  }
}
