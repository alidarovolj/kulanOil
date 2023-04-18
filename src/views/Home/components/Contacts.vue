<template>
  <div class="py-16" id="contacts">
    <div class="container mx-auto px-4 lg:px-0">
      <Heading title="Контакты" />
    </div>
    <div>
      <div class="container mx-auto px-0 relative">
        <div
          class="lg:absolute left-0 top-12 rounded-xl p-5 lg:customShadow bg-white w-full lg:w-1/4"
        >
          <p class="font-bold mb-3">г. Алматы, ​улица Жетысуская, 43</p>
          <div class="text-secondaryColor">
            <a class="block" href="tel:+77273900300">+7 (727) 390‒03‒00</a>
            <a class="block" href="tel:+77273900300">+7 (727) 390‒03‒01</a>
            <a class="block" href="tel:+77273900300">+7 (727) 390‒03‒02</a>
            <a class="block mb-3" href="tel:+77777555057">+7‒777‒755‒50‒57</a>
            <a class="block" href="mailto:info@exline.kz">info@exline.kz</a>
          </div>
        </div>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab82b4f36ce7c7761852400deb89dfc0ee7078246e8a35d689e76787c5db88359&amp;source=constructor"
        width="100%"
        height="642"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";

export default {
  name: "ContactsBlock",
  components: { Heading },
};
</script>
