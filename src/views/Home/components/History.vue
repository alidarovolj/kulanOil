<template>
  <div class="py-16" id="history">
    <div class="container mx-auto px-4 lg:px-0">
      <Heading title="История Exline" />
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/5 flex flex-col justify-between mr-0 lg:mr-6 mb-5 lg:mb-0">
          <div class="p-7 rounded-xl bg-sectionBg col-span-1 mb-5 lg:mb-0">
            <p class="text-lg lg:text-2xl font-extrabold mb-4">
              Курьерская компания Exline основана 31 июля 2003 года
            </p>
            <p class="opacity-75">
              За время работы компания Exline заняла достойную нишу на рынке
              почтовых услуг, зарекомендовав себя как надежного партнера,
              которому доверяют свои отправления многие компании казахстанского
              и международного бизнеса
            </p>
          </div>
          <img class="w-full" src="@/assets/img/history/1.png" alt="" />
        </div>
        <div class="w-full lg:w-3/5 flex flex-col-reverse lg:flex-col justify-between">
          <img class="w-full mb-6" src="@/assets/img/history/2.png" alt="" />
          <div class="p-7 rounded-xl bg-sectionBg col-span-1 mb-5 lg:mb-0">
            <p class="text-lg lg:text-2xl font-extrabold mb-4">
              Курьерская компания Exline, оказывая доступные услуги всем,
              предлагает индивидуальный подход к каждому клиенту!
            </p>
            <p class="opacity-75">
              Развивая свой бизнес, мы хотим быть полезными в развитие Вашего
              бизнеса! Профессиональный опыт сотрудников курьерской компании
              Exline и опыт наших партнеров дает нам право быть уверенными в
              том, что наше сотрудничество обеспечит сторонам экономию средств и
              времени! ExLine — линия надежной доставки!
            </p>
          </div>
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