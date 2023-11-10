<template>
  <Footer>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
    <template #right>
      <UButton label="GitHub" icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/zhengjynicolas/J" target="_blank" />
    </template>
  </Footer>
</template>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>