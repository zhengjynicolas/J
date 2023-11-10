<template>
  <header :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.container">
      <div :class="ui.left">
        <slot name="left">
          <NuxtLink to="/" aria-label="Logo" :class="ui.logo">
            <slot name="logo">Nuxt UI</slot>
          </NuxtLink>
        </slot>
      </div>
      <slot name="center">
        <HeaderLinks :links="links" :class="ui.center" />
      </slot>
      <div :class="ui.right">
        <slot name="right"/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot } from '@headlessui/vue'
import type { Link } from '@nuxt/ui/dist/runtime/types'

const config = {
  wrapper: 'bg-background backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50',
  container: 'flex items-center justify-between gap-3 h-[4rem] mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
  left: 'lg:flex-1 flex items-center gap-1.5',
  center: 'hidden lg:flex',
  right: 'flex items-center justify-end lg:flex-1 gap-1.5',
  logo: 'flex-shrink-0 font-bold text-xl text-gray-950 dark:text-white flex items-end gap-1.5',
  panel: {
    wrapper: 'fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden',
    header: 'px-4 sm:px-6',
    body: 'px-4 sm:px-6 pt-3 pb-6'
  },
  button: {
    base: 'lg:hidden',
    icon: {
      open: 'i-heroicons-bars-3',
      close: 'i-heroicons-x-mark-20-solid'
    }
  }
}

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  to?: string
  links?: Link[]
  ui?: Partial<typeof config>
  class?: any
}>(), {
  to: '/',
  links: () => [],
  ui: () => ({}),
  class: undefined
})

const { ui, attrs } = useUI('header', toRef(props, 'ui'), config, toRef(props, 'class'), true)

</script>
