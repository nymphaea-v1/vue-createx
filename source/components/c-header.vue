<template>
  <header class="header">
    <div class="header__container">
      <router-link
        class="header__logo"
        to="/"
      >
        <img src="../assets/images/logo.svg">
      </router-link>
      <nav class="header__nav">
        <router-link
          v-for="(link, text) in navLinks"
          :key="link"
          :to="link"
          class="header__nav-link"
        >
          {{ text }}
        </router-link>
      </nav>
      <c-button
        class="header__button"
        size="large"
      >
        Get consultation
      </c-button>
      <span class="header__login">
        <c-icon
          class="header__login-icon"
          name="profile"
        />
        <span class="header__login-text">Log in / Register</span>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import CButton from 'components/ui/c-button.vue'
import CIcon from 'components/ui/c-icon.vue'

const navLinks = {
  'About Us': '/about',
  Courses: '/courses',
  Events: '/events',
  Blog: '/blog',
  Contacts: '/contact'
}
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  z-index: 1;

  width: 100%;

  &__container {
    @include container;

    display: flex;
    align-items: center;
    height: 90px;

    font-weight: 900;
  }

  &__logo {
    display: inline-block;
    margin-right: 50px;
  }

  &__nav {
    display: inline-flex;
    flex-grow: 1;
    gap: 40px;
  }

  &__button {
    --button-width: 206px;
    margin-right: 36px;
  }

  &__login {
    @include hoverable;

    & > * {
      vertical-align: middle;
    }
  }

  &__login-icon {
    height: 20px;
    margin-right: 10px;
  }
}
</style>
