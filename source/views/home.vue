<template>
  <c-intro class="intro" />
  <c-about class="about" />
  <c-courses class="courses" />
  <c-benefits class="benefits" />
  <c-events-preview class="events-preview" />
  <c-certificate class="certificate" />

  <c-subscription class="subscription" />
</template>

<script setup lang="ts">
import CIntro from '~components/c-intro.vue'
import CAbout from '~components/c-about.vue'
import CCourses from '~components/c-courses.vue'
import CBenefits from '~components/c-benefits.vue'
import CEventsPreview from '~components/c-events-preview.vue'
import CCertificate from '~components/c-certificate.vue'

import CSubscription from '~components/c-subscription.vue'
</script>
