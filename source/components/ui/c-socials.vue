<template>
  <div class="socials">
    <router-link
      v-for="{iconName, link} in links"
      :key="iconName"
      class="socials__link"
      :to="link"
    >
      <c-icon
        class="socials__icon"
        :name="iconName"
      />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import CIcon from 'components/ui/c-icon.vue'

defineProps<{ links: {iconName: string, link: string }[]}>()
</script>

<style scoped lang="scss">
.socials {
  --icon-color: #{$gray900};
  --icon-color-hover: #{$primary};

  display: flex;
  gap: 20px;
  height: 24px;

  &__link {
    color: var(--icon-color);

    &:hover {
      color: var(--icon-color-hover);
    }
  }

  &__icon {
    height: 100%;
  }
}
</style>
