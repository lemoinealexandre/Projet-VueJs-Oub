<template>
  <div>
    <div class="container-find-restaurants" v-if="!load">
      <Map
        :center="[location.coords.latitude, location.coords.longitude]"
        :zoom="1000000000"
        :restaurants="restaurants"
      ></Map>
    </div>
    <div class="container-map-restaurant" v-else-if="load">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import {
  getRestaurants,
} from "../../../modules/api/RestaurantsAPI";
import ObjIsNull from "../../../modules/ObjIsNull";
import Map from "../../commun/Map.vue";

export default {
  name: "FindRestaurants",
  components: {
    Map,
  },
  data: () => ({
    load: true,
    restaurants: [],
    location: null,
    gettingLocation: false,
    errorStr: null,
  }),
  async mounted() {
    try {
      this.load = true;
      const res = await getRestaurants({ page: 0, pagesize: 1000 });
      this.restaurants = res.restaurants.filter((restau) => {
        return (
          !ObjIsNull(restau) &&
          !ObjIsNull(restau.adresse) &&
          !ObjIsNull(restau.adresse.coord) &&
          !ObjIsNull(restau.adresse.coord[0]) &&
          !ObjIsNull(restau.adresse.coord[1])
        );
      });
    } catch (e) {
      console.log(e);
      this.restaurants = [];
    } finally {
      this.load = false;
    }
  },
  created() {
    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
};
</script>

<style>
.data-adresse {
  width: 40%;
  height: 100%;
}

.container-map-restaurant {
  height: 100%;
}
.v-progress-circular {
  margin: 1rem;
}
.custom-map {
  min-height: 43vw;
}
</style>