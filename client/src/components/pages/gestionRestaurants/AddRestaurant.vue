<template>
  <div class="templateAdd">
    <div class="divPhotoAdd">
      <div class="divFormulaireAdd">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nom du restaurant"
              required
            ></v-text-field>
            <v-text-field
              v-model="cuisine"
              label="Type de cuisine"
              :rules="cuisineRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="borough"
              label="Ville"
              :rules="boroughRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="street"
              label="Nom de la rue"
              :rules="streetRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="building"
              label="Numéro de l'adresse"
              :rules="buildingRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="zipcode"
              label="Code Postal"
              :rules="zipcodeRules"
              required
            ></v-text-field>

            <v-btn class="mr-4" @click="validate" :disabled="!valid">
              Envoyer
            </v-btn>
            <v-btn class="mr-4" @click="clear"> Effacer </v-btn>
          </v-container>
        </v-form>
      </div>
    </div>
    <ModelPopUp
      :erreurModel="erreurModel"
      :visible="modelPopUp"
      @close="modelPopUp = false"
    />
  </div>
</template>

<script>
import { post } from "../../../modules/api/API";
import ModelPopUp from "./ModelPopUP.vue";
import ErreurModel from "../../../modules/modeles/ErreurModel";

export default {
  name: "AddRestaurant",
  data: () => ({
    valid: false,
    name: "",
    cuisine: "",
    borough: "",
    street: "",
    building: "",
    zipcode: "",
    modelPopUp: false,
    msg: "",
    erreurModel: new ErreurModel(),
    nameRules: [
      (v) => !!v || "Le nom est manquant",
      (v) => v.length >= 3 || "Taille trop petite",
    ],
    zipcodeRules: [
      (v) => !!v || "Le code postale est manquant",
      (v) => !isNaN(Number(v)) || "N'est pas compatible",
    ],
    cuisineRules: [
      (v) => !!v || "Le nom de la cuisine est manquante",
      (v) => v.length >= 3 || "Taille trop petite",
    ],
    boroughRules: [
      (v) => !!v || "Le nom de la ville est manquante",
      (v) => v.length >= 3 || "Taille trop petite",
    ],
    streetRules: [
      (v) => !!v || "Le nom de la rue est manquante",
      (v) => v.length >= 3 || "Taille trop petite",
    ],
    buildingRules: [
      (v) => !!v || "Le numéro est manquant",
      (v) => !isNaN(Number(v)) || "N'est pas compatible",
    ],
  }),
  components: {
    ModelPopUp,
  },
  methods: {
    clear() {
      this.name = "";
      this.cuisine = "";
      this.borough = "";
      this.street = "";
      this.building = "";
      this.zipcode = "";
    },
    async validate() {
      if (this.$refs.form.validate()) {
        let rep;
        try {
          rep = await post("restaurants", {
            nom: this.name,
            cuisine: this.cuisine,
            borough: this.borough,
            address: JSON.stringify({
              street: this.street,
              building: this.building,
              zipcode: this.zipcode,
            }),
          });
          this.erreurModel = new ErreurModel("Sucées", rep.msg);
        } catch (e) {
          this.erreurModel = new ErreurModel(
            "Erreur !",
            "Une erreur c est produite"
          );
        } finally {
          this.clear();
          this.modelPopUp = true;
        }
      }
    },
  },
};
</script>

<style>

.templateAdd {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.divPhotoAdd {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 80%;
  background-image: url(../../../assets/restaurantAdd.jpg);
  margin: 20px 0;
}

.divFormulaireAdd {
  width: 80%;
  height: 80%;
  background: rgba(255, 255, 255, 65%);
}

.v-dialog__container {
  display: block;
}
.v-btn:not(.v-btn--outlined).accent,
.v-btn:not(.v-btn--outlined).error,
.v-btn:not(.v-btn--outlined).info,
.v-btn:not(.v-btn--outlined).primary,
.v-btn:not(.v-btn--outlined).secondary,
.v-btn:not(.v-btn--outlined).success,
.v-btn:not(.v-btn--outlined).warning {
  color: black;
}
</style>