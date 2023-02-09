<template>
  <article class="intro">
    <div class="intro__background" />
    <div class="intro__container">
      <div class="intro__image-wrapper">
        <div class="intro__image">
          <img src="~images/illustrations/intro.svg">
        </div>
      </div>
      <c-play-button class="intro__showreel-button">
        Play showreel
      </c-play-button>
      <h1 class="intro__heading">
        Enjoy studying with Createx Online Courses
      </h1>
      <div class="intro__buttons">
        <c-button
          class="intro__about-button"
          type="outline"
          size="large"
        >
          About us
        </c-button>
        <c-button
          class="intro__explore-button"
          size="large"
        >
          Explore courses
        </c-button>
      </div>
      <ul class="intro__statistic statistic">
        <template
          v-for="(number, text, index) in statistics"
          :key="text"
        >
          <li class="statistic__item">
            <span class="statistic__number">{{ number }}</span>
            <span class="statistic__feature">{{ text }}</span>
          </li>
          <li
            v-if="index !== Object.keys(statistics).length - 1"
            class="statistic__dot"
          />
        </template>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import cPlayButton from 'components/ui/c-play-button.vue'
import cButton from 'components/ui/c-button.vue'

const statistics = {
  'Students graduaded': 1200,
  'Completed courses': 84,
  'Qualified tutors': 16,
  'Years of expirience': 5
}
</script>

<style scoped lang="scss">
.intro {
  position: relative;

  &__container {
    @extend %container;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-image:
      url("images/background-shapes/intro-background.svg"),
      $background-gradient;
    background-size: cover;
    opacity: 0.2;
  }

  &__image-wrapper {
    position: relative;
  }

  &__image {
    position: absolute;
    right: -4%;
    z-index: -1;
  }

  &__showreel-button {
    margin-bottom: 25px;
  }

  &__heading {
    width: 500px;
    height: 250px;
    margin-bottom: 38px;

    font-size: 64px;
    letter-spacing: 1px;
  }

  &__buttons {
    margin-bottom: 200px;
  }

  &__about-button {
    width: 148px;
    margin-right: 24px;
  }

  &__explore-button {
    width: 200px;
  }

  &__statistic {
    padding-bottom: 40px;
  }
}

.statistic {
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: $gray900;

  list-style: none;

  &__number {
    @extend %large-number;
  }

  &__dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 auto;
    border-radius: 50%;

    background-color: $primary;
  }
}
</style>
