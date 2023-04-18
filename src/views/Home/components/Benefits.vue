<template>
  <div class="py-16 mt-24" id="benefits">
    <div class="container mx-auto px-4 lg:px-0">
      <Heading title="Наши преимущества" />
      <div class="flex flex-wrap lg:flex-nowrap justify-between text-base">
        <div class="w-half lg:w-fourth py-5 px-4 bg-sectionBg text-center rounded-xl mb-3 lg:mb-0">
          <img class="mb-3 mx-auto" src="@/assets/img/benefits/1.png" alt="" />
          <p class="font-bold">Быстрая доставка</p>
        </div>
        <div class="w-half lg:w-fourth py-5 px-4 bg-sectionBg text-center rounded-xl mb-3 lg:mb-0">
          <img class="mb-3 mx-auto" src="@/assets/img/benefits/2.png" alt="" />
          <p class="font-bold">Доставим в любую точку города и области</p>
        </div>
        <div class="w-half lg:w-fourth py-5 px-4 bg-sectionBg text-center rounded-xl lg:mb-0">
          <img class="mb-3 mx-auto" src="@/assets/img/benefits/3.png" alt="" />
          <p class="font-bold">Ежедневные отправки</p>
        </div>
        <div class="w-half lg:w-fourth py-5 px-4 bg-sectionBg text-center rounded-xl lg:mb-0">
          <img class="mb-3 mx-auto" src="@/assets/img/benefits/4.png" alt="" />
          <p class="font-bold">Собственный склад</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";

export default {
  name: "BenefitsBlock",
  components: { Heading },
};
</script>