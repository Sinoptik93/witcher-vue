<template>
  <component class="svg" :is="getIcon"></component>
</template>

<script>
import ArrowLeft from "./list/arrow-left";
import ArrowRight from "./list/arrow-right";

export default {
  name: "icon",
  components: {
    ArrowLeft,
    ArrowRight,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    getIcon() {
      return this.icon;
    },
  },
};
</script>

<style scoped></style>
