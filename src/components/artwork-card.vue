<template>
  <v-card class="artwork-card d-flex flex-column justify-space-between" max-width="270" elevation="3" height="445">
    <v-img
        :src="getImage"
        alt="Photo"
        max-height="200"
    ></v-img>
    <div class="mx-3">
      <v-card-title class="text-body-1 px-0 font-weight-bold pb-2">{{ artwork.artTitle }}</v-card-title>
      <p class="text-caption text-justify" style="height: 100px">
        {{
          artwork.artDescription
        }}
      </p>
    </div>
    <v-card-actions class="d-flex justify-space-between mx-2 text-action-btn">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-currency-usd</v-icon>
        {{ artworkPrice }}
      </v-btn>
      <login-dialog v-if="!logged" text="Ver más"></login-dialog>
      <v-btn v-else color="error" :to="goToArtwork">Ver más</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoginDialog from '../components/login-dialog'
export default {
  name: "artwork-card",
  props:[
    'logged',
    'artwork'
  ],
  computed:{
    goToArtwork(){ return `/artist/${this.artwork.artistId}/artwork/${this.artwork.artworkId}`; },
    artworkPrice(){return this.artwork.artCost===0?'Gratis': this.artwork.artCost; },
    getImage(){
      return `https://picsum.photos/id/${this.getRandomNumber(1000,1060)}/3900/3120`;
    }
    // static image src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  },
  components:{
    LoginDialog
  },
  methods: {
    getRandomNumber(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
}
</script>

<style scoped>

/*.text-action-btn * {*/
/*  text-transform: none;*/
/*  letter-spacing: 0.02em;*/
/*  font-weight: 500;*/
/*  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);*/
/*}*/
</style>