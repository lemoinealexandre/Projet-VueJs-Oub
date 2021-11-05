<template>
  <v-toolbar dense class="menuPrincipal">
    <v-avatar>
      <img src="../../../assets/logo.png" />
    </v-avatar>

    <v-spacer></v-spacer>

    <v-text-field
      v-model="search"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Rechercher des restaurants "
      v-if="$store.state.printMenuSearch"
      @input="debounceGoToRestaurants()"
    ></v-text-field>

    <v-spacer></v-spacer>

    <template v-for="(page, index) in pages">
      <v-btn v-bind:key="index" elevation="0" @click="goTo(page.route)">
        <v-icon>{{ page.icon }}</v-icon>
        <span>{{ page.name }}</span>
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script>
import _ from "lodash";

export default {
  name: "Menu",
  data: () => ({
    pages: [
      {
        route: "/",
        name: "Accueil",
        icon: "mdi-home",
      },
      {
        route: "/restaurants",
        name: "Restaurants",
        icon: "mdi-silverware-fork-knife",
      },
      {
        route: "/trouver",
        name: "Autour de vous",
        icon: "mdi-map-marker",
      },
    ],
    search: "",
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    debounceGoToRestaurants: _.debounce(function () {
      this.$store.state.motsclesRestaurants = this.search;
      this.goTo("/restaurants");
    }, 300),
  },
  props: {
    serchIsPresent: Boolean,
  },
};
</script>

<style>
.theme--light.v-btn.v-btn--has-bg {
  background-color: #fff !important;
}

.v-toolbar.menuPrincipal {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  height: max-content !important;
  padding-bottom: 10px;
  padding-top: 5px;
  min-width: max-content;
  transition: none;
}

header.menuPrincipal {
  z-index: 100000;
}
</style>