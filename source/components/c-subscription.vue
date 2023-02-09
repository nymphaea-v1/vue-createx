<template>
  <div class="subscription">
    <div class="subscription__container">
      <h6>Don't miss anything!</h6>
      <h1>Subscribe to the Createx School announcements</h1>
      <div class="subscription__inputs">
        <c-text-input
          v-model:value="userEmail"
          class="subscription__email-input"
          placeholder="Your working email"
        />
        <c-button>Subscribe</c-button>
      </div>
      <img
        class="subscription__background-image subscription__background-image_left"
        src="~images/background-shapes/subscription.svg"
      >
      <img
        class="subscription__background-image subscription__background-image_right"
        src="~images/background-shapes/subscription.svg"
      >
      <div class="subscription__background-color" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CTextInput from 'components/ui/c-text-input.vue'
import CButton from 'components/ui/c-button.vue'

import { ref } from 'vue'
const userEmail = ref('')
</script>

<style scoped lang="scss">
.subscription {
  position: relative;

  padding: 120px 0 180px;

  &__container {
    @extend %container;

    max-width: 810px;

    text-align: center;
  }

  &__inputs {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    width: 600px;
    margin: 0 auto;
  }

  &__email-input {
    flex-grow: 1;
  }

  &__background-color {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-image: $background-gradient;
    opacity: 0.2;
  }

  &__background-image {
    position: absolute;
    bottom: 0;
    z-index: -1;

    width: 18.5vw;

    &_left {
      left: 0;
    }

    &_right {
      right: 0;
    }
  }
}
</style>
