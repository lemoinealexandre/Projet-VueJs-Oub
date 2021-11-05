<template>
  <div class="container-gestion-restaurants">
    <BarreMenu style="height: 100%"></BarreMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import BarreMenu from './BarreMenu.vue';

export default {
  name: 'GestionRestaurants',
  components: {
    BarreMenu
  }
}
</script>

<style>

.container-gestion-restaurants {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
}
</style>