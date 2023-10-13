<template>
  <v-card class="artist-card d-flex flex-column" max-width="270" max-height="270" elevation="3">
    <v-card-title class="dark--text flex flex-row align-center">
      <v-avatar size="50">
        <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg">
      </v-avatar>
      <div class="card-name ml-2">
        <h2 class="text-subtitle-1">{{artist.firstname}} {{artist.lastname}}</h2>
        <h3 class="text-subtitle-2">{{ artist.brandName }}</h3>
      </div>
    </v-card-title>

    <div class="my-2 text-center" v-if="!logged">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-brush</v-icon>
        {{ assignSpecialty() }}
      </v-btn>
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-format-paint</v-icon>
        {{getRandomNumber(50)}}
      </v-btn>
    </div>
    <p class="text-caption text-justify mx-5" v-if="!logged">
      "{{
        artist.phrase
      }}"
    </p>
    <v-card-actions class="d-flex justify-space-between mx-2 text-action-btn">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-account-group</v-icon>
        {{getRandomNumber(500)}}
      </v-btn>
      <login-dialog v-if="!logged" text="CONOCER"></login-dialog>
      <v-btn v-else color="error" class="text-uppercase" :to="goToArtist">Conocer</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SpecialtiesApiService from '../services/specialties-api.service'
import LoginDialog from '../components/login-dialog'

export default {
  name: "artist-card",
  components: {
    LoginDialog
  },
  props: [
    'logged',
    'artist'
  ],
  data(){
    return{
      specialties: []
    }
  },
  computed: {
    goToArtist(){ return `/artist/${this.artist.id}`; }
  },
  created() {
    this.retrieveSpecialties()
  },
  methods: {
    getRandomNumber(num){
      return Math.floor(Math.random() * num);
    },
    retrieveSpecialties(){
      SpecialtiesApiService.getAll()
          .then(response => {
            this.specialties = response.data;
          }).catch(e => { console.log(e); })
    },
    assignSpecialty(){
      for (let specialty of this.specialties){
        if (this.artist.specialtyId === specialty.id)
          return specialty.name;
      }
    }
  }
}
</script>

<style scoped>
.text-action-btn * {
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 500;
}
.text-caption{
  height: 60px;
}
</style>