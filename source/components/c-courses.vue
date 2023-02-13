<template>
  <div class="courses">
    <div class="courses__container">
      <div class="courses__header">
        <h6 class="courses__sub-heading">
          Ready to learn?
        </h6>

        <h1 class="courses__main-heading">
          Featured Courses
        </h1>

        <c-button
          class="courses__header-button"
          type="outline"
          size="large"
        >
          View all courses
        </c-button>
      </div>

      <div class="courses__list">
        <c-course-card
          v-for="(course, index) in courses"
          :key="index"
          class="courses__item"
          :course="course"
        />
      </div>

      <c-button
        class="courses__footer-button"
        type="outline"
        size="large"
      >
        View all courses
      </c-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CButton from '~components/ui/c-button.vue'
import cCourseCard from '~components/ui/c-course-card.vue'

import { useTestInfo } from '~composables/use-test-info'

const { courses } = useTestInfo()
</script>

<style scoped lang="scss">
.courses {
  margin: 180px 0;

  &__container {
    @extend %container;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
  }

  &__sub-heading {
    flex-grow: 1;
    width: 100%;
  }

  &__main-heading {
    flex-grow: 1;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 2.4vw;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &__item {
    flex: 1 1 calc(50% - 2.4vw);
    width: 100%;
  }

  &__footer-button {
    display: none;
  }
}

@media (max-width: $break-phone-max) {
  .courses {
    margin: 90px 0;

    &__header-button {
      display: none;
    }

    &__footer-button {
      display: inherit;
    }

    &__item:nth-child(n + 4) {
      display: none;
    }
  }
}
</style>
