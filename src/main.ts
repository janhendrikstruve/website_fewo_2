import '@fontsource/lato/latin-400.css'
import '@fontsource/lato/latin-400-italic.css'
import '@fontsource/lato/latin-700.css'
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// v-reveal: blendet ein Element sanft ein, sobald es ins Bild scrollt.
// Ohne IntersectionObserver oder bei "weniger Bewegung" bleibt es sichtbar.
const reveal =
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-visible')
            reveal!.unobserve(entry.target)
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      )
    : null

app.directive('reveal', {
  mounted(el: HTMLElement) {
    if (!reveal) return
    el.classList.add('reveal')
    reveal.observe(el)
  },
  unmounted(el: HTMLElement) {
    reveal?.unobserve(el)
  },
})

app.mount('#app')
