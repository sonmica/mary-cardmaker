<script setup lang="ts">
  import CompactContentSection from './CompactContentSection.vue';
  import ContentSection from './ContentSection.vue';
  import LeftRightContentSection from './LeftRightContentSection.vue';
  import CharacterDropdown from './CharacterDropdown.vue';
  import FeatureGroupSection from './FeatureGroupSection.vue';

  import Data from '@/assets/data/Data';
  import type Feature from '@/models/Feature';
  import type Section from '@/models/Section';
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

    <CharacterDropdown :player-list="characterDropdownList"/>

    <FeatureGroupSection
      :section-title="`Features for: ${currentPlayer?.characterName}`"
      :section-sub-title="`${race} ${classId} Lv ${level}`"
      :features="personalActionsSection"
      twoColumn
    />
    
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
        currentPlayer: Data.players.find(p => p.id === "miguel")
      };
    },
    computed: {
      onYourTurnSection: function(): Section {
        return this.commonActions.find((c: any) => c.id === "onYourTurn") as Section;
      },
      onSomeoneElsesTurnSection: function(): Section {
        return this.commonActions.find((c: any) => c.id === "onSomeoneElsesTurn") as Section;
      },
      commonActionsSection: function(): Section {
        return this.commonActions.find((c: any) => c.id === "commonActions") as Section;
      },
      characterDropdownList: function(): {title: string, value: string}[] {
        return Data.players.map(p => {
          return {title: p.playerName, value: p.id}
        }).sort((a, b) => a.title > b.title ? 1 : -1);
      },
      moreActionsSection: function(): Section {
        return this.commonActions.find((c: any) => c.id === "moreActions") as Section;
      },
      race: function() {
        return this.currentPlayer?.raceId;
      },
      subRace: function() {
        return this.currentPlayer?.subRaceId;
      },
      class: function () {
        // TODO: allow for multiple classes, currently this just gets the first class
        return this.currentPlayer?.classes[0];
      },
      classId: function () {
        return this.class?.classId;
      },
      level: function () {
        return this.class?.level;
      },
      personalActionsSection: function() {
        const raceFeatures = this.races[this.race].features;
        if(this.races[this.race].subRaces && this.subRace) {
          const currentSubRace = this.races[this.race].subRaces.find((r: Feature) => r.id === this.subRace);
          if(currentSubRace) {
            currentSubRace.features.forEach((feat: Feature) => raceFeatures.push(feat));
          }
        }

        const levelFeatures = this.classes[this.classId].featuresByLevel.find(fbl => fbl.level === this.level);
        const classFeatures = levelFeatures?.features ?? [];

        const splicedFeatures = [...raceFeatures, ...classFeatures];
        
        if(levelFeatures?.subFeatures) {
          const classSubFeatures = levelFeatures?.subFeatures.find((sf: Feature) => sf.id === this.class.subClassFeature);
          if(classSubFeatures) {
            splicedFeatures.push(classSubFeatures);
          }
        }

        console.log("classFeatures", classFeatures);
        console.log("splicedFeatures", splicedFeatures);
        return splicedFeatures;
      }
    }
  };
</script>