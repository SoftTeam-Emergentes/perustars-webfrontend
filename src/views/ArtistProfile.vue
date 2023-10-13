<template>
  <div>
    <section>
      <div class="shape">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M-5.92,83.38 C-5.92,84.38 509.31,143.58 509.87,144.56 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: #fff;"></path>
        </svg>
      </div>
      <v-card class="d-flex flex-md-row mx-10 mt-10 top-content" color="transparent" elevation="0">
        <div class="flex-column ml-10 mr-5 image-profile">
          <v-card-title class="name-artist d-block text-center white--text text-h5 font-weight-bold">{{artist.brandName}}</v-card-title>
          <v-img
              src="https://picsum.photos/id/1011/800"
              alt="artist image"
              width="200" height="200"
              class="rounded-circle"
          >
          </v-img>
        </div>
        <div class="profile-data d-flex flex-row justify-space-around mr-10">
          <div class="flex-column profile-contact">
            <p><v-icon color="white">mdi-account-group</v-icon>
              {{ numFollowers }} seguidores</p>
            <p>Correo/num contacto</p>
          </div>
          <div class="flex-row justify-space-around px-12">
            <v-btn href="https://es-la.facebook.com/" target="_blank" color="transparent" elevation="0" fab>
              <v-icon class="text-h4" color="white">mdi-facebook</v-icon>
            </v-btn>
            <v-btn href="https://www.instagram.com/" target="_blank" color="transparent" elevation="0" fab>
              <v-icon class="text-h4" color="white">mdi-instagram</v-icon>
            </v-btn>
            <v-btn href="https://twitter.com/" target="_blank" color="transparent" elevation="0" fab>
              <v-icon class="text-h4" color="white">mdi-twitter</v-icon>
            </v-btn>
          </div>
          <div>
            <p class="text-center">"{{
                artist.phrase
              }}"</p>
          </div>
        </div>
      </v-card>
      <div class="float-right">
        <v-btn v-if="!isFollowed" class="mr-20 btn-color text-uppercase text-body-1 font-weight-bold" @click="followArtist">Seguir</v-btn>
        <v-btn v-else class="mr-20 btn-uncolor text-uppercase text-body-2 font-weight-bold" @click="unfollowArtist">Dejar de seguir</v-btn>
      </div>
    </section>

    <section>
<!--      <v-card elevation="0" class=" ml-4 ml-md-15 mb-16">-->
      <v-card elevation="0" class="ml-2 ml-sm-8 mb-7" width="600">
        <v-card-title class="text-h5 font-weight-medium">¿Quién soy?</v-card-title>
        <p class="description-p col-12 text-body-2 text-sm-body-1">
          {{ artist.description }}
        </p>
      </v-card>
    </section>

    <section class="artworks-section">
      <v-card class="mx-1 mx-md-6 mt-5 mb-13" elevation="0" color="transparent">
        <v-card-title class="white--text text-h5 font-weight-bold">Mis obras de arte</v-card-title>
        <v-card-title v-if="pageSize===0" class="white--text text-body-1 justify-center">El artista aún no cuenta con obras publicadas.</v-card-title>
        <div v-else class="d-flex flex-row align-center">
          <v-btn :disabled="page===0" elevation="0" height="auto" width="100px" color="transparent" v-on:click="previousPage"
                 class="rounded-circle">
            <v-icon class="text-h1 white--text">mdi-chevron-left</v-icon>
          </v-btn>
          <v-list-item-content class="d-flex flex-column flex-md-row justify-space-between px-0 px-md-10">
            <artwork-card v-for="(artwork, i) in showingArtworks" :key="i" :artwork="artwork" :logged="true"></artwork-card>
          </v-list-item-content>
          <v-btn :disabled="(page+3)===pageSize" elevation="0" height="auto" width="100px" color="transparent" v-on:click="nextPage"
                 class="rounded-circle">
            <v-icon class="text-h1 white--text rounded-circle">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <template>
          <div class="text-center d-none">
            <v-pagination
                v-model="page"
                circle
            ></v-pagination>
          </div>
        </template>
      </v-card>
    </section>

    <section>
      <v-card class="mx-0 mx-sm-9 mx-md-10 mt-5 mb-15" elevation="0" color="transparent" >
        <v-card-title class="text-h5 font-weight-medium">Futuros eventos</v-card-title>
        <v-card-title v-if="events.length===0" class="darken-2 text-body-1 justify-center">El artista aún no cuenta con eventos.</v-card-title>
        <v-carousel
            v-else
            max-height="410"
            hide-delimiter-background
            show-arrows-on-hover
            light
        >
          <v-carousel-item v-for="(event, i) in events" :key="i">
            <v-sheet height="100%" class="d-flex justify-center align-center">
              <artist-event-card :event="event"></artist-event-card>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </section>
  </div>
