<template>
  <v-navigation-drawer v-model="drawer" app>
    <br>
    <div class="text-subtitle-1">Tus artistas</div>
    <v-virtual-scroll
        :items="artistsFollowed"
        :item-height="50"
        height="190"
    >
      <template v-slot="{ item }">
        <v-list-item link :to="goToArtist(item.id)">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ item.firstname }} {{item.lastname}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <br>
    <v-divider></v-divider>
    <br>
    <div class="text-subtitle-1">Tus eventos</div>
    <v-virtual-scroll
        :items="eventsCalendar"
        :item-height="50"
        height="190"
    >
      <template v-slot="{ item }">
        <v-list-item link @click="goToEventId(item)">
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ item.eventTitle }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>


  </v-navigation-drawer>
</template>

<script>
// Services
import FollowsApiService from '../services/follows-api.service'
import AssistancesApiService from '../services/event-assistances-api.service'

export default {
  name: "side-bar",
  data: () => ({
    artistsFollowed: [],
    eventsCalendar: [],
    userId: JSON.parse(localStorage.getItem('person')).id
  }),
  created() {
    this.retrieveFollowedArtists();
    this.retrieveEvents();
  },
  methods:{
    retrieveFollowedArtists(){
      FollowsApiService.getAll(this.userId)
      .then(response => {
        this.artistsFollowed = response.data;
      }).catch(e => { console.log(e); })
    },
    goToArtist(num){ return `/artist/${num}`; },
    retrieveEvents(){
      AssistancesApiService.getAll(this.userId).
          then(response => {
            this.eventsCalendar = response.data;
            console.log(this.eventsCalendar);
      }).catch(e => { console.log(e); })
    },
    goToEventId(item) {
      this.$router.push(`/artist/${item.artistId}/event/${item.eventId}`);
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer{
  margin-top: 70px;
}
.text-subtitle-1{
  margin-left: 20px;
}

</style>