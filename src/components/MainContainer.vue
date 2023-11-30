<script setup lang="ts">
  import type CardContent from '@/models/CardContent';
  import CardComponent from './CardComponent.vue';
  import ContentSection from './ContentSection.vue';
  import Data from '@/assets/data/Data';

  // TODO: add a key or id to CardContent
  // TODO: sorting by order of all sections
  // TODO: templating for [SPEED]
  const cards: CardContent[] = [
    {
      title: "Attack",
      body: "Make an attack with a melee weapon, ranged weapon, improvised weapon, or no weapon.",
      iconType: "crossed-swords"
    },
    {
      title: "Cast a spell",
      body: "Cast a spell that has a casting time of 1 (or more) actions. If another spell has been cast as a bonus action, only cantrips are allowed.",
      iconType: "spell-book"
    }
  ];

  console.log("Data", Data);
  console.log("backgrounds", Data.races)
</script>

<template>    
  <div class="row">
    <div>
      <h1 class="text-uppercase">Quick Reference</h1>
    </div>
    <div class="grid-container-2col gap-3">
      <ContentSection sectionTitle="On your turn" :section="onYourTurnSection" twoColumn />
      <ContentSection sectionTitle="On someone else's turn" :section="onSomeoneElsesTurnSection"/>
    </div>
    <!-- <div class="d-flex flex-column gap-3 w-100">
      <CardComponent v-for="card in cards" :key="card.title" :title="card.title" :body="card.body" :iconType="card.iconType" size="icon-small"/>
    </div> -->
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
      }
    }
  };
</script>