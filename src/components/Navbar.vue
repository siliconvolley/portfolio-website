<script setup lang="ts">
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);

onMounted(() => {
  const navigationBar = document.getElementById("navigationBar");
  if (navigationBar) {
    const navigationBarHeight = navigationBar.offsetHeight;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      `${navigationBarHeight - 1}px`
    );
  }
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav
    id="navigationBar"
    class="w-full h-auto text-[1.5rem] sticky top-0 flex justify-between items-center backdrop-blur-[8px] z-[1000] p-8"
  >
    <a href="/" class="w-full">Rishabh Laxmikanth</a>
    <ul
      v-bind:class="{ open: isMenuOpen }"
      class="menu bg-dark-400 w-full grid place-items-center absolute top-[100%] left-0 right-0 overflow-hidden md:bg-inherit md:flex md:justify-end md:gap-x-[4em] md:relative md:overflow-visible"
    >
      <li class="my-4 md:my-0">
        <a href="#projects" @click="toggleMenu" class="hover:underline"
          >Projects</a
        >
      </li>
      <li class="my-4 md:my-0">
        <a href="#experience" @click="toggleMenu" class="hover:underline"
          >Experience</a
        >
      </li>
      <li class="my-4 md:my-0">
        <a
          href="https://drive.google.com/file/d/1lmjx7B_v8xFAHe2Rui8m6CFAYw5_wPU-/view?usp=sharing"
          @click="toggleMenu"
          class="hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          >Resume</a
        >
      </li>
    </ul>
    <button @click="toggleMenu" class="hover:underline focus:underline md:hidden">
      Menu
    </button>
  </nav>
</template>

<style scoped>
.menu {
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
}

.menu.open {
  max-height: 500px;
}
</style>
