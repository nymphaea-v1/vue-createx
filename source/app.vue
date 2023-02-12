<template>
  <c-header />
  <main>
    <router-view />
  </main>
  <c-footer />
</template>

<script setup lang="ts">
import CHeader from 'components/c-header.vue'
import CFooter from 'components/c-footer.vue'
</script>
