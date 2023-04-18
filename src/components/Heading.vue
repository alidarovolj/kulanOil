<template>
  <div>
    <p class="mb-7 text-2xl font-extrabold">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "HeadingBlock",
  props: ["title"],
};
</script>