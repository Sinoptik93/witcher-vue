<template>
  <button
    class="button"
    :class="accent ? 'button--accent' : ''"
    @click="$emit('button-click')"
  >
    {{ title || "#BUTTON_TITLE" }}
  </button>
</template>

<script>
export default {
  name: "ButtonDefault",
  props: {
    title: {
      required: true,
      type: String,
    },
    accent: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/mixins";

.button {
  @include buttonDefault();
}

.button--accent {
  background-color: $color-button-bg-active;
}
</style>
