<template>
  <article class="slide">
    <a :href="link" class="link">
      <div class="title-wrapper">
        <h3 class="hero-name">{{ heroName || "#HERO_NAME" }}</h3>
        <p class="actor-name">{{ actorName || "#ACTOR_NAME" }}</p>
      </div>

      <p class="about">{{ about || "#ABOUT" }}</p>
    </a>

    <img
      :src="imageSrc || placeholderImage"
      :alt="actorName"
      class="background-image"
    />
  </article>
</template>

<script>
export default {
  name: "SectionActorsSlide",
  props: {
    heroName: {
      type: String,
      require: true,
    },
    actorName: {
      type: String,
      require: true,
    },
    about: {
      type: String,
      require: true,
    },
    imageSrc: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      placeholderImage: "https://via.placeholder.com/150x300",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.slide {
  flex-shrink: 0;
  position: relative;

  width: 282px;
  height: 400px;

  margin-right: 24px;
  padding: 24px;
  padding-bottom: 32px;

  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: $breakpointMd) {
    width: 256px;
    height: 360px;

    padding: 16px;
    padding-bottom: 24px;
  }

  @media (max-width: $breakpointSm) {
    width: 216px;
    height: 280px;

    padding-bottom: 16px;
  }
}

.slide:hover {
  .title-wrapper {
    top: 0;
    bottom: auto;
  }

  .background-image {
    transform: scale(1.05);
    filter: brightness(0.8);
  }

  .about {
    max-height: 200px;
    opacity: 1;
  }
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;

  transition: $transition;
}

.link {
  position: relative;

  height: 100%;

  display: flex;
  flex-direction: column;

  font-family: $font-text;
  color: $color-font-default;
  text-decoration: none;
}

.title-wrapper {
  position: absolute;
  top: calc(100% - 64px);

  transition: top $transition;

  @media (max-width: $breakpointMd) {
    top: calc(100% - 52px);
  }

  @media (max-width: $breakpointSm) {
    top: calc(100% - 42px);
  }
}

.hero-name {
  margin: 0;
  margin-bottom: 4px;

  font-size: 24px;
  font-weight: 600;

  @media (max-width: $breakpointMd) {
    font-size: 20px;
  }

  @media (max-width: $breakpointSm) {
    font-size: 16px;
  }
}

.actor-name {
  margin: 0;

  font-size: 24px;

  @media (max-width: $breakpointMd) {
    font-size: 20px;
  }

  @media (max-width: $breakpointSm) {
    font-size: 16px;
  }
}

.about {
  position: absolute;
  bottom: 0;

  max-height: 0;
  margin: 0;

  display: block;
  opacity: 0;

  font-size: 16px;

  overflow: hidden;
  transition: max-height 0.8s, opacity $transition;
}
</style>
