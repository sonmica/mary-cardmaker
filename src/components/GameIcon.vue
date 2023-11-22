<script setup lang="ts">
import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';
import SpellBookIcon from './icons/IconSpellBook.vue';

const props = defineProps<{
    iconType: "crossed-swords" | "spell-book";
}>();
</script>

<template>
    <CrossedSwordsIcon class="w-100" v-if="props.iconType === 'crossed-swords'" />
    <SpellBookIcon class="w-100" v-if="props.iconType === 'spell-book'" />
</template>