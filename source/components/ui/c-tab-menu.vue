<template>
  <div class="tab-menu">
    <div
      v-for="index in tabs"
      :key="index"
      class="tab-menu__item"
      :class="{ active: activeTab === index }"
      @click="emitUpdate(index)"
    >
      <slot :tab="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ tabs: number, activeTab: number }>()
const emits = defineEmits<{ (e: 'update:activeTab', activeTab: number): void }>()

const emitUpdate = (activeTab: number) => {
  emits('update:activeTab', activeTab)
}
</script>

<style scoped lang="scss">
.tab-menu {
  @extend %text-bold;

  display: flex;

  color: $gray600;

  &__item {
    flex-grow: 1;
    padding: 6px 8px;
    border: 1px solid transparent;
    border-radius: 4px;

    transition: all 0.3s ease;

    &:hover {
      color: $primary;

      cursor: pointer;
    }

    &.active {
      border-color: $primary;

      color: $primary;
    }
  }
}
</style>
