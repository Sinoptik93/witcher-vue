<template>
  <section class="actors-section">
    <div class="container">
      <div class="heading-wrapper">
        <Heading level="2" text="Актеры" />

        <!-- Slider navigation -->
        <div class="navigation">
          <button class="navigation-btn previous">
            <Icon icon="arrow-left" />
          </button>
          <button class="navigation-btn next">
            <Icon icon="arrow-right" />
          </button>
        </div>
      </div>

      <div class="decorate"></div>
    </div>
    <SectionActorsSlider class="slider" />
  </section>
</template>

<script>
import Heading from "@/components/Heading";
import Icon from "@/components/icon/index";
import SectionActorsSlider from "@/components/SectionActorsSlider";

export default {
  name: "SectionActors",
  components: { Heading, Icon, SectionActorsSlider },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.actors-section {
  margin-bottom: 72px;

  @media (max-width: $breakpointMd) {
    margin-bottom: 64px;
  }
}

.heading-wrapper {
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;

  @media (max-width: $breakpointSm) {
    margin-bottom: 16px;
  }
}

.navigation {
  width: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $breakpointSm) {
    width: 66px;
  }
}

.navigation-btn {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  cursor: pointer;
  color: $color-icon-default;
  opacity: 0.3; //TODO: fix this
  transition: color $transition, opacity $transition;

  &:hover {
    color: $color-button-bg-accent;
    opacity: 1;
  }

  @media (max-width: $breakpointSm) {
    width: 28px;
    height: 28px;
  }
}

.decorate {
  margin-bottom: 32px;

  display: flex;

  &:before {
    content: "";
    width: 50%;
    height: 2px;
    background-color: $color-button-bg-accent;
  }

  &:after {
    content: "";
    width: 50%;
    height: 2px;
    background-color: $color-icon-default;

    //fix this
    opacity: 0.3;
  }

  @media (max-width: $breakpointMd) {
    margin-bottom: 24px;
  }
}

.slider {
  margin-bottom: 72px;

  @media (max-width: $breakpointMd) {
    margin-bottom: 64px;
  }
}
</style>
