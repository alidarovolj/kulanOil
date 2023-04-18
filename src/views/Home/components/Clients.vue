<template>
  <div class="py-16" id="clients">
    <div class="container mx-auto px-4 lg:px-0">
      <Heading title="Нам доверяют" />
      <div class="block lg:flex justify-between flex-wrap items-center">
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/1.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/2.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/3.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/4.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/5.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/6.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/7.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-fourth">
          <img
            class="object-contain w-1/2 mx-auto lg:mx-0 lg:w-fit"
            src="@/assets/img/clients/8.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";

export default {
  name: "ClientsBlock",
  components: { Heading },
};
</script>