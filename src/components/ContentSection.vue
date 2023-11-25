<script setup lang="ts">
import type CardContent from '@/models/CardContent';
import CardComponent from './CardComponent.vue';

defineProps<{
  sectionTitle: string,
  childCards: CardContent[]
}>();
</script>

<template>
  <div class="d-flex flex-column">
    <h2 class="text-uppercase">{{ sectionTitle }}</h2>
  </div>
  
  <div class="d-flex flex-column gap-3 w-100">
      <CardComponent v-for="card in childCards" :key="card.title" :title="card.title" :body="card.body" :iconType="card.iconType" />
    </div>
</template>