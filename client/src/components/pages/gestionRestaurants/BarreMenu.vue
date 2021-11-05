<template>
  <div class="divBarreMenu">
    <ul>
      <li><v-icon class="titleBarreMenu">Gestion restaurant</v-icon></li>
      <li v-for="(item, index) in items" v-bind:key="index" class="liBarreMenu" @click="goTo(item.route)">
        <v-icon>mdi-silverware-fork-knife</v-icon>
        <button class="buttonBarreMenu">
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "BarreMenu",
  data: () => ({
    inset: true,
    items: [
      {
        action: "mdi-label",
        title: "Liste des restaurants",
        route: "/restaurants",
      },
      {
        action: "mdi-label",
        title: "Ajouter un restaurant",
        route: "/restaurants/ajouter",
      },
    ],
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style>
.divBarreMenu {
  justify-content: left;
  width: 100vw;
  max-width: 20%;
  min-width: 130px;
  height: 100vh;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  padding-top: 30px;
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .liBarreMenu {
    padding: 5px 15px !important;
  }
}

.liBarreMenu {
  border-radius: 30px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
  background-color: white;
  margin: 10px;
  padding: 15px 25px;
}

.theme--light.v-icon {
  color: rgb(0, 0, 0);
}

.titleBarreMenu {
  font-size: 1em;
  text-transform: uppercase;
}
</style>