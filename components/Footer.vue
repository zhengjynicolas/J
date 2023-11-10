<template>
  <footer :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.container">
      <div :class="ui.top">
        <slot name="top"/>
      </div>
      <div :class="ui.bottom.left">
        <slot name="left"/>
      </div>
      <div :class="ui.bottom.center">
        <slot name="center"/>
      </div>
      <div :class="ui.bottom.right">
        <slot name="right"/>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { Link } from '@nuxt/ui/dist/runtime/types'

const config = {
  wrapper: 'relative',
  container: 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
  top: {
    wrapper: '',
    container: 'py-8 lg:py-12'
  },
  bottom: {
    wrapper: '',
    container: 'py-8 lg:py-4 lg:flex lg:items-center lg:justify-between',
    left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
    center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
    right: 'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3'
  }
}

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  links?: Link[]
  ui?: Partial<typeof config>
  class?: any
}>(), {
  level: 0,
  links: () => [],
  ui: () => ({}),
  class: undefined
})

const { ui, attrs } = useUI('footer', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
