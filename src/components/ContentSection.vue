<script setup lang="ts">
import CardComponent from './CardComponent.vue';
import type Section from '@/models/Section';

defineProps<{
  sectionTitle: string,
  section: Section,
  twoColumn?: boolean
}>();
</script>

<template>
  <div class="d-flex flex-column border border-3 rounded-3 p-3">
    <h2 class="text-uppercase text-center">{{ sectionTitle }}</h2>  
    <div class="gap-3" :class="twoColumn ? 'grid-container-2col' : 'd-flex flex-column'">
      <div
          v-for="card in section.contents"
          :key="card.id"
          class="d-flex flex-column gap-3">
        <CardComponent :title="card.name"
          :body="card.description"
          :iconType="card.iconType"
          :subBody="card.usage ? `Usage: ${card.usage}` : undefined" />
        <div v-if="card.contents" class="d-flex flex-column ps-5 gap-3">
          <div v-for="subCard in card.contents" :key="subCard.id">            
            <CardComponent :title="subCard.name"
              class="h-100"
              :body="subCard.description"
              :iconType="subCard.iconType"
              size="icon-small"
              :subBody="subCard.usage ? `Usage: ${subCard.usage}` : undefined"/>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>