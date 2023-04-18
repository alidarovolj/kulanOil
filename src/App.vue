<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{
        content ? `${content} | Exline Courier Company` : `SITE_NAME`
      }}</template>
    </metainfo>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    useMeta({
      title: "Exline Courier Company",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
};
</script>