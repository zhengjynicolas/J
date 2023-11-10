<template>
  <default-header/>
  <UMain>
    <slot />
  </UMain>
  <default-footer/>
</template>
<script setup lang="ts">
import DefaultHeader from "~/components/defaultHeader.vue";
import DefaultFooter from "~/components/defaultFooter.vue";
</script>