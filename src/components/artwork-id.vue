<template>
  <div>
    <!--CARRUSEL-->
    <v-carousel :show-arrows="true" cycle height="400" class="carousel">
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      >
        <v-row class="fill-height" align="center" justify="center">
          <h1 class="title white--text">{{ artwork.artTitle }}</h1>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <br>
    <!--CONTENIDO-->
    <div class="info-container  d-flex flex-column flex-sm-row mx-auto  align-center">

      <div class="left-content d-flex flex-column">
        <h2 class="Description text-center text-sm-start">Descripción</h2>
        <br>
        <p class="mx-auto mx-sm-0">
          {{
            artwork.artDescription
          }}
          <br>
        </p>
      </div>

      <div class="right-content">
        <h2 class="aditional-info">Datos adicionales</h2>
        <br>
        <p>
          <v-icon color="red">mdi-cash-multiple</v-icon>
          {{ artworkPrice }}
        </p>
        <v-btn>
          <v-icon color="red">mdi-share-variant</v-icon>
          Compartir
        </v-btn>
        <v-btn v-if="isFavorite && !isArtist"
            class="mx-4"
            fab
            small
            color="white"
            @click="unAssignFavorite()"
        >
          <v-icon color="error">
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn v-if="!isFavorite && !isArtist"
            class="mx-4"
            fab
            small
            color="white"
            @click="assignFavorite()"
        >
          <v-icon color="dark">
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn
            fab
            small
            class="mt-3"
            color="error"
            @click="dialog = !dialog"
        >
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </div>
      <br>
    </div>

    <div class="go-back my-10">
      <v-btn class="btn-back" depressed text-to="/" @click="$router.go(-1)">
        <v-icon class="text-toolbar-btn mr-2">mdi-arrow-left-circle</v-icon> Regresar
      </v-btn>
    </div>

    <v-dialog
        v-model="dialog"
        max-width="500px"
    >
      <v-card>
        <v-card-text>
          <v-card-title class="body-1">Más información</v-card-title>
          <v-icon>mdi-link-variant</v-icon>
          <a :href="`${this.artwork.linkInfo}`" target="_blank">{{artwork.linkInfo}}</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              text
              color="error"
              @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import ArtworksApiService from '../services/artworks-api.service'
import FavoriteArtworksApiService from '../services/favorite-artworks-api.service'
export default {
  name: "artwork-id",
  data() {
    return {
      dialog: false,
      artistId : this.$route.params.artistId,
      artworkId : this.$route.params.artworkId,
      isArtist: JSON.parse(localStorage.getItem('person')).brandName,
      artwork : Object,
      userId: JSON.parse(localStorage.getItem('person')).id,
      items: [
        {
          src: require('../assets/img/principal-img.jpg'),
        },
        {
          src: 'https://picsum.photos/id/1049/3900/3120.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
        {
          src: 'https://picsum.photos/3900/3120',
        },
      ],
      isFavorite: false
    }
  },
  created() {
    this.retrieveArtwork();
    this.isFavoriteArtwork();
  },
  computed:{
    artworkPrice(){
      return this.artwork.artCost === 0? 'Gratis': `S/. ${this.artwork.artCost}`;
    }
  },
  methods:{
    retrieveArtwork(){
      ArtworksApiService.get(this.artistId, this.artworkId)
      .then(response => {
        this.artwork = response.data;
        console.log(this.artwork)
      }).catch(e => { console.log(e); })
    },
    isFavoriteArtwork(){
      FavoriteArtworksApiService.getAll(this.userId)
          .then(response => {
            response.data.forEach(artwork => {
              console.log(artwork);
              if (artwork.artworkId === parseInt(this.artworkId))
                this.isFavorite = true;
            });
          }).catch(e => { console.log(e); })
    },
    assignFavorite(){
      FavoriteArtworksApiService.assign(this.userId, this.artworkId)
      .then(response => {
        console.log(response.data);
        this.isFavorite = true;
      }).catch(e => { console.log(e); })
    },
    unAssignFavorite(){
      FavoriteArtworksApiService.unAssign(this.userId, this.artworkId)
          .then(response => {
            console.log(response.data);
            this.isFavorite = false;
          }).catch(e => { console.log(e); })
    }
  }
}

</script>

<style scoped>
.info-container {
  width: 80%;
}

.left-content {
  width: 80%;
}
.red-hearth{
  color: red;
}
.dark-hearth{
  color: black;
}
.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}

.go-back {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  width: 70%;
  text-align: justify;
}
</style>