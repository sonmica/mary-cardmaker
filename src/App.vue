<script setup lang="ts">
import CardComponent from './components/CardComponent.vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

const title = "Attack";
const body = "Make an attack with a melee weapon, ranged weapon, improvised weapon, or no weapon.";
const icon = "crossed-swords";
const title2 = "Cast a spell";
const body2 = "Cast a spell that has a casting time of 1 (or more) actions. If another spell has been cast as a bonus action, only cantrips are allowed.";
const icon2 = "spell-book";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div class="d-flex flex-column gap-3">
      <CardComponent :title="title" :body="body" :iconType="icon"/>
      <CardComponent :title="title2" :body="body2" :iconType="icon2"/>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
