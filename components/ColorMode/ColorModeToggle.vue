<template>
  <ClientOnly>
    <UToggle
      v-model="isDark"
      :on-icon="appConfig.ui.icons.dark"
      :off-icon="appConfig.ui.icons.light"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

// Computed
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
