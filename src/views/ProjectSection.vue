<script setup lang="ts">
import projects from "../data/projects.json";

let baseImagePath: string = "/project-images/";

export interface RootInterface {
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  tech_stack: string[];
  image_name: string;
  site_link: string;
  repo_link: string;
}

function fullImagePath(imageName: string) {
  return new URL(`${baseImagePath}${imageName}`, import.meta.url).href;
}
</script>

<template>
  <section
    id="projects"
    class="max-w-[48rem] md:max-w-full md:px-[20rem] md:my-[16rem]"
  >
    <p class="text-[2rem] font-semibold underline md:text-[4rem]">Projects</p>
    <div class="max-w-[144rem] my-[2rem] grid gap-8 md:my-[8rem] md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="project in projects"
        class="p-2 rounded-lg card-shadow-animation md:p-4"
      >
        <div class="project-card">
          <a
            :href="project.site_link"
            rel="noopener noreferrer"
            target="_blank"
            class="h-full grid place-items-center"
          >
            <img
              :src="fullImagePath(project.image_name)"
              alt="Project Sample Image"
              draggable="false"
              class="max-w-full hover:scale-110 duration-200"
            />
          </a>
        </div>
        <div class="">
          <p class="text-[1.5rem] font-semibold my-[0.25em] md:text-[1.75rem]">
            <a
              :href="project.repo_link"
              rel="noopener noreferrer"
              target="_blank"
              class="hover:underline"
              >{{ project.title }}</a
            >
          </p>
          <p class="font-light text-light-300 my-[0.5em] md:text-[1.2rem]">
            {{ project.description }}
          </p>
          <ul class="font-medium flex flex-wrap gap-2 text-center">
            <li
              v-for="tech in project.tech_stack"
              class="bg-dark-300 min-w-[4rem] p-[0.5rem] rounded-md cursor-default hover:bg-dark-100"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  background: var(--clr-dark-300);
  height: 12rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
}

@media (min-width: 768px) {
  .project-card {
    height: 16rem;
  }
}

.card-shadow-animation:hover {
  box-shadow: 39px 41px 67px -15px rgba(0, 0, 0, 0.8),
    -20px 5px 120px -108px rgba(240, 240, 240, 1);
  transition: box-shadow ease-in-out 300ms;
}
</style>
