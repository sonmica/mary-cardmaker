<script setup lang="ts">
import type { IconType } from '@/models/IconType';
import { IconTypeArray } from '@/models/IconType';

import AcrobaticIcon from './icons/IconAcrobatic.vue';
import AttachedShieldIcon from './icons/IconAttachedShield.vue';
import BackPainIcon from './icons/IconBackPain.vue';
import BladeDragIcon from './icons/IconBladeDrag.vue';
import BoltSpellCastIcon from './icons/IconBoltSpellCast.vue';
import ClawSlashesIcon from './icons/IconClawSlashes.vue';
import ClickIcon from './icons/IconClick.vue';
import CloverIcon from './icons/IconClover.vue';
import Clover2Icon from './icons/IconClover2.vue';
import ConvinceIcon from './icons/IconConvince.vue';
import CowledIcon from './icons/IconCowled.vue';
import CrossedSwordsIcon from './icons/IconCrossedSwords.vue';
import DaggersIcon from './icons/IconDaggers.vue';
import DespairIcon from './icons/IconDespair.vue';
import DivertIcon from './icons/IconDivert.vue';
import DragonBreathIcon from './icons/IconDragonBreath.vue';
import EgyptianWalkIcon from './icons/IconEgyptianWalk.vue';
import EnrageIcon from './icons/IconEnrage.vue';
import ExtraTimeIcon from './icons/IconExtraTime.vue';
import FairyIcon from './icons/IconFairy.vue';
import Fairy2Icon from './icons/IconFairy2.vue';
import FishMonsterIcon from './icons/IconFishMonster.vue';
import ForestCampIcon from './icons/IconForestCamp.vue';
import GiantIcon from './icons/IconGiant.vue';
import GoblinIcon from './icons/IconGoblin.vue';
import HealingIcon from './icons/IconHealing.vue';
import HeartInsideIcon from './icons/IconHeartInside.vue';
import HighShotIcon from './icons/IconHighShot.vue';
import HoodedAssassinIcon from './icons/IconHoodedAssassin.vue';
import HoodedFigureIcon from './icons/IconHoodedFigure.vue';
import HornedSkullIcon from './icons/IconHornedSkull.vue';
import IceSpellCastIcon from './icons/IconIceSpellCast.vue';
import InvisibleIcon from './icons/IconInvisible.vue';
import LifeBarIcon from './icons/IconLifeBar.vue';
import MagnifyingGlassIcon from './icons/IconMagnifyingGlass.vue';
import PersonIcon from './icons/IconPerson.vue';
import PianistIcon from './icons/IconPianist.vue';
import PlayerTimeIcon from './icons/IconPlayerTime.vue';
import PullIcon from './icons/IconPull.vue';
import PsychicWavesIcon from './icons/IconPsychicWaves.vue';
import PyromaniacIcon from './icons/IconPyromaniac.vue';
import ShieldBashIcon from './icons/IconShieldBash.vue';
import SpartanIcon from './icons/IconSpartan.vue';
import SpellBookIcon from './icons/IconSpellBook.vue';
import SparkSpiritIcon from './icons/IconSparkSpirit.vue';
import SpikedDragonHeadIcon from './icons/IconSpikedDragonHead.vue';
import SunglassesIcon from './icons/IconSunglasses.vue';
import SurprisedIcon from './icons/IconSurprised.vue';
import SwordClashIcon from './icons/IconSwordClash.vue';
import SwordwomanIcon from './icons/IconSwordwoman.vue';
import TalkIcon from './icons/IconTalk.vue';
import TreeFaceIcon from './icons/IconTreeFace.vue';
import WalkIcon from './icons/IconWalk.vue';

defineProps<{
  iconType: IconType
}>();
</script>

