<template>
  <span
    class="menu-button"
    :class="{ 'menu-button_checked': checked }"
    @click="toggleChecked"
  >
    <span class="menu-button__line" />
    <span class="menu-button__line" />
    <span class="menu-button__line" />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ checked: boolean }>()
const emits = defineEmits<{ (e: 'update:checked', checked: boolean): void }>()

const toggleChecked = () => emits('update:checked', !props.checked)
</script>

<style scoped lang="scss">
.menu-button {
  position: relative;

  width: 48px;
  height: 32px;

  &__line {
    position: absolute;
    left: 50%;

    width: 50%;
    height: 2px;
    border-radius: 16%;

    background-color: $gray900;
    transform: translateX(-50%);

    transition: all 0.2s ease;

    &:first-child {
      top: 25%;
    }

    &:nth-child(2) {
      top: 50%;

      transform: translate(-50%, -50%);
    }

    &:last-child {
      bottom: 25%;
    }
  }
}

.menu-button_checked {
  & .menu-button__line {
    &:first-child {
      top: 50%;
      left: 25%;

      transform: rotate(45deg);
    }

    &:nth-child(2) {
      width: 0;
    }

    &:last-child {
      top: 50%;
      left: 25%;

      transform: rotate(-45deg);
    }
  }
}

.menu-button:hover {
  cursor: pointer;

  & .menu-button__line {
    background-color: $primary;
  }
}
</style>
