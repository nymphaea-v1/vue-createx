<template>
  <div class="certificate">
    <div class="certificate__container">
      <div class="certificate__main">
        <h6 class="certificate__sub-heading">
          Createx certificate
        </h6>

        <h1 class="certificate__main-heading">
          Your expertise will be confirmed
        </h1>

        <img
          src="~~images/certificate/certificate.png"
          alt="Our certificate"
          class="certificate__image"
        >

        <p class="certificate__paragraph">
          We are accredited by international professional organizations and institutes:
        </p>

        <div class="certificate__partners">
          <img
            src="~~images/certificate/del-mar-strategy-logo.svg"
            alt="Del Mar Strategy"
            class="certificate__partner"
          >
          <img
            src="~~images/certificate/sentinal-consulting-logo.svg"
            alt="Sentinal Consulting"
            class="certificate__partner"
          >
          <img
            src="~~images/certificate/national-logo.svg"
            alt="National"
            class="certificate__partner"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.certificate {
  margin: 100px 0 120px;

  &__container {
    @extend %container;

    position: relative;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 20px;

    max-width: calc(100% - 500px);

    box-shadow:
      0 80px 80px -20px rgb(154 156 165 / 16%),
      0 30px 24px -10px rgb(154 156 165 / 10%),
      0 12px 10px -6px rgb(154 156 165 / 8%),
      0 4px 4px -4px rgb(30 33 44 / 5%);
  }

  &__main {
    width: 400px;
  }

  &__main-heading {
    margin-bottom: 48px;
  }

  &__paragraph {
    margin-bottom: 32px;
  }

  &__partners {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }
}

@media (max-width: $break-table-max) {
  .certificate {
    &__image {
      position: static;

      display: block;
      max-width: 80vw;
      margin: 0 auto 40px;
    }

    &__main {
      width: 80vw;
      margin: 0 auto;

      text-align: center;
    }

    &__paragraph {
      margin-bottom: 16px;
    }
  }
}
</style>
