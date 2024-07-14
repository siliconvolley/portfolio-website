<template>
  <div
    id="scroll-top-button"
    class="fixed bottom-10 right-10 hidden cursor-pointer"
  >
    <img
      src="../assets/chevron-up.svg"
      alt="back to top"
      class="min-w-[3vw] p-2 rounded-md hover:bg-dark-300 transition-all duration-200 ease-in-out"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const scrollTopButton = document.getElementById("scroll-top-button");
  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  window.onscroll = () => {
    if (scrollTopButton) {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    }
  };
});
</script>
