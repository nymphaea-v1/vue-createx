<template>
  <div class="benefits">
    <div class="benefits__container">
      <h6 class="benefits__sub-heading">
        Our benefits
      </h6>

      <h1 class="benefits__main-heading">
        That's how we do it
      </h1>

      <c-tab-menu
        v-slot="{ tab }: { tab: 1 | 2 | 3 | 4 }"
        v-model:active-tab="activeTab"
        class="benefits__tab-menu"
        :tabs="Object.keys(benefits).length"
      >
        <span class="tab">
          <c-icon
            class="tab__icon"
            :name="(benefits[tab].iconName)"
          />
          <span class="tab__text">{{ benefits[tab].tabName }}</span>
        </span>
      </c-tab-menu>

      <transition-group name="list">
        <section
          :key="activeTab"
          class="benefits__main"
        >
          <div class="benefits__text-content">
            <h2>{{ benefits[activeTab].heading }}</h2>
            <p>{{ benefits[activeTab].text }}</p>
          </div>
          <img
            :src="image"
            class="benefits__image"
          >
        </section>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTabMenu from 'components/ui/c-tab-menu.vue'
import CIcon from 'components/ui/c-icon.vue'

import { ref, watch } from 'vue'

const activeTab = ref<1 | 2 | 3 | 4>(1)
const image = ref(undefined)

const benefits = ref({
  1: {
    tabName: 'Experienced Tutors',
    iconName: 'star',
    heading: 'Only practicing tutors',
    text: `Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
    Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa.
    Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.`,
    imageName: 'benefits-tutors.svg'
  },
  2: {
    tabName: 'Feedback & Support',
    iconName: 'like',
    heading: 'Always in touch, ready to support',
    text: `Faucibus erat massa elementum nec fermentum augue. Ante pellentesque dis et malesuada mauris,
    faucibus est et a. Gravida malesuada ut varius eu pretium vitae eu. Volutpat nullam posuere eget felis at dui neque.
    Neque vitae, pulvinar donec integer lacus, fermentum, faucibus. Lorem porttitor hendrerit vel interdum arcu arcu mollis massa.
    Velit nulla felis ornare elit a platea malesuada.`,
    imageName: 'benefits-feedback.svg'
  },
  3: {
    tabName: '24/7 Online Library',
    iconName: 'layouts',
    heading: 'The most carefully selected materials',
    text: `Senectus magnis diam tellus nibh elit ac ac. Elit eget faucibus urna, feugiat arcu mattis viverra tempor id.
    Vivamus nunc quam donec non amet nulla etiam ullamcorper posuere. Venenatis commodo molestie eleifend nulla faucibus in.
    In sed felis adipiscing pharetra, etiam. Molestie euismod consectetur eu sed.
    Sit magnis sed sed ipsum vulputate pellentesque nullam faucibus.`,
    imageName: 'benefits-library.svg'
  },
  4: {
    tabName: 'Community',
    iconName: 'chat',
    heading: 'Student communication',
    text: `Eu placerat magna elementum nulla egestas id. Non sit enim tortor massa id tristique vel tincidunt sit.
    Tellus, ridiculus dictum purus nibh sed bibendum. In eleifend ac convallis convallis lectus.
    Urna semper ac non eros, donec accumsan egestas ipsum. Arcu at morbi.`,
    imageName: 'benefits-community.svg'
  }
})

watch(activeTab, () => {
  import(`images/illustrations/${benefits.value[activeTab.value].imageName}`)
    .then((module) => {
      image.value = module.default
    })
}, { immediate: true })
</script>

<style scoped lang="scss">
.benefits {
  margin: 180px 0 120px;

  &__container {
    @extend %container;
  }

  &__sub-heading,
  &__main-heading {
    text-align: center;
  }

  &__tab-menu {
    margin-bottom: 60px;
  }

  &__main {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
  }

  &__text-content {
    width: 495px;
  }

  &__image {
    max-width: 50vw;
  }
}

.tab {
  @include text-icon;

  justify-content: center;
  min-height: 34px;

  line-height: 120%;
}

.list-enter-from {
  opacity: 0;
}

.list-enter-to {
  opacity: 1;

  transition: opacity 0.7s ease;
}

@media (max-width: $break-table-max) {
  .benefits {
    margin: 90px 0 60px;

    &__main {
      flex-direction: column-reverse;
    }

    &__text-content {
      width: 85vw;

      text-align: center;
    }

    &__image {
      max-width: calc(50% + 100px);
    }
  }

  .tab {
    font-size: 14px;
  }
}
</style>
