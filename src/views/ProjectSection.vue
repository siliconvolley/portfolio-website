<script setup lang="ts">
import projects from "../data/projects.json";

let baseImagePath: string = "../assets/project-images/";

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
  <section id="projects" class="px-[20rem] my-[16rem]">
    <p class="text-[4rem] font-semibold underline">Projects</p>
    <div class="my-[8rem] grid grid-cols-3 gap-[4rem] px-[2rem]">
      <div v-for="project in projects">
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
              class=""
            />
          </a>
        </div>
        <div>
          <p class="text-[1.75rem] font-semibold my-[0.25em]">
            <a
              :href="project.repo_link"
              rel="noopener noreferrer"
              target="_blank"
              class="hover:underline"
              >{{ project.title }}</a
            >
          </p>
          <p class="text-[1.2rem] font-light text-light-300 my-[0.5em]">
            {{ project.description }}
          </p>
          <ul class="font-medium flex gap-2 text-center">
            <li
              v-for="tech in project.tech_stack"
              class="bg-dark-100 min-w-[4rem] p-2 rounded-md"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.project-card {
  background: var(--clr-dark-300);
  height: 16rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
}
</style>
