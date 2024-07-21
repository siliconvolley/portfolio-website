<script setup lang="ts">
import ProjectSection from "./ProjectSection.vue";
import ExperienceSection from "./ExperienceSection.vue";
</script>

<template>
  <main class="w-full mt-[8rem] px-12 grid place-items-center md:block md:px-0">
    <section class="text-[2rem] mb-[8rem] max-w-[48rem] md:px-[20rem] md:mt-[16rem]">
      <div class="md:text-[3.5rem] md:w-[24ch]">
        <p>Hi there!</p>
        <p>I'm <span class="font-bold">Rishabh Laxmikanth</span></p>
        <p class="text-[1.5rem] my-4 md:text-[1.75rem] md:my-[1em]">
          I build digital products with immersive technology. I'm passionate
          about <span class="font-bold">backend development</span>,
          <span class="font-bold">machine learning</span>, and contributing
          to <span class="font-bold">open source</span>.
        </p>
        <div class="max-w-[20rem] text-[1.25rem] font-normal mt-8 grid grid-flow-col md:gap-x-[4em] md:my-[2em]">
          <a
            href="https://www.linkedin.com/in/rishabhlaxmikanth/"
            rel="noopener noreferrer"
            target="_blank"
            class="underline underline-offset-2 hover:underline-offset-4"
            >linkedin</a
          >
          <a
            href="https://x.com/rishhhabhhh"
            rel="noopener noreferrer"
            target="_blank"
            class="underline underline-offset-2 hover:underline-offset-4"
            >twitter</a
          >
          <a
            href="https://github.com/siliconvolley/"
            rel="noopener noreferrer"
            target="_blank"
            class="underline underline-offset-2 hover:underline-offset-4"
            >github</a
          >
        </div>
      </div>
    </section>

    <ProjectSection />
  
    <ExperienceSection />
  </main>
</template>
