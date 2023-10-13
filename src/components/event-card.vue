<template>
  <v-card class="event-card d-flex flex-column justify-space-between" max-width="270" height="380" elevation="3">
    <v-img
        :src="getImage"
        alt="Photo"
        max-height="200"
    ></v-img>
    <div class="mx-3 my-2">
      <v-card-title class="text-body-1 px-0 font-weight-bold pb-2">{{ event.eventTitle }}</v-card-title>
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-calendar</v-icon>
        {{ parseToDate(event.dateStart) }} - {{ parseToDate(event.dateEnd) }}
      </v-btn>
    </div>
    <v-card-actions class="d-flex justify-space-between mx-2 text-action-btn" >
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-currency-usd</v-icon>500
      </v-btn>
      <login-dialog v-if="!logged" text="Ver más"></login-dialog>
      <v-btn v-else color="error" :to="goToEvent">Ver más</v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
import LoginDialog from '../components/login-dialog'
export default {
  name: "event-card",
  props:[
    'logged',
    'event'
  ],
  computed:{
    goToEvent(){ return `artist/${this.event.artistId}/event/${this.event.eventId}`; },
    getImage(){
      return `https://picsum.photos/id/${this.getRandomNumber(1050,1060)}/3900/3120`;
    }
  },
  components:{
    LoginDialog
  },
  methods:{
    parseToDate(date){
      let actualMonth = new Date(date);
      actualMonth.setMonth(actualMonth.getMonth()+1);
      return `${new Date(date).getDate()}/${actualMonth.getUTCMonth()}/${new Date(date).getFullYear()}`;
    },
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