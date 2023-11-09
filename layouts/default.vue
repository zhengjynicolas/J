<template>
  <template>
    <UHeader>
      <template #logo>
<!--        <Logo class="w-auto h-6" />-->
      </template>
      <template #center>
        <UHeaderLinks :links="links" />
      </template>
      <template #right>
        <UColorModeToggle/>
        <UButton label="GitHub" icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/zhengjynicolas/J" target="_blank" />
      </template>
    </UHeader>
    <UMain>
      <slot />
    </UMain>
    <UFooter>
      <template #left>
        Copyright © {{ new Date().getFullYear() }}
      </template>
      <template #right>
        <UButton label="GitHub" icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/zhengjynicolas/J" target="_blank" />
      </template>
    </UFooter>
  </template>
</template>
<script setup lang="ts">
import links from '../components/staticData/headerLinks.json'
</script>