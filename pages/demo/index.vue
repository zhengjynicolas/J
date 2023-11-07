<template>
  <div class="bg-cyan-400">Demo Page</div>
</template>
<script setup lang="ts">
useHead({
  title: 'My Demo Page',
  meta: [
    { name: 'description', content: 'My demo page description.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello Demo\')' } ]
})
</script>