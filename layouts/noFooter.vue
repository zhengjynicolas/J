<template>
  <default-header/>
  <UMain>
    <slot />
  </UMain>
</template>
<script setup lang="ts">
import DefaultHeader from '~/components/defaultHeader.vue'
</script>