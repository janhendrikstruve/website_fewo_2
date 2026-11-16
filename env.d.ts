/// <reference types="vite/client" />

declare module 'virtual:icons' {
  const icons: Record<string, import('@iconify/vue').IconifyIcon>
  export default icons
}
