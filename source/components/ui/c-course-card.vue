<template>
  <div
    class="course-card"
    :class="`course-card_${orientation}`"
  >
    <img
      :src="photo"
      :alt="course.author.name"
      class="course-card__image"
    >
    <div class="course-card__main">
      <span
        class="course-card__badge"
        :class="badgeClass"
      >
        {{ course.type }}
      </span>

      <h5 class="course-card__name">
        {{ course.name }}
      </h5>

      <p class="course-card__bottom-line">
        <span class="course-card__price">${{ course.price }}</span>
        <span class="course-card__author">by {{ course.author.name }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  course: Course
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal'
})

const photo = computed(() => require(`~images/team/${props.course.author.photoFileName}`))
const badgeClass = computed(() => {
  return `badge_${props.course.type.toLowerCase().replace(/[\s&]+/g, '')}`
})
</script>

<style scoped lang="scss">
.course-card {
  display: flex;
  border: 1px solid $gray300;
  border-radius: 4px;

  box-shadow:
    0 80px 80px -20px rgb(154 156 165 / 8%),
    0 30px 24px -10px rgb(154 156 165 / 5%),
    0 12px 10px -6px rgb(154 156 165 / 4%),
    0 4px 4px -4px rgb(30 33 44 / 3%);

  &__image {
    object-fit: cover;
    object-position: top;
    aspect-ratio: 1;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    min-width: 230px;
    height: 150px;
    margin: 32px;
  }

  &__name {
    @extend %text-lead;
    @extend %text-bold;

    flex-grow: 1;
  }

  &__bottom-line {
    color: $gray700;
    font-size: 18px;
  }

  &__price {
    @extend %text-bold;

    color: $primary;
  }

  &__author::before {
    position: relative;
    top: -2px;

    display: inline-block;
    margin: 0 6px;

    content: "|";
  }
}

.course-card_horizontal {
  height: 214px;
}

.course-card_vertical {
  flex-direction: column;
  width: 390px;
  height: 438px;

  & .course-card {
    &__image {
      aspect-ratio: 39/24;

      max-height: 240px;
    }

    &__main {
      margin: 24px;
    }
  }
}

.badge {
  &_marketing {
    @include badge($green);
  }

  &_management {
    @include badge($blue);
  }

  &_hrrecruting {
    @include badge($yellow);
  }

  &_design {
    @include badge($pink);
  }
}

.course-card:hover {
  box-shadow:
    0 80px 80px -20px rgb(154 156 165 / 16%),
    0 30px 24px -10px rgb(154 156 165 / 10%),
    0 12px 10px -6px rgb(154 156 165 / 8%),
    0 4px 4px -4px rgb(30 33 44 / 5%);
  cursor: pointer;

  transition: box-shadow 0.3s ease;

  & .course-card__name {
    color: $primary;

    transition: color 0.2s ease;
  }
}

@media (max-width: $break-phone-max) {
  .course-card_horizontal {
    flex-direction: column;
    width: 390px;
    height: 438px;

    & .course-card {
      &__image {
        aspect-ratio: 39/24;

        max-height: 240px;
      }

      &__main {
        margin: 24px;
      }
    }
  }
}
</style>
