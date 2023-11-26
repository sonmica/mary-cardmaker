<script setup lang="ts">
  import type CardContent from '@/models/CardContent';
  import CardComponent from './CardComponent.vue';
  import ContentSection from './ContentSection.vue';

  // TODO: add a key or id to CardContent
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
</script>

<template>    
  <div class="d-flex flex-column">
    <div>
      <h1>Quick Reference</h1>
    </div>
    <ContentSection sectionTitle="On your turn" :childCards="commonActions"/>
    <div class="d-flex flex-column gap-3 w-100">
      <CardComponent v-for="card in cards" :key="card.title" :title="card.title" :body="card.body" :iconType="card.iconType" size="icon-small"/>
    </div>
  </div>
</template>

<script lang="ts">
  import commonActions from '../assets/data/commonActions.json';
  export default {
    data() {
      return {
        commonActions: commonActions,
      };
    },
  };
</script>