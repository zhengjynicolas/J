<template>
  <ULandingHero
      title="Turn Your Vision into Reality"
      description="Watch your dreams materialize before your eyes with us."
      :links="[{ label: 'Get Started', icon: 'i-heroicons-rocket-launch', size: 'lg', click:gotoGuide}]"
  />
</template>
<script setup lang="ts">
const router = useRouter()
const gotoGuide = ()=>{
  router.push('/doc')
}
</script>