<template>
  <GoblinIcon class="w-100" v-if="!isValidIcon" />
  
  <AttachedShieldIcon class="w-100" v-if="isValidIcon && iconType === 'attached-shield'" />
  <AcrobaticIcon class="w-100" v-if="isValidIcon && iconType === 'acrobatic'" />
  <BackPainIcon class="w-100" v-if="isValidIcon && iconType === 'back-pain'" />
  <BladeDragIcon class="w-100" v-if="isValidIcon && iconType === 'blade-drag'" />
  <ClawSlashesIcon class="w-100" v-if="isValidIcon && iconType === 'claw-slashes'" />
  <ClickIcon class="w-100" v-if="isValidIcon && iconType === 'click'" />
  <CloverIcon class="w-100" v-if="isValidIcon && iconType === 'clover'" />
  <Clover2Icon class="w-100" v-if="isValidIcon && iconType === 'clover-2'" />
  <ConvinceIcon class="w-100" v-if="isValidIcon && iconType === 'convince'" />
  <CowledIcon class="w-100" v-if="isValidIcon && iconType === 'cowled'" />
  <CrossedSwordsIcon class="w-100" v-if="isValidIcon && iconType === 'crossed-swords'" />
  <DaggersIcon class="w-100" v-if="isValidIcon && iconType === 'daggers'" />
  <DespairIcon class="w-100" v-if="isValidIcon && iconType === 'despair'" />
  <DivertIcon class="w-100" v-if="isValidIcon && iconType === 'divert'" />
  <DragonBreathIcon class="w-100" v-if="isValidIcon && iconType === 'dragon-breath'" />
  <EnrageIcon class="w-100" v-if="isValidIcon && iconType === 'enrage'" />
  <ExtraTimeIcon class="w-100" v-if="isValidIcon && iconType === 'extra-time'" />
  <FairyIcon class="w-100" v-if="isValidIcon && iconType === 'fairy'" />
  <Fairy2Icon class="w-100" v-if="isValidIcon && iconType === 'fairy-2'" />
  <FishMonsterIcon class="w-100" v-if="isValidIcon && iconType === 'fish-monster'" />
  <ForestCampIcon class="w-100" v-if="isValidIcon && iconType === 'forest-camp'" />
  <GiantIcon class="w-100" v-if="isValidIcon && iconType === 'giant'" />
  <GoblinIcon class="w-100" v-if="isValidIcon && iconType === 'goblin'" />
  <HealingIcon class="w-100" v-if="isValidIcon && iconType === 'healing'" />
  <HeartInsideIcon class="w-100" v-if="isValidIcon && iconType === 'heart-inside'" />
  <HighShotIcon class="w-100" v-if="isValidIcon && iconType === 'high-shot'" />
  <HoodedAssassinIcon class="w-100" v-if="isValidIcon && iconType === 'hooded-assassin'" />
  <HoodedFigureIcon class="w-100" v-if="isValidIcon && iconType === 'hooded-figure'" />
  <HornedSkullIcon class="w-100" v-if="isValidIcon && iconType === 'horned-skull'" />
  <IceSpellCastIcon class="w-100" v-if="isValidIcon && iconType === 'ice-spell-cast'" />
  <LifeBarIcon class="w-100" v-if="isValidIcon && iconType === 'life-bar'" />
  <PersonIcon class="w-100" v-if="isValidIcon && iconType === 'person'" />
  <PsychicWavesIcon class="w-100" v-if="isValidIcon && iconType === 'psychic-waves'" />
  <SpartanIcon class="w-100" v-if="isValidIcon && iconType === 'spartan'" />
  <SpellBookIcon class="w-100" v-if="isValidIcon && iconType === 'spell-book'" />
  <SpikedDragonHeadIcon class="w-100" v-if="isValidIcon && iconType === 'spiked-dragon-head'" />
  <SwordwomanIcon class="w-100" v-if="isValidIcon && iconType === 'swordwoman'" />
  <BoltSpellCastIcon class="w-100" v-if="isValidIcon && iconType === 'bolt-spell-cast'" />
  <ShieldBashIcon class="w-100" v-if="isValidIcon && iconType === 'shield-bash'" />
  <SunglassesIcon class="w-100" v-if="isValidIcon && iconType === 'sunglasses'" />
  <SurprisedIcon class="w-100" v-if="isValidIcon && iconType === 'surprised'" />
  <SwordClashIcon class="w-100" v-if="isValidIcon && iconType === 'sword-clash'" />
  <EgyptianWalkIcon class="w-100" v-if="isValidIcon && iconType === 'egyptian-walk'" />
  <InvisibleIcon class="w-100" v-if="isValidIcon && iconType === 'invisible'" />
  <MagnifyingGlassIcon class="w-100" v-if="isValidIcon && iconType === 'magnifying-glass'" />
  <PlayerTimeIcon class="w-100" v-if="isValidIcon && iconType === 'player-time'" />
  <PullIcon class="w-100" v-if="isValidIcon && iconType === 'pull'" />
  <TreeFaceIcon class="w-100" v-if="isValidIcon && iconType === 'tree-face'" />
  <TalkIcon class="w-100" v-if="isValidIcon && iconType === 'talk'" />
  <WalkIcon class="w-100" v-if="isValidIcon && iconType === 'walk'" />
  <PianistIcon class="w-100" v-if="isValidIcon && iconType === 'pianist'" />
  <PyromaniacIcon class="w-100" v-if="isValidIcon && iconType === 'pyromaniac'" />
  <SparkSpiritIcon class="w-100" v-if="isValidIcon && iconType === 'spark-spirit'" />
</template>

<script lang="ts">
  export default {
    computed: {
      isValidIcon: function() {
        // Check if the icon has been imported already otherwise output to console so we can manually do it
        if(IconTypeArray.indexOf(this.iconType as IconType) === -1) {
          if(this.iconType) {
            console.log(`Found icon to import: ${this.iconType}`);
          }
          return false;
        }
        return true;
      }
    }
  }
</script>