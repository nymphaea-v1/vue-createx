<template>
  <div class="course-card">
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

const props = defineProps<{ course: Course }>()

const photo = computed(() => require(`images/team/${props.course.author.photoFileName}`))
const badgeClass = computed(() => {
  return `badge_${props.course.type.toLowerCase().replace(/[\s&]+/g, '')}`
})
</script>

<style scoped lang="scss">
.course-card {
  display: flex;
  width: 600px;
  height: 214px;
  border: 1px solid $gray300;
  border-radius: 4px;

  box-shadow:
    0 80px 80px -20px rgb(154 156 165 / 8%),
    0 30px 24px -10px rgb(154 156 165 / 5%),
    0 12px 10px -6px rgb(154 156 165 / 4%),
    0 4px 4px -4px rgb(30 33 44 / 3%);

  &:hover {
    box-shadow:
      0 80px 80px -20px rgb(154 156 165 / 16%),
      0 30px 24px -10px rgb(154 156 165 / 10%),
      0 12px 10px -6px rgb(154 156 165 / 8%),
      0 4px 4px -4px rgb(30 33 44 / 5%);
    cursor: pointer;
  }

  &__image {
    width: 40%;
    max-width: 214px;
    max-height: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  }

  &__main {
    display: flex;
    flex-direction: column;
    padding: 32px;
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

.badge {
  &_marketing {
    @include badge(marketing);
  }

  &_management {
    @include badge(management);
  }

  &_hrrecruting {
    @include badge(hrrecruting);
  }

  &_design {
    @include badge(design);
  }
}
</style>
