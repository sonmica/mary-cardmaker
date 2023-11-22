<script setup lang="ts">
  import CardComponent from './CardComponent.vue';
  const title = "Attack";
  const body = "Make an attack with a melee weapon, ranged weapon, improvised weapon, or no weapon.";
  const icon = "crossed-swords";
  const title2 = "Cast a spell";
  const body2 = "Cast a spell that has a casting time of 1 (or more) actions. If another spell has been cast as a bonus action, only cantrips are allowed.";
  const icon2 = "spell-book";

  
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <CardComponent :title="title" :body="body" :iconType="icon" />
    <CardComponent :title="title2" :body="body2" :iconType="icon2" />
  </div>
</template>
