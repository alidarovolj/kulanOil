<template>
  <div>
    <button class="bg-buttonBg py-4 px-20 rounded-xl text-white font-bold w-full">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["title"],
};
</script>