<script setup lang="ts">
import type { IconType } from '@/models/IconType';
import GameIcon from './GameIcon.vue';
import { computed } from 'vue';

const props = defineProps<{
  title: string,
  body: string,
  subBody?: string,
  iconType: IconType,
  size?: string
}>();

const iconSize = computed(() => ({
  'icon-large': props.size && props.size === 'icon-large',
  'icon-medium': !props.size || props.size === 'icon-medium',
  'icon-small': props.size && props.size === 'icon-small',
}));
</script>

<template>
  <div class="border rounded-3 p-3">
    <div class="d-flex flex-row align-items-start gap-3">    
      <div class="flex-grow-0 flex-shrink-0" :class="iconSize">
        <GameIcon :iconType="iconType" class="card-img-top"/>
      </div>
      <div class="card-body">
        <h3 class="card-title text-uppercase">{{title}}</h3>
        <p class="card-text">{{ body }}</p>
        <p v-if="subBody" class="fw-light fst-italic">{{ subBody }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-large {
  width: 12rem;
}

.icon-medium {
  width: 6rem;
}

.icon-small {
  width: 3rem;
}
</style>
