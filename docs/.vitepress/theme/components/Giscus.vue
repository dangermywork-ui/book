<template>
  <div class="giscus-wrapper">
    <!-- 
      Используем динамический тег script через :is="'script'", 
      чтобы Vue корректно обрабатывал его внутри компонента.
      Атрибуты взяты напрямую из вашего скрипта.
    -->
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

<style scoped>
/* Отступ сверху и разделительная линия для красоты */
.giscus-wrapper {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>