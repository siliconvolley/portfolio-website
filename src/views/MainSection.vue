<script setup lang="ts">
import ProjectSection from "./ProjectSection.vue";
import ExperienceSection from "./ExperienceSection.vue";
</script>

<template>
  <main>
    <section class="px-[20rem] mt-[16rem]">
      <div class="text-[3.5rem] w-[24ch]">
        <p>Hi there!</p>
        <p>I'm <span class="font-semibold">Rishabh Laxmikanth</span></p>
        <p class="text-[1.75rem] my-[1em]">
          I build digital products with immersive technology. I'm passionate
          about <span class="font-semibold">backend development</span>,
          <span class="font-semibold">machine learning</span>, and contributing
          to <span class="font-semibold">open source</span>.
        </p>
        <div class="text-[1.25rem] font-normal flex gap-x-[4em] my-[2em]">
          <a
            href="https://www.linkedin.com/in/rishabhlaxmikanth/"
            rel="noopener noreferrer"
            target="_blank"
            class="underline hover:underline-offset-4"
            >linkedin</a
          >
          <a
            href="https://x.com/rishhhabhhh"
            rel="noopener noreferrer"
            target="_blank"
            class="underline hover:underline-offset-4"
            >twitter</a
          >
          <a
            href="https://github.com/siliconvolley/"
            rel="noopener noreferrer"
            target="_blank"
            class="underline hover:underline-offset-4"
            >github</a
          >
        </div>
      </div>
    </section>

    <ProjectSection />
  
    <ExperienceSection />
  </main>
</template>
