<script setup lang="ts">
import type { IconType } from '@/models/IconType';
import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';
import ExtraTimeIcon from './icons/IconExtraTime.vue';
import PersonIcon from './icons/IconPerson.vue';
import SpellBookIcon from './icons/IconSpellBook.vue';
import SwordwomanIcon from './icons/IconSwordwoman.vue';
import TalkIcon from './icons/IconTalk.vue';
import WalkIcon from './icons/IconWalk.vue';

const props = defineProps<{
    iconType: IconType;
}>();
</script>

<template>
  <CrossedSwordsIcon class="w-100" v-if="props.iconType === 'crossed-swords'" />
  <ExtraTimeIcon class="w-100" v-if="props.iconType === 'extra-time'" />
  <PersonIcon class="w-100" v-if="props.iconType === 'person'" />
  <SpellBookIcon class="w-100" v-if="props.iconType === 'spell-book'" />
  <SwordwomanIcon class="w-100" v-if="props.iconType === 'swordwoman'" />
  <TalkIcon class="w-100" v-if="props.iconType === 'talk'" />
  <WalkIcon class="w-100" v-if="props.iconType === 'walk'" />
</template>