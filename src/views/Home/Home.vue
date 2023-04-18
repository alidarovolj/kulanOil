<template>
  <div>
    <Hero />
    <Benefits />
    <History />
    <Clients />
    <Contacts />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import History from "./components/History.vue";
import Clients from "./components/Clients.vue";
import Contacts from "./components/Contacts.vue";
import { useMeta } from "vue-meta";

export default {
  name: "HomePage",
  components: {
    Hero,
    Benefits,
    History,
    Clients,
    Contacts,
  },
  setup() {
    useMeta({ title: "Главная" });
  },
};
</script>