<script setup lang="ts">
import type { IconType } from '@/models/IconType';
import GameIcon from './GameIcon.vue';

defineProps<{
  title: string,
  body: string,
  iconType: IconType,
}>();
</script>

<template>
  <div class="border rounded-3 p-3">
    <div class="d-flex flex-row align-items-start gap-3" style="width: 36rem">    
      <div class="flex-grow-0 flex-shrink-0" style="width: 9rem">
        <GameIcon :iconType="iconType" class="card-img-top"/>
      </div>
      <div class="card-body">
        <h3 class="card-title text-uppercase">{{title}}</h3>
        <p class="card-text">{{ body }}</p>
      </div>
    </div>
  </div>
</template>
