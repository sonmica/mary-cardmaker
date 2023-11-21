<script setup lang="ts">
import GameIcon from './GameIcon.vue';
import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';

defineProps<{
  title: string,
  body: string,
  iconType: 'crossed-swords' | 'spell-book',
}>();
</script>

<template>
  <div class="border rounded-3 p-3">
    <div class="d-flex flex-row align-items-start gap-3" style="width: 36rem">    
      <div>
        <!-- <GameIcon :iconType="iconType" class="card-img-top flex-grow-0 flex-shrink-0" style="width: 9rem"/> -->
        <CrossedSwordsIcon class="card-img-top flex-grow-0 flex-shrink-0" style="width: 9rem"/>
      </div>
      <div class="card-body">
        <h3 class="card-title text-uppercase">{{title}}</h3>
        <p class="card-text">{{ body }}</p>
        <p class="card-text">{{ iconType }}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>
