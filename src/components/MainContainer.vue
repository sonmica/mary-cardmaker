<script setup lang="ts">
  import ContentSection from './ContentSection.vue';
  import Data from '@/assets/data/Data';
</script>

<template>    
  <div class="d-flex flex-column gap-3">
    <div class="text-center">
      <h1 class="text-uppercase">Quick Reference</h1>
    </div>
    <div class="grid-container-2col gap-3">
      <ContentSection sectionTitle="On your turn" :section="onYourTurnSection" twoColumn compact />
      <ContentSection sectionTitle="On someone else's turn" :section="onSomeoneElsesTurnSection"/>
    </div>

    <ContentSection sectionTitle="Common actions" :section="commonActionsSection" twoColumn />

    <ContentSection sectionTitle="More actions" :section="moreActionsSection" twoColumn />
  </div>
</template>

<script lang="ts">
  import commonActions from '../assets/data/commonActions.json';
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
        return commonActions.find(c => c.id === "onYourTurn") ?? {};
      },
      onSomeoneElsesTurnSection: function() {
        return commonActions.find(c => c.id === "onSomeoneElsesTurn") ?? {};
      },
      commonActionsSection: function() {
        return commonActions.find(c => c.id === "commonActions") ?? {};
      },
      moreActionsSection: function() {
        return commonActions.find(c => c.id === "moreActions") ?? {};
      }
    }
  };
</script>