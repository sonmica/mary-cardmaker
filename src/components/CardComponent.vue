<script setup lang="ts">
import type { IconType } from '@/models/IconType';
import GameIcon from './GameIcon.vue';
import { computed } from 'vue';

const props = defineProps<{
  title: string,
  body: string,
  subBody?: string | string[],
  iconType: IconType,
  size?: string,
  compact?: boolean
}>();

const iconSize = computed(() => ({
  'icon-large': props.size && props.size === 'icon-large',
  'icon-medium': !props.size || props.size === 'icon-medium',
  'icon-small': props.size && props.size === 'icon-small',
}));
</script>

<template>
  <div class="p-3" :class="compact ? 'd-flex flex-column gap-3' : ''">
    <div class="d-flex flex-row align-items-start gap-3">    
      <div class="flex-grow-0 flex-shrink-0" :class="iconSize">
        <GameIcon :iconType="iconType" class="card-img-top"/>
      </div>
      <div class="card-body">
        <h3 class="card-title text-uppercase">{{title}}</h3>
        <div v-if="!compact">
          <div class="card-text">{{ body }}</div>
          <div v-if="subBody" class="mt-3">
            <div v-for="(item, index) in subBodyItems" :key="index" class="fw-light fst-italic">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>      
    <div v-if="compact">
      <div class="card-text">{{ body }}</div>
      <div v-if="subBody" class="mt-3">
        <div v-for="(item, index) in subBodyItems" :key="index" class="fw-light fst-italic">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    data() {},
    computed: {
      subBodyItems: function() {
        if(!this.subBody) {
          return [];
        }
        if(typeof this.subBody === "string") {
          return [this.subBody];
        }
        return this.subBody;
      }
    }
  }
</script>

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
