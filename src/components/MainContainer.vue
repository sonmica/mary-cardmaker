<script setup lang="ts">
  import type { FeatureGroup } from '@/models/FeatureGroup';
  import CompactContentSection from './CompactContentSection.vue';
  import ContentSection from './ContentSection.vue';
  import LeftRightContentSection from './LeftRightContentSection.vue';
  import FeatureGroupSection from './FeatureGroupSection.vue';

  import Data from '@/assets/data/Data';
</script>

<template>    
  <div class="d-flex flex-column gap-3">
    <div class="text-center">
      <h1 class="text-uppercase">Quick Reference</h1>
    </div>
    <div class="grid-container-2col gap-3">
      <CompactContentSection sectionTitle="On your turn" :section="onYourTurnSection" />
      <ContentSection sectionTitle="On someone else's turn" :section="onSomeoneElsesTurnSection"/>
    </div>

    <LeftRightContentSection sectionTitle="Common actions" :section="commonActionsSection" twoColumn :leftColumnIds="['attack']"/>

    <FeatureGroupSection :sectionTitle="`Actions for: Lv ${level} ${races[raceId].name} ${classId}`" :features="personalActionsSection" twoColumn />
    
    <ContentSection sectionTitle="More actions" :section="moreActionsSection" twoColumn />
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        backgrounds: Data.backgrounds,
        classes: Data.classes,
        commonActions: Data.commonActions,
        races: Data.races,
        classId: "fighter",
        level: 1,
        raceId: "halfOrc",
        subClassFeature: "fightingStyleProtection"
      };
    },
    computed: {
      onYourTurnSection: function() {
        return this.commonActions.find((c: any) => c.id === "onYourTurn");
      },
      onSomeoneElsesTurnSection: function() {
        return this.commonActions.find((c: any) => c.id === "onSomeoneElsesTurn");
      },
      commonActionsSection: function() {
        return this.commonActions.find((c: any) => c.id === "commonActions");
      },
      moreActionsSection: function() {
        return this.commonActions.find((c: any) => c.id === "moreActions");
      },
      personalActionsSection: function() {
        const raceFeatures = this.races[this.raceId].features;
        const levelFeatures = this.classes[this.classId].featuresByLevel.find(fbl => fbl.level === this.level);
        const classFeatures = levelFeatures?.features ?? [];
        const classSubFeatures = levelFeatures?.subFeatures.find(sf => sf.id === this.subClassFeature);

        const splicedFeatures = [...raceFeatures, ...classFeatures, classSubFeatures];

        console.log("classFeatures", classFeatures);
        console.log("splicedFeatures", splicedFeatures);
        return splicedFeatures;
      }
    }
  };
</script>