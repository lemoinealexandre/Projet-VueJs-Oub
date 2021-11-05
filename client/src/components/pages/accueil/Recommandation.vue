<template>
  <div class="container-recommandation" @click="goToDetails()">
    <div class="container-img"  >
      <img :src="image"/>
    </div>
    <div class="container-details">
      <span>{{ restaurant.name }}</span>
      <span>{{ restaurant.cuisine }}</span>
    </div>
  </div>
</template>

<script>
import Restaurant from "../../../modules/modeles/Restaurant";
export default {
  name: "Recommandation",

  data: () => ({}),
  methods: {
    goToDetails() {
      if (this.restaurant) {
        this.$router.push({ path: `/restaurant/${this.restaurant.id}` });
      }
    },
  },
  props: {
    restaurant: Restaurant,
    id: {
      type: Number,
      default: 0,
    },
  },
  
  computed: {
    image() {
      return "https://picsum.photos/200/300/?random&t=" + this.id;
    },
  },
};
</script>

<style>
.container-recommandation {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100vw;
  min-width: 200px;
  max-width: 300px;
  height: 100vh;
  min-height: 350px;
  max-height: 400px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  z-index: 0;
}

.container-recommandation > .container-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.container-recommandation > .container-img > img {
  width: 100%;
}

.container-recommandation > .container-details {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: max-content;
  z-index: 2;
  background: rgba(87, 87, 87, 0.8);
  padding: 10px 0;
  color: #fff;
}

.container-recommandation > .container-details > span {
}
</style>