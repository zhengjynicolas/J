<template>
    <default-header/>
    <Main>
      <slot />
    </Main>
    <default-footer/>
</template>
<script setup lang="ts">
import DefaultHeader from "~/components/defaultHeader.vue";
import DefaultFooter from "~/components/defaultFooter.vue";
import Main from "~/components/Main.vue";
</script>