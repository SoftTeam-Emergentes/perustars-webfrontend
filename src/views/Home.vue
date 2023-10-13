<template>
  <div class="home">
    <side-bar></side-bar>
    <v-container class="my-0 mx-0 px-0 main-container" fluid>
      <!--TODO: Buscador        -->
      <v-card-title class="ml-10 px-0 text-h5 font-weight-medium">
        Artistas
      </v-card-title>
      <v-list-item-content class="d-flex flex-row mx-auto justify-space-around col-10">
        <artist-card :logged="logged" v-for="(artist,i) in artists" :key="i" :artist="artist"
                     class="mb-10"></artist-card>
      </v-list-item-content>
      <v-divider></v-divider>

      <v-card-title class="ml-10 px-0 text-h5 font-weight-medium">
        Obras de Arte
      </v-card-title>
      <v-list-item-content class="d-flex flex-row mx-auto justify-space-around col-10">
        <artwork-card :logged="logged" v-for="(artwork,i) in artworks" :key="i" :artwork="artwork"
                      class="mb-10"></artwork-card>
      </v-list-item-content>
      <v-divider></v-divider>

      <v-card-title class="ml-10 px-0 text-h5 font-weight-medium">
        Eventos
      </v-card-title>
      <v-list-item-content class="d-flex flex-row mx-auto justify-space-around col-10">
        <event-card :logged="logged" v-for="(event,i) in events" :key="i" :event="event" class="mb-10"></event-card>
      </v-list-item-content>
    </v-container>
  </div>
</template>

<script>

//Services
import ArtistApiService from '../services/artists-api.service'
import ArtworksApiService from '../services/artworks-api.service'
import EventsApiService from '../services/events-api.service'

//Components
import SideBar from '../components/side-bar'
import ArtistCard from '../components/artist-card'
import ArtworkCard from '../components/artwork-card'
import EventCard from '../components/event-card'

export default {
  name: 'Home',
  components: {
    SideBar,
    ArtistCard,
    ArtworkCard,
    EventCard

  },
  data: () => ({
    artists: [],
    artworks: [],
    events: [],
    cards: ['Today', 'Yesterday'],
    drawer: null,
    itemsArray: [1, 2, 3, 4, 5, 6],
    logged: true,
    roue: window.location.pathname
  }),
  methods: {
    printRoute() {
      console.log(this.roue);
    },
    retrieveArtists() {
      ArtistApiService.getAll()
          .then(response => {
            this.artists = response.data.slice(0, 6);
            // console.log(this.artists)
          }).catch(e => {
        console.log(e);
      })
    },
    retrieveArtworks() {
      ArtworksApiService.getAll(1)
          .then(response => {
            this.artworks.push(...response.data.slice(0, 3));
          }).catch(e => {
        console.log(e);
      });

      ArtworksApiService.getAll(2)
          .then(response => {
            this.artworks.push(...response.data.slice(0, 3));
            console.log(this.artworks)
          }).catch(e => {
        console.log(e);
      });
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
    }
  },
  created() {
    this.$emit('isLogged')
    this.retrieveArtworks();
    this.retrieveArtists();
    this.retrieveEvents();
  }
}
</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
}

</style>
