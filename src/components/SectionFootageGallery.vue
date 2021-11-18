<template>
  <div class="gallery" v-for="(section, index) in list" :key="index">
    <div
      class="extra-image"
      :class="getClass(index)"
      :key="photo.id"
      v-for="(photo, index) in section"
    >
      <img class="image" :src="photo.src" alt="sdfsf" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionFootageGallery",
  data() {
    return {
      test: require("@/assets/pictures/footage/extra-1.jpg"),
    };
  },
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  methods: {
    getClass(index) {
      return `extra-image-${index}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.gallery {
  display: grid;
  gap: 16px;

  grid-template-columns: 2fr 1fr 1fr;
  grid-template-areas:
    "extra-0 extra-1 extra-2"
    "extra-0 extra-3 extra-4";

  @media (max-width: $breakpointSm) {
    display: flex;
    flex-direction: column;
  }
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.extra-image {
  overflow: hidden;

  @media (max-width: $breakpointSm) {
    max-height: 212px;
  }
}

.extra-image-0 {
  grid-area: extra-0;
}

.extra-image-1 {
  grid-area: extra-1;
}

.extra-image-2 {
  grid-area: extra-2;
}

.extra-image-3 {
  grid-area: extra-3;
}

.extra-image-4 {
  grid-area: extra-4;
}

.main-image {
  width: 400px;
  height: 400px;
}
</style>
