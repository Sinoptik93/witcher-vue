<template>
  <header class="header">
    <div class="container header-wrapper">
      <router-link to="/" class="logo">
        <img :src="data.logoSrc" alt="witcher logo" />
      </router-link>

      <ButtonDefault :title="data.orderBtnTitle" @button-click="test" />
    </div>
  </header>
</template>

<script>
import ButtonDefault from "./ButtonDefault";

export default {
  name: "TheHeader",
  components: {
    ButtonDefault,
  },
  props: {
    data: {
      type: Object,
      required: true,
      validator(inputData) {
        return inputData?.logoSrc && inputData?.orderBtnTitle;
      },
    },
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 22px 0;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 100%;
  max-width: 130px;
  height: 44px;

  margin-right: 10px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>
