<template>
  <header class="header">
    <div class="header__container">
      <router-link
        class="header__logo"
        to="/"
      >
        <img src="~images/logo.svg">
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
        class="header__button"
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
    </div>
  </header>
</template>

<script setup lang="ts">
import CButton from 'components/ui/c-button.vue'
import CIcon from 'components/ui/c-icon.vue'

const siteLinks = {
  'About Us': '/',
  Courses: '/',
  Events: '/',
  Blog: '/',
  Contacts: '/'
}
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  z-index: 1;

  width: 100%;

  font-weight: 900;

  &__container {
    @extend %container;

    display: flex;
    align-items: center;
    height: 90px;
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
    width: 206px;
    margin-right: 36px;
  }
}

.login-button {
  @include hoverable;
  @include text-icon(20px, 10px);
}
</style>
