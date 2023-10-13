<template>
  <div>
    <v-carousel :show-arrows="true" cycle height="400">
      <v-carousel-item
          v-for="(item,i) in imagesSlider"
          :key="i"
          :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-card elevation="0" class="mx-sm-5 mt-15 d-flex flex-column align-center align-sm-start">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>
          Obras Destacadas
        </v-card-title>
        <v-list-item-content
            class="d-flex flex-column flex-sm-row justify-space-between justify-sm-space-around justify-md-start justify-lg-space-between">
          <artwork-card v-for="(artwork,i) in artworks" :key="i" :artwork="artwork"
                        class="mb-10 mr-sm-1 mr-lg-0"></artwork-card>
        </v-list-item-content>
      </v-card>
      <v-divider></v-divider>

      <v-card elevation="0" class="mx-sm-5 mt-15 d-flex flex-column align-center align-sm-start">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>
          Nuevos Artistas
        </v-card-title>
        <v-list-item-content
            class="d-flex flex-column flex-sm-row justify-space-between justify-sm-space-around justify-md-start justify-lg-space-between">
          <artist-card v-for="(artist,i) in artists" :key="i" :artist="artist"
                       class="mb-10 mr-sm-1 mr-lg-0"></artist-card>
        </v-list-item-content>
      </v-card>
      <v-divider></v-divider>

      <v-card elevation="0" class="mx-sm-5 mt-15 d-flex flex-column align-center align-sm-start">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>
          Próximos eventos
        </v-card-title>
        <v-list-item-content
            class="d-flex flex-column flex-sm-row justify-space-between justify-sm-space-around justify-md-start justify-lg-space-between">
          <event-card v-for="(event,i) in events" :key="i" :event="event" class="mb-10 mr-sm-1 mr-lg-0"></event-card>
        </v-list-item-content>
      </v-card>

    </v-container>
  </div>
</template>

<script>
//Services
import ArtistApiService from '../services/artists-api.service'
import ArtworksApiService from '../services/artworks-api.service'
import EventsApiService from '../services/events-api.service'

//Components
import ArtworkCard from "./artwork-card";
import EventCard from "./event-card"
import ArtistCard from "./artist-card"

export default {
  name: "home-preview",
  components: {
    ArtworkCard,
    EventCard,
    ArtistCard
  },
  data() {
    return {
      artists: [],
      displayArtists: [],
      artworks: [],
      events: [],
      imagesSlider: [
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
          src: 'https://picsum.photos/id/1050/6000/4000.jpg',
        },
      ],
    }
  },
  created() {
    this.retrieveArtworks();
    this.retrieveArtists();
    this.retrieveEvents();
  },
  methods: {
    getDisplayArtists(artist) {
      return {
        id: 2,
        brandName: artist.brandName,
        description: artist.description,
        phrase: artist.phrase,
        specialtyId: artist.specialtyId,
        firstname: artist.firstname,
        lastname: artist.lastname
      }
    },
    retrieveArtists() {
      ArtistApiService.getAll()
          .then(response => {
            this.artists = response.data.slice(0, 8);
            this.displayArtists = response.data.map(this.getDisplayArtists);
            // console.log(this.artists)
          }).catch(e => {
        console.log(e);
      })
    },
    retrieveArtworks() {
      ArtworksApiService.getAll(1)
          .then(response => {
            //this.artworks = response.data.slice(0, 8);
            this.artworks.push(...response.data.slice(0, 3));
          }).catch(e => { console.log(e); });
      ArtworksApiService.getAll(2)
          .then(response => {
            this.artworks.push(...response.data.slice(0, 3));
          }).catch(e => {
            console.log(e);});
      ArtworksApiService.getAll(3)
          .then(response => {
            this.artworks.push(...response.data.slice(0, 2));
          }).catch(e => {
        console.log(e);});
    },
    retrieveEvents() {
      EventsApiService.getAllByArtistId(1)
          .then(response => {
            this.events.push(...response.data.slice(0, 3));
          }).catch(e => {
        console.log(e);
      });
      EventsApiService.getAllByArtistId(2)
          .then(response => {
            this.events.push(...response.data.slice(0, 3));
            console.log(this.events)
          }).catch(e => {
        console.log(e);
      });
      EventsApiService.getAllByArtistId(3)
          .then(response => {
            this.events.push(...response.data.slice(0, 2));
            console.log(this.events)
          }).catch(e => {
        console.log(e);
      });

    }
  }
}
</script>

<style scoped>

</style>