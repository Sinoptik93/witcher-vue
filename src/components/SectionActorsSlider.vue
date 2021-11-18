<template>
  <div class="slider">
    <div class="wrapper">
      <SectionActorsSlide
        v-for="actor in actors"
        :key="actor.id"
        :actor-name="actor.name"
        :hero-name="actor.role"
        :about="actor.about"
        :image-src="actor.photo"
        :link="actor.link"
      />
    </div>
  </div>
</template>

<script>
import SectionActorsSlide from "@/components/SectionActorsSlide.vue";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation } from "swiper";

import "swiper/swiper.min.css";

export default {
  name: "SectionActorsSlider",
  components: {
    SectionActorsSlide,
  },
  props: {},
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      actors: [
        {
          id: 1,
          role: "Геральт",
          name: "Генри Кавилл",
          photo: require("@/assets/pictures/actors/gerald.jpg"),
          link: "#gerald",
          about:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },

        {
          id: 2,
          role: "Лютик",
          name: "Джои Бэти",
          photo: require("@/assets/pictures/actors/liytik.jpg"),
          link: "#liytik",
          about:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },

        {
          id: 3,
          role: "Йеннифэр",
          name: "Аня Чалотра",
          photo: require("@/assets/pictures/actors/yienifer.jpg"),
          link: "#yienifer",
          about:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },

        {
          id: 4,
          role: "Цири",
          name: "Фрейя Аллан",
          photo: require("@/assets/pictures/actors/ciri.jpg"),
          link: "#ciri",
          about:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },

        {
          id: 5,
          role: "Эмгыр вар Эмрейс",
          name: "Барт Эдвардс",
          photo: require("@/assets/pictures/actors/emgyr.png"),
          link: "#emgyr",
          about:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },

        {
          id: 6,
          role: "Цири",
          name: "Фрейя Аллан",
          photo: require("@/assets/pictures/actors/ciri.jpg"),
          link: "#ciri",
          about:
            "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.slider {
  width: 100%;
  overflow: hidden;
}

.wrapper {
  display: flex;
  width: 100%;
  overflow-x: scroll;
}
</style>
