<script setup lang="ts">
  import CompactContentSection from './CompactContentSection.vue';
  import ContentSection from './ContentSection.vue';
  import LeftRightContentSection from './LeftRightContentSection.vue';

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
        const c = this.commonActions.find((c: any) => c.id === "commonActions");
        console.log("Common actions section", c);
        return c;
      },
      moreActionsSection: function() {
        return this.commonActions.find((c: any) => c.id === "moreActions");
      }
    }
  };
</script>