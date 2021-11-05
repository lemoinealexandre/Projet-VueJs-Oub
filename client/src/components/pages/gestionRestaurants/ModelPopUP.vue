<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ erreurModel.title }}
      </v-card-title>
      <v-card-text>
        {{ erreurModel.messageErreur }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="show = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ErreurModel from "../../../modules/modeles/ErreurModel";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    erreurModel: {
      type: ErreurModel,
      required: true,
    },
  },
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        console.log(this.erreurModel.messageErreur);
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>