</template>

<script>
// Services
import ArtistApiService from '../services/artists-api.service'
import ArtworksApiService from '../services/artworks-api.service'
import EventsApiService from '../services/events-api.service'
import FollowersApiService from '../services/followers-api.service'

// Components
import ArtworkCard from "../components/artwork-card";
import ArtistEventCard from "../components/artist-event-card";
import FollowsApiService from '../services/follows-api.service'

export default {
  name: "ArtistProfile",
  components: {
    ArtworkCard,
    ArtistEventCard
  },
  data() {
    return {
      artistId: this.$route.params.artistId,
      artist: Object,
      artworks: [],
      showingArtworks: [],
      events: [],
      page: 0,
      pageSize: 0,
      numFollowers: 0,
      isFollowed: false,
      userId: JSON.parse(localStorage.getItem('person')).id,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  methods: {
    previousPage() {
      if (this.page > 0){
        this.page--;
        this.retrieveArtworks(this.page);
      }
    },
    nextPage() {
      if ((this.page + 3) < this.pageSize){
        this.page++;
        this.retrieveArtworks(this.page);
      }
    },
    retrieveArtist(){
      ArtistApiService.get(this.artistId)
          .then(response => {
            this.artist = response.data;
            console.log(this.artist)
          }).catch(e => { console.log(e); });
    },
    retrieveArtworks(num){
      ArtworksApiService.getAll(this.artistId)
          .then(response => {
            this.artworks = response.data;
            this.pageSize = this.artworks.length;
            this.showingArtworks = this.artworks.slice(num,num+3);
          }).catch(e => { console.log(e); })
    },
    retrieveEvents(){
      EventsApiService.getAllByArtistId(this.artistId)
          .then(response => {
            this.events = response.data;
            console.log(this.events)
          }).catch(e => { console.log(e); })
    },
    countFollowers(){
      FollowersApiService.count(this.artistId)
      .then(response => {
        this.numFollowers = response.data;
      }).catch(e => { console.log(e); })
    },
    isFollowing(){
      FollowsApiService.getAll(this.userId)
      .then(response => {
        response.data.forEach(artist => {
        console.log(artist);
          if (artist.id === parseInt(this.artistId))
            this.isFollowed = true;
        });
      }).catch(e => { console.log(e); })
    },
    followArtist(){
      FollowersApiService.assign(this.artistId, this.userId).
          then(response => {
            console.log(response.data);
            this.isFollowed = true;
          }).catch(e => { console.log(e); })
    },
    unfollowArtist(){
      FollowersApiService.unAssign(this.artistId, this.userId).
      then(response => {
        console.log(response.data);
        this.isFollowed = false;
      }).catch(e => { console.log(e); })
    }
  },
  created() {
    this.retrieveArtist();
    this.countFollowers();
    this.isFollowing();
    this.retrieveArtworks(this.page);
    this.retrieveEvents();
  }
}
</script>

<style scoped>
.shape {
  height: 60vh;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(203, 144, 40, 1) 0%, rgba(255, 0, 0, 1) 100%);
  stroke: none;
  position: relative;
  top: 0;
}
.name-artist{
  width: 250px;
  margin-left: -25px;
}
.top-content {
  top: 0;
  position: absolute;
}
.mr-20 {
  margin-right: 150px;
  margin-top: -130px;
}

.profile-data > div {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.btn-color {
  color: white;
  width: 110px;
  min-height: 30px;
  background: radial-gradient(circle, rgba(203, 144, 40, 1) 0%, rgba(221, 0, 0, 1) 100%);
}
.btn-uncolor {
  width: 140px;
  min-height: 30px;
}
.image-profile {
  width: 20%;
}

.profile-contact {
  margin-right: 10px;;
}

.artworks-section {
  background: linear-gradient(90deg, rgba(236, 187, 61, 1) 0%, rgba(223, 0, 0, 1) 100%);
  padding: 1px 0;
}

</style>