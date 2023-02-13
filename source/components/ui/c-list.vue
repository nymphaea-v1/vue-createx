<template>
  <ul class="list">
    <li
      v-for="(textNode, index) in textNodes"
      :key="index"
      class="list__item"
    >
      <c-icon
        name="check"
        class="list__icon"
      />
      <span class="list__text">{{ textNode }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import CIcon from '~components/ui/c-icon.vue'

defineProps<{ textNodes: string[] }>()
</script>

<style scoped lang="scss">
  .list {
    padding-right: 10px;

    list-style: none;

    &__item {
      gap: 20px;
      margin-bottom: 18px;
    }

    &__icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 16px;

      color: $primary;
      vertical-align: -2px;
    }

    &__text {
      display: inline-block;
      width: calc(100% - 32px);

      vertical-align: top;
    }
  }
</style>
