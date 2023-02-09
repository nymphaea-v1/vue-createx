<template>
  <c-intro class="intro" />
  <c-about class="about" />
  <c-courses class="courses" />
  <c-benefits class="benefits" />

  <c-subscription class="subscription" />
</template>

<script setup lang="ts">
import CIntro from 'components/c-intro.vue'
import CAbout from 'components/c-about.vue'
import CSubscription from 'components/c-subscription.vue'
import CCourses from 'components/c-courses.vue'
import CBenefits from 'components/c-benefits.vue'
</script>

<style scoped lang="scss">
.intro {
  padding-top: 170px;
}
</style>
