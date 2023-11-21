<script setup lang="ts">
import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';
import SpellBookIcon from './icons/IconSpellBook.vue';

const props = defineProps<{
    iconType: "crossed-swords" | "spell-book";
}>();

console.log("props.iconType", props.iconType);
</script>

<template>
    <p>{{ iconType }}</p>
    <CrossedSwordsIcon :v-if="props.iconType === 'crossed-swords'" />
    <SpellBookIcon :v-if="props.iconType === 'spell-book'" />
</template>