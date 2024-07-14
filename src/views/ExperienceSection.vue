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
  <section id="experience" class="px-[20rem] my-[16rem]">
    <p class="text-[4rem] font-semibold underline">Experience</p>
    <div class="my-[8rem] grid gap-[2rem] px-[2rem]">
      <div
        v-for="experience in experiences"
        :key="experience.image_name"
        class="h-[20rem] bg-dark-400 rounded-lg flex items-center overflow-hidden card-shadow relative experience-image-animation"
      >
        <div class="w-[55%] absolute right-0 flex justify-end">
          <img
            :src="fullImagePath(experience.image_name)"
            :alt="experience.description"
            class="opacity-20 blur-md w-[80%]"
          />
        </div>
        <div class="px-[4rem] w-[75ch]">
          <p class="text-[1.75rem] font-semibold">
            {{ experience.title }}
          </p>
          <a
            :href="experience.related_link"
            rel="noopener noreferrer"
            target="_blank"
            class="text-[1.25rem] text-light-300 font-medium my-[0.5em] hover:underline"
          >
            {{ experience.description }}
          </a>
          <p class="text-[1.25rem] text-light-300 font-light my-[0.5em]">
            {{ experience.date }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-shadow:hover {
  box-shadow: 39px 41px 67px -15px rgba(0, 0, 0, 0.75),
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
