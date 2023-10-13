<template>
  <div class="container">
    <v-card-title class="ml-10 px-0 text-h5 font-weight-medium mt-4">
      Mis Obras Favoritas
    </v-card-title>
    <v-list-item-content class="d-flex flex-row mx-auto justify-space-around col-10">
      <artwork-card :logged="logged" v-for="(artwork,i) in favoriteArtworks" :key="i" :artwork="artwork" class="mb-10"></artwork-card>
    </v-list-item-content>
  </div>
</template>

<script>
// Services
import FavoriteArtworksApiService from '../services/favorite-artworks-api.service'
// Components
import ArtworkCard from '../components/artwork-card'
export default {
  name: "HobbyistFavoriteArtworks",
  components:{
    ArtworkCard
  },
  data(){
    return {
      logged: true,
      favoriteArtworks: [],
      userId: JSON.parse(localStorage.getItem('person')).id
    }
  },
  created() {
    this.retrieveFavoriteArtworks();
  },
  methods:{
    retrieveFavoriteArtworks(){
      FavoriteArtworksApiService.getAll(this.userId)
      .then(response => {
        this.favoriteArtworks = response.data
      }).catch(e => { console.log(e); })
    }
  }
}
</script>

<style scoped>

</style>