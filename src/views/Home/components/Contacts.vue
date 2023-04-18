<template>
  <div class="py-16" id="contacts">
    <div class="container mx-auto px-4 lg:px-0">
      <Heading title="Контакты" />
    </div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab82b4f36ce7c7761852400deb89dfc0ee7078246e8a35d689e76787c5db88359&amp;source=constructor"
      width="100%"
      height="642"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";

export default {
  name: "ContactsBlock",
  components: { Heading },
};
</script>
