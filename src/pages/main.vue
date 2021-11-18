<template>
  <TheHeader :data="headerData" />
  <TheBanner :data="bannerData" />
  <SectionActors />
  <SectionFootage />
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheBanner from "@/components/TheBanner";
import SectionActors from "@/components/SectionActors";
import SectionFootage from "@/components/SectionFootage";

export default {
  name: "main",
  components: {
    SectionActors,
    TheBanner,
    TheHeader,
    SectionFootage,
  },
  data: function () {
    return {
      headerData: {
        logoSrc: require("@/assets/pictures/witcher-logo.png"),
        orderBtnTitle: "Подключить подписку",
      },

      bannerData: {
        heading: "Сериал Ведьмак",
        description:
          " Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,\n" +
          " идет навстречу своей судьбе в неспокойном мире, где люди часто\n" +
          " оказываются куда коварнее чудовищ.",
        buttonTitle: "Смотреть Сериал",
        imageSrc: require("@/assets/pictures/banner.jpg"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 72px;
}
</style>
