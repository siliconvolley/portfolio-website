<script setup lang="ts"></script>

<template>
  <div>
    <div class="project-card">
      <img src="../assets/rocket.svg" alt="" class="h-full opacity-[25%] p-[2em]" />
    </div>
    <div>
      <p class="text-[1.75rem] font-semibold my-[0.25em]">
        <a href="#project" class="hover:underline">Title</a>
      </p>
      <p class="text-[1.25rem] my-[0.5em]">Description</p>
      <ul class="font-medium grid grid-flow-col grid-cols-5 gap-2 text-center">
        <li class="bg-dark-100 p-2 rounded-md">Insert</li>
        <li class="bg-dark-100 p-2 rounded-md">Tech</li>
        <li class="bg-dark-100 p-2 rounded-md">Stack</li>
        <li class="bg-dark-100 p-2 rounded-md">Here</li>
      </ul>
    </div>
  </div>
</template>

<style>
.project-card {
  background: var(--clr-dark-300);
  height: 16rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
}
</style>
