<template>
  <div class="container-accueil">
    <div class="div-photo-accueil">
      <div class="container-barre-recherche-accueil" ref="divPhotoAcceuil">
        <v-text-field
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Rechercher des restaurants "
          class="barre-recherche-accueil"
          v-model="search"
          @input="debounceGoToRestaurants()"
        ></v-text-field>
      </div>
    </div>
    <span class="span-accueil">Une envie d'un restaurant ? </span>
    <div class="recommendationAccueil">
      <Recommandation
        class="positionRecommandation"
        v-for="(restaurant, index) in random"
        v-bind:key="index"
        :restaurant="restaurant"
        :id="index"
      ></Recommandation>
    </div>
    <span class="span-accueil">Les restaurants recommande !</span>
    <div class="recommendationAccueil">
      <Recommandation
        class="positionRecommandation"
        v-for="(restaurant, index) in listeFrance"
        v-bind:key="index"
        :restaurant="restaurant"
        :id="index+10"
      ></Recommandation>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

import Filtres from "../../../modules/Filtres";
import Recommandation from "./Recommandation";
import { getRestaurants, getRestaurantsCount} from "../../../modules/api/RestaurantsAPI";
export default {
  components: { Recommandation },
  name: "Accueil",
  filters: Filtres,
  data: () => ({
    n: 1,
    random: [],
    listeFrance: [],
    search: "",
  }),
  mounted() {
    getRestaurantsCount().then((res) => {
      const pageMax = Math.ceil(res / 4);
      const random = Math.floor(Math.random() * pageMax);
      getRestaurants({ page: random, pagesize: 4 }).then(
        (res) => (this.random = res.restaurants)
      );
    });

    getRestaurantsCount().then(res => {
      const pageMax = Math.ceil(res/4);
      const random = Math.floor(Math.random() * pageMax);
      getRestaurants({page: random, pagesize: 4}).then (res => this.listeFrance = res.restaurants);

    })
    
  },
  created() {
    window.addEventListener("scroll", this.barSearchHidden);
    this.$store.state.printMenuSearch = false;
  },
  destroyed() {
    window.removeEventListener("scroll", this.barSearchHidden);
    this.$store.state.hideMenuSearch = true;
  },
  methods: {
    barSearchHidden() {
      const rect = this.$refs.divPhotoAcceuil.getBoundingClientRect();
      this.$store.state.printMenuSearch =
        rect.y + rect.height < 100 - rect.height;
    },
    debounceGoToRestaurants: _.debounce(function () {
      this.$store.state.motsclesRestaurants = this.search;
      this.$router.push("/restaurants");
    }, 500),
  },
};
</script>

<style>
.recommendationAccueil {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 80px;
}

.positionRecommandation {
  margin-right: 15px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
}

.div-photo-accueil {
  display: flex;
  background-image: url(../../../assets/table-restaurant.png);
  height: 350px;
  width: 100vw;
  min-width: 500px;
  max-width: 750px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.barre-recherche-accueil {
  border-radius: 30px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  background-color: white;
}

.barre-recherche-accueil.v-input {
  flex: none;
}

.container-barre-recherche-accueil {
  width: 90%;
  height: max-content;
}

.span-accueil {
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
}
</style>