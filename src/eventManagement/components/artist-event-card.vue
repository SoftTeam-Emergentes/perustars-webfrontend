<template>
  <v-card class="d-flex flex-column justify-center align-center flex-md-row justify-md-center" max-width="1000" elevation="3">
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        alt="Photo"
        max-width="500"
    ></v-img>
    <div class="d-flex flex-column align-center align-md-start justify-space-between py-5 ml-2 pr-3">
      <div>
        <v-card-title class="text-body-1 font-weight-bold">{{ event.eventTitle }}</v-card-title>
        <v-btn elevation="0" color="white">
          <v-icon>mdi-calendar</v-icon>
          {{ parseToDate(event.dateStart) }} - {{ parseToDate(event.dateEnd) }}
        </v-btn>
        <p class="pl-3 col-10 col-md-12">
          {{
            event.eventDescription
          }}
        </p>

      </div>
      <v-card-actions class="d-flex">
        <v-btn class="btn-color text-capitalize text-body-1 font-weight-bold mr-5" :to="goToEvent">Ver más</v-btn>
        <v-btn
            v-if="!isArtist"
            class="ma-2"
            small
            fab
            :color="colorScheduled"
            @click="isScheduled=!isScheduled"
        >
          <v-icon>{{ iconScheduled }}</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>

</template>

<script>

export default {
  name: "artist-event-card",
  components: {},
  data(){
    return{
      isScheduled: false,
      isArtist: JSON.parse(localStorage.getItem('person')).brandName,
    }
  },
  created() {
    this.retrieveArtist();
  },
  props: [
      'event'
  ],
  computed:{
    goToEvent(){ return `/artist/${this.event.artistId}/event/${this.event.eventId}`; },
    colorScheduled(){ return this.isScheduled? 'dark': 'error'; },
    iconScheduled(){ return this.isScheduled? 'mdi-minus-circle' : 'mdi-book-plus'; }
  },
  methods:{
    parseToDate(date){
      return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`
    }
  }
}
</script>

<style scoped>
.btn-color {
  color: white;
  width: 110px;
  min-height: 30px;
  background: radial-gradient(circle, rgba(203, 144, 40, 1) 0%, rgba(221, 0, 0, 1) 100%);
}
</style>