<template>
  <div class="container">
    <Heading level="2" text="Кадры со съемок" />
    <SectionFootageGallery :list="gallerySections" />
    <ButtonDefault
      title="Загрузить еще"
      :accent="true"
      @button-click="fakeAsync"
    />
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import ButtonDefault from "@/components/ButtonDefault";
import SectionFootageGallery from "@/components/SectionFootageGallery";

export default {
  name: "SectionFootage",
  components: {
    Heading,
    ButtonDefault,
    SectionFootageGallery,
  },
  data() {
    return {
      state: {
        isLoading: false,
      },
      sectionExample: [
        {
          id: 1,
          src: require("@/assets/pictures/footage/extra-1.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/pictures/footage/extra-2.png"),
        },
        {
          id: 3,
          src: require("@/assets/pictures/footage/extra-3.jpg"),
        },
        {
          id: 4,
          src: require("@/assets/pictures/footage/extra-4.jpg"),
        },
        {
          id: 5,
          src: require("@/assets/pictures/footage/extra-5.jpg"),
        },
      ],
      gallerySections: [
        [
          {
            id: 1,
            src: require("@/assets/pictures/footage/extra-1.jpg"),
          },
          {
            id: 2,
            src: require("@/assets/pictures/footage/extra-2.png"),
          },
          {
            id: 3,
            src: require("@/assets/pictures/footage/extra-3.jpg"),
          },
          {
            id: 4,
            src: require("@/assets/pictures/footage/extra-4.jpg"),
          },
          {
            id: 5,
            src: require("@/assets/pictures/footage/extra-5.jpg"),
          },
        ],
      ],
    };
  },
  methods: {
    addGallery(photoArray) {
      this.gallerySections.push(photoArray);
    },
    addNewPhotos(photoStore, fetchedData) {
      photoStore.push(fetchedData);
    },
    fakeAsync() {
      this.state.isLoading = true;
      setTimeout(
        () => this.addNewPhotos(this.gallerySections, this.sectionExample),
        3000
      );
      this.state.isLoading = false;
    },
  },
};
</script>

<style scoped></style>
