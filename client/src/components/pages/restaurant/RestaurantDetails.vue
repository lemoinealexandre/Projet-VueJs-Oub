<template>
  <div class="container-restaurant-detail">
    <article class="container-restaurant" v-if="restaurant !== undefined">
      <header>
        {{ restaurant.name | uppercase }}
      </header>
      <main>
        <div class="data">
          <img src="https://picsum.photos/400/500/?random&t=1"/>
          <p v-for="(value, libelle) in dataBody" v-bind:key="libelle" class="value"><span class="lib">{{ libelle | uppercase}}:</span> {{ value }}</p>
        </div>
        <div class="container-map-restaurant">
            <Map class="map-restaurant"
              :center="center"
              :zoom="20"
              :restaurants="[restaurant]"
            ></Map>
          </div>
      </main>
    </article>
    <div class="container-loader" v-else-if="load">
      <div class="container-spinner">
        <v-progress-circular
          indeterminate
          color="green"
          :size="100"
        ></v-progress-circular>
      </div>
    </div>
    <div class="container-msg-error" v-else></div>
  </div>
</template>

<script>
import { getRestaurantById } from "../../../modules/api/RestaurantsAPI";
import Filtres from "../../../modules/Filtres";
import Map from "../../commun/Map.vue";

export default {
  name: "Restaurant",
  components: {
    Map,
  },
  data: () => ({
    id: "",
    restaurant: undefined,
    load: false,
    error: false,
  }),
  mounted() {
    //search Restaurant by id in url
    this.id = this.$route.params.id;
    this.searchRestaurant();
  },
  computed: {
    center() {
      const { coord } = this.restaurant.adresse;
      return [coord[1] ?? 0, coord[0] ?? 0];
    },
    dataBody() {
      return {
        cuisine: this.restaurant.cuisine,
        adresse: `${this.restaurant.adresse.building}, ${this.restaurant.adresse.street}, ${this.restaurant.adresse.zipcode}`,
        arrondissement: this.restaurant.arrondissement
      }
    }
  },
  methods: {
    async searchRestaurant() {
      try {
        this.load = true;
        this.error = false;
        this.restaurant = await getRestaurantById(this.id);
      } catch (exception) {
        this.error = true;
      } finally {
        this.load = false;
      }
    },
    print(e) {
      console.log(e);
    },
  },
  filters: Filtres,
};
</script>

<style>
.container-restaurant-detail {
  width: 100%;
  height: 100%;
  display: flex;
}

.container-restaurant {
  width: 100%;
  height: 100%;
}

.container-restaurant > header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35%;
  min-height: 150px;
  max-height: 200px;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  background: limegreen;
}

.container-restaurant > main {
  display: flex;
  width: 100%;
  height: 65%;
}

.data {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40%;
  height: 100%;
  padding: 10px 20px;
}

.data > *:not(:last-child) {
  margin-bottom: 10px;
}

.data p {
  font-size: 1em;
}

.data .lib {
  font-weight: bold;
  text-decoration: underline;
}

.container-map-restaurant {
  width: 60%;
  height: 100%;
}

.container-map-restaurant > .map-restaurant {
  box-shadow: 0px 0px 4px rgb(0 0 0 / 50%);
}
</style>