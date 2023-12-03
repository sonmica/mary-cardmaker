<script setup lang="ts">
import type { IconType } from '@/models/IconType';

import AcrobaticIcon from './icons/IconAcrobatic.vue';
import AttachedShieldIcon from './icons/IconAttachedShield.vue';
import BackPainIcon from './icons/IconBackPain.vue';
import BladeDragIcon from './icons/IconBladeDrag.vue';
import BoltSpellCastIcon from './icons/IconBoltSpellCast.vue';
import ClawSlashesIcon from './icons/IconClawSlashes.vue';
import ConvinceIcon from './icons/IconConvince.vue';
import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';
import DaggersIcon from './icons/IconDaggers.vue';
import DespairIcon from './icons/IconDespair.vue';
import DivertIcon from './icons/IconDivert.vue';
import EgyptianWalkIcon from './icons/IconEgyptianWalk.vue';
import ExtraTimeIcon from './icons/IconExtraTime.vue';
import GoblinIcon from './icons/IconGoblin.vue';
import HealingIcon from './icons/IconHealing.vue';
import HighShotIcon from './icons/IconHighShot.vue';
import InvisibleIcon from './icons/IconInvisible.vue';
import MagnifyingGlassIcon from './icons/IconMagnifyingGlass.vue';
import PersonIcon from './icons/IconPerson.vue';
import PlayerTimeIcon from './icons/IconPlayerTime.vue';
import PullIcon from './icons/IconPull.vue';
import ShieldBashIcon from './icons/IconShieldBash.vue';
import SpellBookIcon from './icons/IconSpellBook.vue';
import SunglassesIcon from './icons/IconSunglasses.vue';
import SurprisedIcon from './icons/IconSurprised.vue';
import SwordClashIcon from './icons/IconSwordClash.vue';
import SwordwomanIcon from './icons/IconSwordwoman.vue';
import TalkIcon from './icons/IconTalk.vue';
import WalkIcon from './icons/IconWalk.vue';

const props = defineProps<{
  iconType: IconType
}>()
</script>

<template>
  <AttachedShieldIcon class="w-100" v-if="props.iconType === 'attached-shield'" />
  <AcrobaticIcon class="w-100" v-if="props.iconType === 'acrobatic'" />
  <BackPainIcon class="w-100" v-if="props.iconType === 'back-pain'" />
  <BladeDragIcon class="w-100" v-if="props.iconType === 'blade-drag'" />
  <ClawSlashesIcon class="w-100" v-if="props.iconType === 'claw-slashes'" />
  <ConvinceIcon class="w-100" v-if="props.iconType === 'convince'" />
  <CrossedSwordsIcon class="w-100" v-if="props.iconType === 'crossed-swords'" />
  <DaggersIcon class="w-100" v-if="props.iconType === 'daggers'" />
  <DespairIcon class="w-100" v-if="props.iconType === 'despair'" />
  <ExtraTimeIcon class="w-100" v-if="props.iconType === 'extra-time'" />
  <GoblinIcon class="w-100" v-if="props.iconType === 'goblin'" />
  <HealingIcon class="w-100" v-if="props.iconType === 'healing'" />
  <HighShotIcon class="w-100" v-if="props.iconType === 'high-shot'" />
  <PersonIcon class="w-100" v-if="props.iconType === 'person'" />
  <SpellBookIcon class="w-100" v-if="props.iconType === 'spell-book'" />
  <SwordwomanIcon class="w-100" v-if="props.iconType === 'swordwoman'" />
  <TalkIcon class="w-100" v-if="props.iconType === 'talk'" />
  <WalkIcon class="w-100" v-if="props.iconType === 'walk'" />
  <BoltSpellCastIcon class="w-100" v-if="props.iconType === 'bolt-spell-cast'" />
  <DivertIcon class="w-100" v-if="props.iconType === 'divert'" />
  <ShieldBashIcon class="w-100" v-if="props.iconType === 'shield-bash'" />
  <SunglassesIcon class="w-100" v-if="props.iconType === 'sunglasses'" />
  <SurprisedIcon class="w-100" v-if="props.iconType === 'surprised'" />
  <SwordClashIcon class="w-100" v-if="props.iconType === 'sword-clash'" />
  <EgyptianWalkIcon class="w-100" v-if="props.iconType === 'egyptian-walk'" />
  <InvisibleIcon class="w-100" v-if="props.iconType === 'invisible'" />
  <MagnifyingGlassIcon class="w-100" v-if="props.iconType === 'magnifying-glass'" />
  <PlayerTimeIcon class="w-100" v-if="props.iconType === 'player-time'" />
  <PullIcon class="w-100" v-if="props.iconType === 'pull'" />
</template>
