<script setup lang="ts">
import experiences from "../data/experience.json";

let baseImagePath: string = "/experience-images/";

export interface RootInterface {
  experiences: Experience[];
}

export interface Experience {
  title: string;
  description: string;
  date: string;
  related_link: string;
}

function fullImagePath(imageName: string) {
  return new URL(`${baseImagePath}${imageName}`, import.meta.url).href;
}
</script>

<template>
  <section id="experience" class="max-w-[48rem] my-8 md:max-w-full md:px-[20rem] md:my-[16rem]">
    <p class="text-[2rem] font-bold underline md:text-[4rem]">Experience</p>
    <div class="my-[2rem] grid gap-8 md:px-[2rem] md:my-[8rem]">
      <div
        v-for="experience in experiences"
        class="max-w-[144rem] h-[16rem] bg-dark-400 rounded-lg flex items-center overflow-hidden card-shadow relative experience-image-animation md:h-[20rem]"
      >
        <div class="w-[75%] absolute right-0 flex justify-center md:w-[55%] md:justify-end">
      <img
        :src="fullImagePath(experience.image_name)"
        :alt="experience.description"
        draggable="false"
        class="opacity-20 blur-md w-full h-full object-cover md:w-[80%]"
      />
    </div>
        <div class="px-[2rem] w-[75ch] z-[5] md:px-[4rem]">
          <p class="text-[1.5rem] mb-2 font-semibold md:text-[1.75rem]">
            {{ experience.title }}
          </p>
          <a
            :href="experience.related_link"
            rel="noopener noreferrer"
            target="_blank"
            class="text-light-300 font-medium hover:underline md:text-[1.25rem] md:my-[0.5em]"
          >
            {{ experience.description }}
          </a>
          <p class="text-light-300 font-light my-[0.5em] md:text-[1.25rem]">
            {{ experience.date }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-shadow:hover {
  box-shadow: 39px 41px 67px -15px rgba(0, 0, 0, 0.80),
    -20px 5px 120px -108px rgba(240, 240, 240, 1);
  transition: box-shadow ease-in-out 300ms;
}

.experience-image-animation:hover {
  & img {
    transform: scale(1.05);
    transition: transform 250ms ease-in-out;
  }
}
</style>
