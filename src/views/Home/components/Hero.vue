<template>
  <div class="relative" id="hero">
    <div>
      <carousel
        :items-to-show="1"
        :wrapAround="true"
        :autoplay="5000"
        :breakpoints="breakpoints"
      >
        <slide v-for="slide in 3" :key="slide">
          <div class="bg-sectionBg pb-10 w-full">
            <div class="container mx-auto px-4 lg:px-0">
              <div class="block lg:flex justify-between items-center py-16">
                <div class="w-full lg:w-[28%] text-center lg:text-start">
                  <h1 class="text-2xl font-extrabold mb-4">
                    Внутригородская доставка
                  </h1>
                  <p class="opacity-75 mb-6">
                    Курьерская служба Exline предлагает Вашему вниманию услуги
                    по внутригородской доставке отправлений во всех областных
                    центрах Республики Казахстан
                  </p>
                  <Button class="w-max mx-auto lg:mx-0" title="Подробнее" />
                </div>
                <div>
                  <img
                    class="hidden lg:block absolute right-0 top-0 h-full"
                    src="@/assets/img/ellipse.png"
                    alt=""
                  />
                  <img
                    class="relative z-10"
                    src="@/assets/img/car.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
    <Search />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Search from "./Search.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "HeroSection",
  data() {
    return {
      breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Button,
    Search,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
