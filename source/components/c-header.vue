<template>
  <header
    class="header"
    :class="{ 'header_fixed': isHeaderFixed, 'header_menu-opened': isMenuOpened }"
  >
    <div class="header__container">
      <router-link
        class="header__logo"
        to="/"
      >
        <img
          class="header__logo-image"
          src="~~images/logo.svg"
        >
      </router-link>

      <nav class="header__nav">
        <router-link
          v-for="(link, text) in siteLinks"
          :key="link"
          :to="link"
          class="header__nav-link"
        >
          {{ text }}
        </router-link>
      </nav>

      <c-button
        class="header__consultation-button"
        size="large"
      >
        Get consultation
      </c-button>

      <span class="header__login-button login-button">
        <c-icon
          class="login-button__icon"
          name="profile"
        />
        <span class="login-button__text">Log in / Register</span>
      </span>

      <c-menu-button
        v-model:checked="isMenuOpened"
        class="header__pop-menu-button"
      />
    </div>
    <div class="header__pop-menu pop-menu">
      <nav class="pop-menu__nav">
        <router-link
          v-for="(link, text) in siteLinks"
          :key="link"
          :to="link"
          class="pop-menu__nav-link"
        >
          {{ text }}
        </router-link>

        <span class="pop-menu__login-button login-button">
          <c-icon
            class="login-button__icon"
            name="profile"
          />
          <span class="login-button__text">Log in / Register</span>
        </span>

        <c-button
          class="pop-menu__consultation-button"
          size="large"
        >
          Get consultation
        </c-button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import CButton from '~components/ui/c-button.vue'
import CIcon from '~components/ui/c-icon.vue'
import CMenuButton from '~components/ui/c-menu-button.vue'

import { ref, computed, onMounted, onUnmounted } from 'vue'

const siteLinks = {
  'About Us': '/',
  Courses: '/',
  Events: '/',
  Blog: '/',
  Contacts: '/'
}

const isMenuOpened = ref(false)
const isUpperSectionScrolled = ref(false)
const isHeaderFixed = computed(() => isUpperSectionScrolled.value || isMenuOpened.value)

const checkForScrolled = () => {
  isUpperSectionScrolled.value = document.documentElement.scrollTop > 1000
}

onMounted(() => window.addEventListener('scroll', checkForScrolled))
onUnmounted(() => window.removeEventListener('scroll', checkForScrolled))
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;

  font-weight: 900;

  &__container {
    @extend %container;

    display: flex;
    align-items: center;
    min-height: 70px;
    padding-top: 19px;
    padding-bottom: 19px;
  }

  &__logo {
    display: inline-block;
    margin-right: 50px;
  }

  &__logo-image {
    vertical-align: sub;
  }

  &__nav {
    display: inline-flex;
    flex-grow: 1;
    gap: 40px;
  }

  &__consultation-button {
    --button-width: 206px;
    margin-right: 36px;
  }

  &__pop-menu-button {
    display: none;
  }

  &__pop-menu {
    display: none;

    transform: translateY(-130%);

    transition: transform 0.3s ease;
  }
}

.header_fixed {
  position: fixed;

  box-shadow: 0 4px 5px #{rgba($gray700, 0.3)};

  animation: 0.4s move-from-top ease;

  & .header__container {
    background-color: $white;
  }
}

.login-button {
  @include hoverable;
  @include text-icon(20px, 10px);
}

.pop-menu {
  position: absolute;
  left: 0;
  z-index: -1;

  width: 100%;
  padding: 0 19px 30px;

  background-color: $white;
  box-shadow: 0 4px 5px #{rgba($gray700, 0.3)};

  &__nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__nav-link,
  &__login-button {
    height: 60px;

    line-height: 60px;
  }

  &__consultation-button {
    display: none;
  }
}

@media (max-width: $break-laptop-max) {
  .header {
    &__container {
      padding-top: 9px;
      padding-bottom: 9px;

      transition: background-color 0s 0.15s;
    }

    &__nav,
    &__login-button {
      display: none;
    }

    &__consultation-button {
      margin-left: auto;
    }

    &__pop-menu-button,
    &__pop-menu {
      display: initial;
    }
  }

  .header_menu-opened .header {
    &__container {
      background-color: $white;

      transition: background-color 0s 0s;
    }

    &__pop-menu {
      transform: translateY(0);
    }
  }
}

@media (max-width: $break-phone-max) {
  .header {
    &__consultation-button {
      display: none;
    }

    &__pop-menu-button {
      margin-left: auto;
    }
  }

  .pop-menu {
    padding-bottom: 16px;

    &__consultation-button {
      --button-width: 100%;

      display: block;
    }
  }
}

@keyframes move-from-top {
  from { top: -100%; }

  to { top: 0; }
}
</style>
