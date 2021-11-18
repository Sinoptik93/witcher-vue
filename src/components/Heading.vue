<!--TODO: refactor https://012.vuejs.org/api/options.html-->
<template>
  <div class="heading">
    <h1 v-if="level === '1'">{{ text }}</h1>
    <h2 v-else-if="level === '2'">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    level: {
      require: true,
      type: String,
      validator(level) {
        return ["1", "2", "3", "4"].includes(level);
      },
    },
    text: {
      require: true,
      type: String,
    },
  },
  data: function () {
    return {
      headingHtml: `<h${this.level}>${this.text} 345345</h${this.level}>`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/mixins";

.heading {
  @include heading();
}
</style>
