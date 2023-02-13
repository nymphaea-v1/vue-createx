<template>
  <div class="subscription">
    <div class="subscription__container">
      <h6 class="subscription__sub-heading">
        Don't miss anything!
      </h6>
      <h1 class="subscription__main-heading">
        Subscribe to the Createx School announcements
      </h1>
      <div class="subscription__inputs">
        <c-text-input
          v-model:value="userEmail"
          class="subscription__email-input"
          placeholder="Your working email"
        />
        <c-button class="subscription__subscribe-button">
          Subscribe
        </c-button>
      </div>
      <img
        class="subscription__background-image subscription__background-image_left"
        src="~~images/background-shapes/subscription.svg"
      >
      <img
        class="subscription__background-image subscription__background-image_right"
        src="~~images/background-shapes/subscription.svg"
      >
    </div>
    <div class="subscription__background" />
  </div>
</template>

<script setup lang="ts">
import CTextInput from '~components/ui/c-text-input.vue'
import CButton from '~components/ui/c-button.vue'

import { ref } from 'vue'

const userEmail = ref('')
</script>

<style scoped lang="scss">
.subscription {
  @include colored-background;

  padding: 120px 0 180px;
  overflow: hidden;

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
    max-width: 100%;
    margin: 0 auto;
  }

  &__email-input {
    flex-grow: 1;
  }

  &__background-image {
    position: absolute;
    bottom: 0;
    z-index: -1;

    &_left {
      left: 0;

      transform: translateX(calc(12vw - 240px));
    }

    &_right {
      right: 0;

      transform: translateX(calc(240px - 12vw));
    }
  }
}

@media (min-width: $break-laptop-min) and (max-width: $break-laptop-max) {
  .subscription {
    padding: 90px 0 120px;

    &__background-image {
      &_left {
        transform: translateX(-50%);
      }

      &_right {
        transform: translateX(50%);
      }
    }
  }
}

@media (min-width: $break-laptop-min) and (max-width: $break-table-max) {
  .subscription {
    padding: 60px 0 90px;

    &__main-heading {
      margin-bottom: 40px;
    }

    &__background-image {
      &_left {
        width: 50vw;

        transform: translate(-35%, 15%);
      }

      &_right {
        display: none;
      }
    }
  }
}

@media (max-width: $break-phone-max) {
  .subscription {
    padding: 40px 0 60px;

    &__main-heading {
      font-size: 36px;
    }

    &__inputs {
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    &__email-input {
      --text-input-height: 55px;
    }

    &__subscribe-button {
      --button-width: 100%;
    }

    &__background-image {
      &_left,
      &_right {
        display: none;
      }
    }
  }
}
</style>
