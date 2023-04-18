<template>
  <div>
    <div class="container mx-auto px-4 lg:px-0 relative mb-16 lg:mb-0">
      <div
        class="fixed px-4 lg:px-0 lg:static top-0 left-0 w-full bg-white z-[90] flex items-center justify-between py-2"
      >
        <img class="h-12 lg:h-16" src="@/assets/img/logo.png" alt="" />
        <div class="block lg:hidden">
          <i class="fa-solid fa-bars" @click="toggleNav"></i>
        </div>
        <div class="hidden lg:flex items-center">
          <div class="flex items-center border-r border-borderColor">
            <router-link :to="{ path: '/', hash: '#hero' }"
              >Главная</router-link
            >
            <router-link class="ml-5" :to="{ path: '/', hash: '#benefits' }"
              >Наши преимущества</router-link
            >
            <router-link class="ml-5" :to="{ path: '/', hash: '#history' }"
              >История Exline</router-link
            >
            <router-link class="ml-5" :to="{ path: '/', hash: '#clients' }"
              >Нам доверяют</router-link
            >
            <router-link class="mx-5" :to="{ path: '/', hash: '#contacts' }"
              >Контакты</router-link
            >
          </div>
          <div class="ml-5 text-secondaryColor">
            <a href="mailto:info@exline.kz">info@exline.kz</a>
            <a class="ml-5" href="tel:+77777078777">+7 (777) 707 87 77</a>
          </div>
        </div>
      </div>
      <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="fixed top-16 px-4 py-10 font-bold text-lg z-[100] left-0 w-full h-full flex-col bg-white"
      >
        <router-link
          class="mb-4 hover:text-buttonBg"
          @click="toggleNav"
          :to="{ path: '/', hash: '#hero' }"
          >Главная</router-link
        >
        <router-link
          class="mb-4 hover:text-buttonBg"
          @click="toggleNav"
          :to="{ path: '/', hash: '#benefits' }"
          >Наши преимущества</router-link
        >
        <router-link
          class="mb-4 hover:text-buttonBg"
          @click="toggleNav"
          :to="{ path: '/', hash: '#history' }"
          >История Exline</router-link
        >
        <router-link
          class="mb-4 hover:text-buttonBg"
          @click="toggleNav"
          :to="{ path: '/', hash: '#clients' }"
          >Нам доверяют</router-link
        >
        <router-link
          class="mb-4 hover:text-buttonBg"
          @click="toggleNav"
          :to="{ path: '/', hash: '#contacts' }"
          >Контакты</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>