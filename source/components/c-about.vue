<template>
  <div class="about">
    <div class="about__container">
      <img
        class="about__image"
        src="~images/illustrations/about.png"
      >
      <div class="about__main">
        <h6 class="about__sub-heading">
          Who we are
        </h6>

        <h1 class="about__main-heading">
          Why Createx?
        </h1>

        <c-list
          class="about__feature-list"
          :text-nodes="features"
        />

        <c-button class="about__button">
          More about us
        </c-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CButton from 'components/ui/c-button.vue'
import CList from 'components/ui/c-list.vue'

const features = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Tincidunt sagittis neque sem ac eget.',
  'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.'
]
</script>

<style scoped lang="scss">
.about {
  margin: 180px 0;

  &__container {
    @extend %container;

    display: flex;
    gap: 40px;
    justify-content: space-between;
  }

  &__main {
    width: 390px;
  }

  &__image {
    min-width: 0;
    max-width: 55.5%;
    object-fit: cover;
  }

  &__main-heading {
    margin-bottom: 40px;
  }
}

@media (max-width: $break-table-max) {
  .about {
    margin: 60px 0;

    &__container {
      flex-direction: column;
      align-items: center;
    }

    &__main {
      width: 80vw;
    }

    &__image {
      max-width: 90vw;
    }

    &__sub-heading,
    &__main-heading {
      text-align: center;
    }

    &__feature-list {
      margin-bottom: 40px;
    }

    &__button {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
