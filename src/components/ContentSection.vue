<script setup lang="ts">
import CardComponent from './CardComponent.vue';
import type Section from '@/models/Section';

const props = defineProps<{
  sectionTitle: string,
  section: Section,
}>();

console.log("content section - child cards", props.section);
</script>

<template>
  <div class="d-flex flex-column">
    <h2 class="text-uppercase">{{ sectionTitle }}</h2>
  </div>
  
  <div class="row row-cols-2 g-3">
    <CardComponent
      v-for="card in section.contents"
      :key="card.id" :title="card.name"
      :body="card.description"
      :iconType="card.iconType"
      :subBody="card.usage ? `Usage: ${card.usage}` : undefined"
      class="col"/>
  </div>
</template>