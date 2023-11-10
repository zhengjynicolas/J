<template>
  <Header :links="links">
    <template #logo>
      <!--        <Logo class="w-auto h-6" />-->
    </template>
    <template #right>
      <ColorModeButton/>
      <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/zhengjynicolas/J" target="_blank" />
    </template>
  </Header>
</template>
<script setup lang="ts">
import links from "~/components/staticData/headerLinks.json";
</script>