<template>
  <svg
    class="icon"
    :viewBox="icon.viewBox"
  >
    <use :href="'#' + icon.id" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ name: string }>()

const icon = computed(() => {
  return require(`icons/${props.name}.svg`).default
})
</script>

<style>
#__SVG_SPRITE_NODE__ symbol path {
  fill: currentcolor;
}
</style>

<style scoped lang="scss">
.icon {
  height: 1.5em;

  color: inherit;
}
</style>
