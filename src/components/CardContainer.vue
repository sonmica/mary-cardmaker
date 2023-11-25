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

  const onYourTurnCards: CardContent[] = [
    {
      title: "Action",
      body: "An action such as attack or cast a spell. You may choose to use an action or move first.",
      iconType: "swordwoman"
    },
    {
      title: "Move",
      body: "Move a distance up to your speed of [x]. You may choose to use an action or move first, or move then do an action and then move again, up to your base speed.",
      iconType: "walk"
    },
    {
      title: "Bonus Action",
      body: "Some class features and spells allow you to make a bonus action, for example many cantrips (zero-th level spells) can be cast as a bonus action.",
      iconType: "extra-time"
    },
    {
      title: "Free Action",
      body: "Some actions require neither action nor your move, or can be done while making another action. An example is shouting to communicate to another member, or interacting with an object.",
      iconType: "talk"
    },
  ];

</script>

<template>    
  <div class="d-flex flex-column">
    <div>
      <h1>Quick Reference</h1>
    </div>
    <ContentSection sectionTitle="On your turn" :childCards="onYourTurnCards"/>
    <div class="d-flex flex-column gap-3 w-100">
      <CardComponent v-for="card in cards" :key="card.title" :title="card.title" :body="card.body" :iconType="card.iconType" size="icon-small"/>
    </div>
  </div>
</template>
