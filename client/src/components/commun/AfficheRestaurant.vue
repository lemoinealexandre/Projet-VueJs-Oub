<template>
  <div class="affichage-restaurant">
    <div class="container-aff-restau" @click="goToDetails()">
      <div class="container-image" v-bind:style="image"></div>
      <div class="container-infos">
        <div class="header">{{ restaurant.name }}</div>
        <div class="part-1">
          <p><span class="label">Cuisine : </span> {{ restaurant.cuisine }}</p>
          <p><span class="label">Arrondissement : </span> {{ restaurant.arrondissement }}</p>
        </div>
        <div class="part-2">
          <div class="grade">{{ grade }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Restaurant from "../../modules/modeles/Restaurant";

export default {
  name: "AfficheRestaurant",
  props: {
    id: {
      type: Number,
      default: 0,
    },
    restaurant: {
      type: Restaurant,
      required: true,
    },
  },
  computed: {
    grade() {
      const { grades } = this.restaurant;
      if (grades.length < 1) return '...';
      const moyen = grades.reduce((gradeA, gradeB) => gradeA.score ?? 0 + gradeB.score ?? 0)/grades.length;
      return Number(moyen).toFixed(2);
    },
    image() {
      return { backgroundImage: "url(https://picsum.photos/200/300/?random&t=" + this.id +")" };
    }
  },
  methods: {
    goToDetails() {
      if (this.restaurant) {
        this.$router.push({ path: `/restaurant/${this.restaurant.id}` });
      }
    },
  },
};
</script>

<style>
.affichage-restaurant {
  width: calc(25% - 20px);
  height: 35%;
  min-width: 200px;
  min-height: 225px;
  max-width: 250px;
  max-height: 275px;
  padding: 0 10px 20px 10px;
}

.container-aff-restau {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 50%);
  z-index: 0;
  cursor: pointer;
}

.container-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(92, 92, 92);
  background-position: top;
  background-size: cover;
}

.container-infos {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: translateY(70%);
  transform-origin: bottom;
  z-index: 2;
  background-color: #fff;
  color: #000;

  transition: background-color 0.2s ease, color 0.2s ease, transform 0.4s ease;
}

.container-infos > .header {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 100%;
  height: 30%;
  padding: 7px 0;
  font-size: 1em;
  font-weight: bold;
}

.container-infos > .part-1 {
  display: flex;
  flex-direction: column;
  height: 20%;
}

.container-infos > .part-1 > p {
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
  text-align: left;
}

.container-infos > .part-1 > p > .label {
  font-weight: bold;
}

.container-infos > .part-2 {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 50%;
  padding-bottom: 15px;
}

.container-aff-restau:hover .container-infos {
  background-color: rgba(0, 0, 0, 0.75);
  transform: translateY(0%);
  color: #fff;
}

.grade {
  width: 4em;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: limegreen;
  font-size: 1.5em;
  font-weight: bold;
}
</style>