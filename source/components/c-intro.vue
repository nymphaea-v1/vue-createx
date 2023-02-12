<template>
  <div class="intro">
    <div class="intro__background" />
    <div class="intro__container">
      <div class="intro__main-content">
        <img
          class="intro__image"
          src="~images/illustrations/intro.svg"
        >

        <div class="intro__title">
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
        </div>
      </div>

      <ul class="intro__statistic statistic">
        <template
          v-for="(number, text) in statistics"
          :key="text"
        >
          <li class="statistic__item">
            <span class="statistic__number">{{ number }}</span>
            <span class="statistic__feature">{{ text }}</span>
          </li>
          <li class="statistic__dot" />
        </template>
      </ul>
    </div>
  </div>
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

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: max(800px, 100vh);
    padding-top: 90px;
    padding-bottom: 10px;
    overflow: hidden;
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

  &__main-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }

  &__image {
    z-index: -1;

    min-width: 0;
  }

  &__title {
    width: 500px;
  }

  &__showreel-button {
    margin-bottom: 25px;
  }

  &__heading {
    margin-bottom: 38px;

    font-size: 64px;
    letter-spacing: 1px;
  }

  &__about-button {
    --button-width: 148px;
    margin-right: 24px;
  }

  &__explore-button {
    --button-width: 200px;
  }
}

.statistic {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  color: $gray900;

  list-style: none;

  &__item {
    padding: 0 6px;

    text-align: center;
  }

  &__number {
    @extend %large-number;
  }

  &__dot {
    display: inline-block;
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    margin: 0 auto;
    border-radius: 50%;

    background-color: $primary;

    &:last-child {
      display: none;
    }
  }
}

@media (min-width: $break-table-min) and (max-width: $break-laptop-max) {
  .intro {
    &__container {
      padding-top: 70px;
    }

    &__main-content {
      width: inherit;
    }

    &__image {
      min-height: 60vh;
    }

    &__title {
      width: 450px;
    }

    &__heading {
      font-size: 56px;
    }
  }

  .statistic {
    &__number {
      margin-right: 0;
    }

    &__feature {
      display: block;
    }
  }

  @media (max-aspect-ratio: 1 / 1) {
    .intro__buttons {
      display: flex;
      flex-direction: column-reverse;
      gap: 20px;
    }
  }
}

@media (max-width: $break-phone-max) {
  .intro {
    &__container {
      display: block;
      padding-bottom: 20px;
    }

    &__main-content {
      display: block;
      width: 100%;
    }

    &__image {
      display: block;
      width: 100%;
      margin: 0 auto 30px;
    }

    &__title {
      width: inherit;
      margin-bottom: 50px;
    }

    &__showreel-button {
      width: 100%;

      --play-button-size: 42px;
      --play-icon-size: 9px;
      margin: 0;
    }

    &__heading {
      font-size: 44px;
      text-align: center;
    }

    &__buttons {
      display: flex;
      flex-flow: row-reverse wrap;
      gap: 8px 16px;
      justify-content: center;
    }

    &__about-button {
      --button-width: 100%;

      order: 1;
      margin-right: 0;
    }

    &__explore-button {
      --button-width: 100%;
      --button-height: 69px;
    }
  }

  .statistic {
    flex-wrap: wrap;
    gap: 7%;

    &__item {
      display: block;
      width: 46%;
      margin-bottom: 20px;
      padding: 6px;

      text-align: left;
    }

    &__feature {
      display: block;
    }

    &__dot {
      display: none;
    }
  }
}
</style>
