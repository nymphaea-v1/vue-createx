<template>
  <article class="about">
    <div class="about__container">
      <img
        class="about__image"
        src="../assets/images/illustrations/about.png"
      >
      <div class="about__main">
        <h6>Who we are</h6>
        <h1 class="about__heading">
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
  </article>
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
    justify-content: space-between;
  }

  &__feature-list {
    width: 390px;
  }
}
</style>
