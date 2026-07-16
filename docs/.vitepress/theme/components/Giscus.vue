<template>
  <div class="giscus-wrapper">
    <component 
      :is="'script'" 
      src="https://giscus.app/client.js"
      data-repo="dangermywork-ui/book"
      data-repo-id="R_kgDOTYQWdg"
      data-category="Comments"
      data-category-id="DIC_kwDOTYQWds4DBV62"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="preferred_color_scheme" 
      data-lang="ru"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

onMounted(() => {
  // Функция отправки сообщения в iframe Giscus
  const setGiscusTheme = (theme) => {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (!iframe) return
    
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: theme } } }, 
      'https://giscus.app'
    )
  }

  // Следим за изменением темы VitePress
  watch(
    isDark,
    (newVal) => {
      // Если тема меняется, отправляем команду в Giscus
      // Используем 'noborder_dark' для темной темы VitePress, так как он выглядит лучше всего
      setGiscusTheme(newVal ? 'noborder_dark' : 'light') 
    },
    { immediate: true } // Выполнить сразу при загрузке
  )
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
/* Принудительно делаем фон контейнера прозрачным или темным, если нужно */
.giscus-wrapper {
  background-color: transparent; 
}
</style>