<template>
  <div class="events-preview">
    <div class="events-preview__container">
      <h6 class="events-preview__sub-heading">
        Our events
      </h6>

      <h1 class="events-preview__main-heading">
        Lectures & workshops
      </h1>

      <c-event
        v-for="(event, index) in events"
        :key="index"
        class="events-preview__event"
        :event="event"
      />

      <div class="events-preview__explore">
        <h3 class="events-preview__explore-label">
          Do you want more?
        </h3>
        <c-button class="events-preview__explore-button">
          Explore all events
        </c-button>
      </div>
    </div>
    <div class="events-preview__background" />
  </div>
</template>

<script setup lang="ts">
import CEvent from '~components/ui/c-event.vue'
import CButton from '~components/ui/c-button.vue'

import { useTestInfo } from '../composables/use-test-info'

const { events } = useTestInfo()
</script>

<style scoped lang="scss">
.events-preview {
  @include colored-background;

  padding: 80px 0;

  &__container {
    @extend %container;
  }

  &__sub-heading,
  &__main-heading {
    text-align: center;
  }

  &__event {
    margin-bottom: 29px;
  }

  &__explore {
    width: max-content;
    margin: 60px auto 0;
  }

  &__explore-label {
    display: inline-block;
    margin-right: 40px;
    margin-bottom: 0;

    vertical-align: top;
  }
}
</style>
