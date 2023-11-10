<template>
  <default-header/>
  <main class="min-h-[100vh]">
    <slot />
  </main>
  <default-footer/>
</template>
<script setup lang="ts">
import DefaultHeader from "~/components/defaultHeader.vue";
import DefaultFooter from "~/components/defaultFooter.vue";
</script>