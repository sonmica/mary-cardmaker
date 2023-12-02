<script setup lang="ts">
import type { IconType } from '@/models/IconType';

import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';
import ExtraTimeIcon from './icons/IconExtraTime.vue';
import GoblinIcon from './icons/IconGoblin.vue';
import HighShotIcon from './icons/IconHighShot.vue';
import PersonIcon from './icons/IconPerson.vue';
import SpellBookIcon from './icons/IconSpellBook.vue';
import SwordwomanIcon from './icons/IconSwordwoman.vue';
import TalkIcon from './icons/IconTalk.vue';
import WalkIcon from './icons/IconWalk.vue';
import BladeDragIcon from './icons/IconBladeDrag.vue';
import BoltSpellCastIcon from './icons/IconBoltSpellCast.vue';
import DivertIcon from './icons/IconDivert.vue';
import ShieldBashIcon from './icons/IconShieldBash.vue';
import SurprisedIcon from './icons/IconSurprised.vue';
import SwordClashIcon from './icons/IconSwordClash.vue';
import AcrobaticIcon from './icons/IconAcrobatic.vue';
import ConvinceIcon from './icons/IconConvince.vue';
import EgyptianWalkIcon from './icons/IconEgyptianWalk.vue';
import InvisibleIcon from './icons/IconInvisible.vue';
import MagnifyingGlassIcon from './icons/IconMagnifyingGlass.vue';
import PlayerTimeIcon from './icons/IconPlayerTime.vue';
import PullIcon from './icons/IconPull.vue';

// TODO: Alphabetize these imports
const props = defineProps<{
  iconType: IconType
}>()
</script>

<template>
  <AcrobaticIcon class="w-100" v-if="props.iconType === 'acrobatic'" />
  <BladeDragIcon class="w-100" v-if="props.iconType === 'blade-drag'" />
  <ConvinceIcon class="w-100" v-if="props.iconType === 'convince'" />
  <CrossedSwordsIcon class="w-100" v-if="props.iconType === 'crossed-swords'" />
  <ExtraTimeIcon class="w-100" v-if="props.iconType === 'extra-time'" />
  <GoblinIcon class="w-100" v-if="props.iconType === 'goblin'" />
  <HighShotIcon class="w-100" v-if="props.iconType === 'high-shot'" />
  <PersonIcon class="w-100" v-if="props.iconType === 'person'" />
  <SpellBookIcon class="w-100" v-if="props.iconType === 'spell-book'" />
  <SwordwomanIcon class="w-100" v-if="props.iconType === 'swordwoman'" />
  <TalkIcon class="w-100" v-if="props.iconType === 'talk'" />
  <WalkIcon class="w-100" v-if="props.iconType === 'walk'" />
  <BoltSpellCastIcon class="w-100" v-if="props.iconType === 'bolt-spell-cast'" />
  <DivertIcon class="w-100" v-if="props.iconType === 'divert'" />
  <ShieldBashIcon class="w-100" v-if="props.iconType === 'shield-bash'" />
  <SurprisedIcon class="w-100" v-if="props.iconType === 'surprised'" />
  <SwordClashIcon class="w-100" v-if="props.iconType === 'sword-clash'" />
  <EgyptianWalkIcon class="w-100" v-if="props.iconType === 'egyptian-walk'" />
  <InvisibleIcon class="w-100" v-if="props.iconType === 'invisible'" />
  <MagnifyingGlassIcon class="w-100" v-if="props.iconType === 'magnifying-glass'" />
  <PlayerTimeIcon class="w-100" v-if="props.iconType === 'player-time'" />
  <PullIcon class="w-100" v-if="props.iconType === 'pull'" />
</template>
