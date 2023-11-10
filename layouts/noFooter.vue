<template>
  <default-header/>
  <main>
    <slot />
  </main>
</template>
<script setup lang="ts">
import DefaultHeader from '~/components/defaultHeader.vue'
</script>