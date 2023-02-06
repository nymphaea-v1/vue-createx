<template>
  <footer class="footer">
    <div class="footer__main footer-main">
      <div class="footer__container footer-main__container">
        <section class="footer-main__about about">
          <img
            class="about__logo"
            src="../assets/images/logo-light.svg"
          >
          <p class="about__text">
            {{ aboutText }}
          </p>
          <c-socials
            class="about__socials"
            :links="socialLinks"
          />
        </section>
        <section class="footer-main__site-map site-map">
          <nav class="site-map__nav nav">
            <h6 class="nav__heading">
              site map
            </h6>
            <router-link
              v-for="(link, text) in siteLinks"
              :key="link"
              class="nav__link"
              :to="link"
            >
              {{ text }}
            </router-link>
          </nav>
        </section>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CSocials from 'components/ui/c-socials.vue'

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
  'About Us': '/about',
  Courses: '/courses',
  Events: '/events',
  Blog: '/blog',
  Contacts: '/contact'
}
</script>

<style scoped lang="scss">
.footer {
  height: 400px;

  &__main {
    color: $gray500;

    background-color: $gray900;
  }

  &__container {
    @extend %container;
  }
}

.footer-main {
  &__container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 60px;
  }
}

.about {
  width: 280px;

  &__logo {
    margin-bottom: 20px;
  }

  &__text {
    margin-bottom: 35px;

    color: $gray500;
    font-size: 12px;
    line-height: 150%;
  }

  &__socials {
    --icon-color: inherit;
    --icon-color-hover: #ffffff;
  }
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__heading {
    color: #ffffff;
    font-weight: 700;
  }
}
</style>
