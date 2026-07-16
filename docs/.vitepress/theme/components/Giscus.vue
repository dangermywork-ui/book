<template>
  <div class="giscus-wrapper" ref="giscusContainer">
    <!-- Совсем убираем data-theme, будем управлять через JS -->
    <component 
      :is="'script'" 
      ref="giscusScript"
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
      data-lang="ru"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<script setup>
import { onMounted, watch, ref, nextTick } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const giscusContainer = ref(null)
const isGiscusReady = ref(false)

// Перезагрузка Giscus с правильной темой
const reloadGiscus = (darkMode) => {
  const container = giscusContainer.value
  if (!container) return

  // Удаляем старый giscus
  const oldGiscus = container.querySelector('.giscus')
  if (oldGiscus) {
    oldGiscus.remove()
  }

  // Создаем новый скрипт
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'dangermywork-ui/book')
  script.setAttribute('data-repo-id', 'R_kgDOTYQWdg')
  script.setAttribute('data-category', 'Comments')
  script.setAttribute('data-category-id', 'DIC_kwDOTYQWds4DBV62')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', darkMode ? 'noborder_dark' : 'light')
  script.setAttribute('data-lang', 'ru')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  // Добавляем обработчик загрузки
  script.onload = () => {
    isGiscusReady.value = true
  }

  container.appendChild(script)
}

onMounted(() => {
  // Загружаем Giscus с правильной темой
  reloadGiscus(isDark.value)

  // Следим за изменением темы
  watch(isDark, (newValue) => {
    // Перезагружаем Giscus при смене темы
    reloadGiscus(newValue)
  })
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  background-color: transparent;
  min-height: 400px;
}

.giscus-wrapper :deep(.giscus) {
  background-color: transparent !important;
}

.giscus-wrapper :deep(.giscus-frame) {
  background-color: transparent !important;
}
</style>