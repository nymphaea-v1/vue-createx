<template>
  <button
    class="play-button"
    :class="[`play-button_${size}`]"
  >
    <div class="play-button__icon-wrapper">
      <c-icon
        class="play-button__icon"
        name="play"
      />
    </div>
    <span class="play-button__text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import CIcon from 'components/ui/c-icon.vue'

interface Props {
  size?: 'regular' | 'large'
}

withDefaults(defineProps<Props>(), {
  size: 'regular'
})
</script>

<style scoped lang="scss">
$play-button-outline: rgba($primary, 0.12);

.play-button {
  @extend %button-reset;
  @extend %text-bold;
  @include hoverable;

  &__icon-wrapper {
    display: inline-block;
    width: var(--play-button-size);
    height: var(--play-button-size);
    margin: calc(var(--play-button-size) / 3);
    margin-left: 0;
    border-radius: 50%;

    color: #ffffff;
    vertical-align: middle;

    background-color: $primary;

    transition: outline 0.2s ease;
  }

  &:hover > .play-button__icon-wrapper {
    outline: calc(var(--play-button-size) / 3) solid $play-button-outline;
  }

  &__icon {
    width: var(--play-icon-size);
    height: 100%;
    margin-left: 3px;
  }
}

/* play button size: regular, large */

.play-button_regular {
  --play-button-size: 52px;
  --play-icon-size: 11px;
}

.play-button_large {
  --play-button-size: 80px;
  --play-icon-size: 19px;
}
</style>
