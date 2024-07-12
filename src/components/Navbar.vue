<script setup lang="ts">
import { onMounted } from "vue";

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
</script>

<template>
  <nav
    id="navigationBar"
    class="flex justify-between h-[6rem] sticky top-0 backdrop-blur-[8px] text-[1.5rem] p-[2rem] z-[1000]"
  >
    <a href="/">Rishabh Laxmikanth</a>
    <ul class="flex gap-x-[4em]">
      <li><a href="#projects" class="hover:underline">Projects</a></li>
      <li><a href="#experience" class="hover:underline">Experience</a></li>
      <li>
        <a
          href="https://drive.google.com/file/d/1lmjx7B_v8xFAHe2Rui8m6CFAYw5_wPU-/view?usp=sharing"
          class="hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          >Resume</a
        >
      </li>
    </ul>
  </nav>
</template>
