<template>
  <l-map
    class="custom-map"
    :zoom="zoom"
    :center="center"
    :bounds="bounds"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @update:bounds="boundsUpdated"
  >
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="(restaurant, index) in restaurants"
      v-bind:key="index"
      :lat-lng="getCoord(restaurant)"
      @click="goToDetails(restaurant)"
    >
      <l-icon iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/752px-Map_pin_icon_green.svg.png" ></l-icon>
      <l-tooltip> {{ restaurant.name | titlecase }} </l-tooltip>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import Filtres from "../../modules/Filtres";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LIcon,
  },
  props: {
    center: {
      type: Array,
      default: () => [0, 0],
    },
    zoom: {
      type: Number,
      default: 12,
    },
    restaurants: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      centerData: this.center,
      zoomData: this.zoom,
      bounds: null,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoomData = zoom;
      this.$emit('update', {zoom, center: this.centerData});
    },
    centerUpdated(center) {
      this.centerData = center;
      this.$emit('update', {zoom: this.zoomData, center});
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    getCoord(restau) {
      const { coord } = restau.adresse;
      return [coord[1] ?? 0, coord[0] ?? 0];
    },
     goToDetails(restaurant) {
      if (restaurant) {
        this.$router.push({ path: `/restaurant/${restaurant.id}` });
      }
    },
  },
  filters: Filtres,
};
</script>

<style>
.custom-map {
  width: 100%;
  min-width: 200px;
  height: 100%;
  min-height: 350px;
}
</style>