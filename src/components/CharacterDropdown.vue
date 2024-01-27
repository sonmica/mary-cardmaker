<template>
  <div class="dropdown text-center">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Select Player
    </button>
    <ul class="dropdown-menu">
      <li v-for="(player, i) in playerList" :key="i">
        <a class="dropdown-item" :href="`/${player.value}`">{{ player.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    playerList: Array<{title: string, value: string}>
  }
}
</script>