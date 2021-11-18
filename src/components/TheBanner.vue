<template>
  <section class="banner">
    <div class="container content-wrapper">
      <div class="content">
        <Heading level="1" :text="data.heading" class="heading" />
        <p class="description">{{ data.description }}</p>
        <ButtonDefault :title="data.buttonTitle" :accent="true" />
      </div>
    </div>

    <img :src="data.imageSrc" alt="banner" class="background-image" />
  </section>
</template>

<script>
import ButtonDefault from "@/components/ButtonDefault";
import Heading from "@/components/Heading";

export default {
  name: "TheBanner",
  components: { ButtonDefault, Heading },
  props: {
    data: {
      type: Object,
      required: true,
      validator(inputData) {
        return (
          inputData?.heading && inputData?.description && inputData?.buttonTitle
        );
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.banner {
  position: relative;

  height: 440px;
  margin-bottom: 72px;

  overflow: hidden;

  @media (max-width: $breakpointMd) {
    height: 360px;
    margin-bottom: 64px;
  }

  @media (max-width: $breakpointSm) {
    margin-bottom: 16px;
  }
}

.background-image {
  position: absolute;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;

  @media (max-width: $breakpointMd) {
    object-position: 60%;
  }
}

.content-wrapper {
  position: relative;
  z-index: 1;

  height: 100%;

  display: flex;
  align-items: center;
}

.content {
  max-width: 440px;

  @media (max-width: $breakpointMd) {
    max-width: 370px;
  }

  @media (max-width: $breakpointSm) {
    max-width: 280px;
  }
}

.heading {
  margin-bottom: 24px;
}

.description {
  margin: 0;
  margin-bottom: 40px;

  font-family: $font-text, serif;
  font-size: 16px;
  line-height: 20px;
  color: $color-font-default;
}
</style>
