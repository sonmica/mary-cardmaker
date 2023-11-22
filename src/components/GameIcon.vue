<script setup lang="ts">
import type { IconType } from '@/models/IconType';
import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';
import SpellBookIcon from './icons/IconSpellBook.vue';

const props = defineProps<{
    iconType: IconType;
}>();
</script>

<template>
    <CrossedSwordsIcon class="w-100" v-if="props.iconType === 'crossed-swords'" />
    <SpellBookIcon class="w-100" v-if="props.iconType === 'spell-book'" />
</template>