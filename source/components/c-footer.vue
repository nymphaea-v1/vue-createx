<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__main">
        <section class="footer__about about">
          <img
            class="about__logo"
            src="~images/logo-light.svg"
          >
          <p class="about__text">
            {{ aboutText }}
          </p>
          <c-socials
            class="about__socials"
            :links="socialLinks"
          />
        </section>
        <nav class="footer__site-map">
          <h6>
            site map
          </h6>
          <router-link
            v-for="(link, text) in siteLinks"
            :key="link"
            :to="link"
          >
            {{ text }}
          </router-link>
        </nav>
        <nav class="footer__courses">
          <h6>
            courses
          </h6>
          <router-link
            v-for="(link, text) in courseLinks"
            :key="link"
            :to="link"
          >
            {{ text }}
          </router-link>
        </nav>
        <nav class="footer__contact-us contact-us">
          <h6 class="contact-us__heading">
            contact us
          </h6>
          <p class="contact-us__item">
            <c-icon
              class="contact-us__icon"
              name="phone"
            />
            <span class="contact-us__text">{{ phoneNumber }}</span>
          </p>
          <p class="contact-us__item">
            <c-icon
              class="contact-us__icon"
              name="mail"
            />
            <span class="contact-us__text">{{ email }}</span>
          </p>
        </nav>
        <section class="footer__subscribe subscribe">
          <h6 class="subscribe__heading">
            sign up to our newsletter
          </h6>
          <label class="subscribe__input text-input">
            <div class="text-input__input-wrapper">
              <input
                v-model="userEmail"
                type="text"
                class="text-input__input"
                placeholder="Email address"
              >
              <c-icon
                name="arrow-right"
                class="text-input__icon"
              />
            </div>
          </label>
          <p class="subscribe__notice">
            *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
          </p>
        </section>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-background" />
        <div class="copyright">
          <c-icon
            name="heart"
            class="copyright__icon"
          />
          <a
            class="copyright__text"
            href="https://www.figma.com/file/2ZWX21Kfd6rLZVAm7hO8lz/Free-%231.-Online-course"
            target="_blank"
          >Concept by Createx Studio</a>
        </div>
        <a
          href="#app"
          class="footer__go-to-top-button"
        >GO TO TOP</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CSocials from 'components/ui/c-socials.vue'
import CIcon from 'components/ui/c-icon.vue'

import { ref } from 'vue'

const aboutText = `Createx Online School is a leader in online studying. We have lots of courses
and programs from the main market experts. We provide relevant approaches to online learning,
internships and employment in the largest companies in the country.`

const socialLinks = [
  { iconName: 'facebook', link: '/' },
  { iconName: 'twitter', link: '/' },
  { iconName: 'youtube', link: '/' },
  { iconName: 'telegram', link: '/' },
  { iconName: 'instagram', link: '/' },
  { iconName: 'linked-in', link: '/' }
]

const siteLinks = {
  'About Us': '/',
  Courses: '/',
  Events: '/',
  Blog: '/',
  Contacts: '/'
}

const courseLinks = {
  Marketing: '/',
  Management: '/',
  'HR & Recruting': '/',
  Design: '/',
  Development: '/'
}

const phoneNumber = '666 666-6666'
const email = 'hello@email.dev'

const userEmail = ref('')
</script>

<style scoped lang="scss">
@mixin footer-column {
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h6 {
    margin-bottom: 0;

    color: #ffffff;
    font-weight: 700;
  }
}

.footer {
  position: relative;

  height: 400px;

  color: $gray500;

  background-color: $gray900;

  &__container {
    @extend %container;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    height: 340px;
    padding: 80px 0 60px;

    & > * {
      @include footer-column;
    }
  }

  &__bottom {
    @extend %text-extrasmall;

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  &__bottom-background {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 60px;

    background-color: $white;
    opacity: 0.05;

    pointer-events: none;
  }
}

.about {
  @include footer-column;

  justify-content: space-between;
  width: 280px;
  padding-bottom: 2px;

  &__logo {
    width: min-content;
  }

  &__text {
    @extend %text-extrasmall;

    margin-bottom: 10px;

    color: $gray500;
  }

  &__socials {
    --icon-color: inherit;
    --icon-color-hover: #ffffff;
  }
}

.contact-us {
  @include text-icon;
}

.subscribe {
  width: 286px;

  &__heading {
    margin-bottom: 15px !important;
  }

  &__notice {
    @extend %text-extraextrasmall;

    padding-right: 10px;
  }
}

.text-input {
  @extend %text-extrasmall;

  display: block;

  &__input-wrapper {
    position: relative;
  }

  &__input {
    @extend %input-reset;

    width: 100%;
    height: 36px;
    padding: 0 36px 0 12px;
    border: 1px solid #{rgba($white, 0.2)};
    border-radius: 4px;

    color: $white;

    background-color: #{rgba($white, 0.12)};

    &:focus {
      border-color: rgba($primary, 0.4);

      box-shadow:
        0 80px 80px -20px rgba($primary, 0.08),
        0 30px 24px -10px rgba($primary, 0.05),
        0 12px 10px -6px rgba($primary, 0.04),
        0 4px 4px -4px rgba($primary, 0.03);
    }

    &::placeholder {
      color: #{rgba($white, 0.2)};
    }
  }

  &__icon {
    position: absolute;
    top: 50%;

    height: 16px;
    padding-right: 12px;

    color: $white;

    transform: translate(-100%, -50%);
  }
}

.copyright {
  @include text-icon;

  &__icon {
    color: $primary;
  }

  &__text {
    @include hoverable($gray600);

    color: $white;
  }
}
</style>
