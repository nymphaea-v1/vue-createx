<template>
  <button
    class="button"
    :class="[`button_${type}`, `button_${size}`]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'bold' | 'outline'
  size?: 'large' | 'regular' | 'small'
}

withDefaults(defineProps<Props>(), {
  type: 'bold',
  size: 'regular'
})
</script>

<style scoped lang="scss">
.button {
  @extend %button-reset;

  width: var(--button-width);
  height: var(--button-height);
  border-radius: 4px;

  font-size: var(--button-font-size);
  letter-spacing: 0.5px;

  transition: all 0.3s ease;

  &:hover {
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0 0.6em 1.2em -0.6em $primary;
  }
}

/* button type: bold, outline */

.button_bold {
  color: #ffffff;

  background-image: $button-gradient;
  background-size: 200%;

  &:hover {
    background-position: 100%;
  }
}

.button_outline {
  border: 1.5px solid $primary;

  color: $primary;

  &:hover {
    border-color: transparent;

    color: white;

    background-image: $button-gradient;
    background-size: 200%;
  }
}

/* button size: large, regular, small */

.button_large {
  --button-width: 179px;
  --button-height: 52px;
  --button-font-size: 16px;
}

.button_regular {
  --button-width: 166px;
  --button-height: 44px;
  --button-font-size: 14px;
}

.button_small {
  --button-width: 123px;
  --button-height: 36px;
  --button-font-size: 12px;
}
</style>
