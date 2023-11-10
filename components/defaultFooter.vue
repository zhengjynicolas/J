<template>
  <UFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
    <template #right>
      <UButton label="GitHub" icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/zhengjynicolas/J" target="_blank" />
    </template>
  </UFooter>
</template>