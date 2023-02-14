<template>
  <div class="event">
    <div class="event__date">
      <span class="event__day">{{ day }}</span>

      <p class="event__month">
        {{ month }}
      </p>

      <p class="event__hours">
        {{ hours }}
      </p>
    </div>
    <div class="event__main">
      <div class="event__text">
        <p class="event__name">
          {{ event.name }}
        </p>
        <p class="event__format">
          {{ event.format }}
        </p>
      </div>
      <c-button
        class="event__show-button"
        size="small"
        type="outline"
      >
        View more
      </c-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CButton from '~components/ui/c-button.vue'

import { computed } from 'vue'

interface Props {
  event: TrainingEvent
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal'
})

const day = computed(() => props.event.timeStart.getDate() < 10 ? '0' + props.event.timeStart.getDate() : props.event.timeStart.getDate())
const month = computed(() => props.event.timeStart.toLocaleString('en-US', { month: 'long' }))
const hours = computed(() => {
  return `${props.event.timeStart.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })} - 
          ${props.event.timeEnd.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}`
})
</script>

<style scoped lang="scss">
.event {
  display: flex;
  align-items: center;
  width: 100%;
  height: 126px;
  padding: 32px 40px;
  border-radius: 4px;

  background-color: $white;

  &__date {
    display: flex;
    flex-flow: column wrap;
    flex-shrink: 0;
    place-content: flex-start center;

    width: 177px;
    height: 100%;
    margin-right: 29px;
  }

  &__day {
    @extend %large-number;

    margin-right: 20px;

    color: $primary;
  }

  &__main {
    display: flex;
    flex-grow: 1;
    gap: 20px 10px;
    align-items: center;
  }

  &__text {
    width: 100%;
  }

  &__show-button {
    flex-shrink: 0;
  }

  &__month,
  &__name {
    @extend %text-lead;
    @extend %text-bold;

    font-size: 16px;
  }

  &__hours,
  &__format {
    color: $gray700;
  }
}

.event:hover {
  box-shadow:
    0 80px 80px -20px rgb(255 63 58 / 16%),
    0 30px 24px -10px rgb(255 63 58 / 10%),
    0 12px 10px -6px rgb(255 63 58 / 8%),
    0 4px 4px -4px rgb(30 33 44 / 5%);
  cursor: pointer;

  transition: box-shadow 0.3s ease;

  & .event__name {
    color: $primary;

    transition: color 0.2s ease;
  }
}

@media (max-width: $break-table-max) {
  .event {
    height: auto;
    min-height: 126px;
    padding: 20px 24px;

    &__date {
      flex-direction: row;
      place-content: center flex-start;

      align-items: baseline;
      width: 85px;
      margin-right: 24px;
    }

    &__month,
    &__hours {
      font-size: 14px;
    }

    &__day {
      width: 50px;
      margin-right: 0;

      font-size: 36px;
      line-height: 100%;
    }

    &__main {
      flex-wrap: wrap;
    }

    &__text {
      height: 75px;
    }
  }
}

@media (max-width: $break-phone-max) {
  .event {
    padding: 10px 16px;

    &__date {
      margin-right: 16px;
    }

    &__text {
      height: 100px;
    }
  }
}
</style>
