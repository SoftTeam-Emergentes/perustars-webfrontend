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
          <h1 class="title white--text">{{ event.eventTitle }}</h1>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <br>

    <!--Boton de asistencia-->
    <div class="asist" v-if="!isArtist">
      <v-btn v-if="!isScheduled" class="text-toolbar-btn mr-4 white--text btn-color" @click="scheduledEvent" :to="gotoAssistance">
        <v-icon class="mr-2">mdi-book-plus</v-icon>Agendar
      </v-btn>
      <v-btn  v-else class="" raised @click="unScheduleEvent" >
        <v-icon class="mr-2">mdi-minus-circle</v-icon>Quitar
      </v-btn>
    </div>
    <br>

    <!--CONTENIDO-->
    <div class="info-container d-flex flex-column flex-sm-row mx-auto  align-center">

      <div class="left-content d-flex flex-column">
        <h2 class="Description text-center text-sm-start">Descripción</h2>
        <br>
        <p class="mx-auto mx-sm-0">
          {{
            event.eventDescription
          }}
          <br>
        </p>
      </div>

      <div class="right-content">
        <h2 class="aditional-info">Datos adicionales</h2>
        <br>
        <p style="width: 190px">
          <v-icon color="red">mdi-calendar-month-outline</v-icon>{{parseToDate(event.dateStart)}} - {{parseToDate(event.dateEnd)}}</p>
        <p>
          <v-icon color="red">mdi-cash-multiple</v-icon>
          S/. 100.00
        </p>
        <v-btn>
          <v-icon color="red">mdi-share-variant</v-icon>
          Compartir
        </v-btn>
      </div>
      <br>

    </div>

    <div class="go-back my-10">
<!--      <v-btn class="text-toolbar-btn mr-4 white&#45;&#45;text btn-color" elevation="1" text-to="/" to="/home">Regresar</v-btn>-->
      <v-btn class="btn-back" depressed text-to="/" @click="$router.go(-1)">
        <v-icon class="text-toolbar-btn mr-2">mdi-arrow-left-circle</v-icon> Regresar
      </v-btn>
    </div>

  </div>
</template>

<script>
import EventsApiService from '../services/events-api.service'
import EventAssistancesApiService from '../services/event-assistances-api.service'
export default {
  name: "event-id",
  data() {
    return {
      artistId: this.$route.params.artistId,
      eventId: this.$route.params.eventId,
      isArtist: JSON.parse(localStorage.getItem('person')).brandName,
      event: Object,
      userId: JSON.parse(localStorage.getItem('person')).id,
      isScheduled: false,
      items: [
        {
          src: require('../assets/img/principal-img.jpg'),
        },
        {
          src: 'https://picsum.photos/3900/3120',
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
    this.retrieveEvent();
    this.isScheduledEvent();
  },
  methods:{
    parseToDate(date){
      let actualMonth = new Date(date);
      actualMonth.setMonth(actualMonth.getMonth()+1);
      return `${new Date(date).getDate()}/${actualMonth.getUTCMonth()}/${new Date(date).getFullYear()}`;
    },
    scheduledEvent(){
      this.isScheduled = !this.isScheduled;
    },
    retrieveEvent() {
      EventsApiService.get(this.artistId,this.eventId)
      .then(response => {
        this.event = response.data;
        console.log(this.event);
      }).catch(e => { console.log(e); })
    },
    isScheduledEvent(){
      EventAssistancesApiService.getAll(this.userId)
          .then(response => {
            response.data.forEach(event => {
              console.log(event);
              if (event.eventId === parseInt(this.eventId))
                this.isScheduled = true;
            });
          }).catch(e => { console.log(e); })
    },
    scheduleEvent(){

    },
    unScheduleEvent(){
      EventAssistancesApiService.unAssign(this.userId, this.eventId)
          .then(response => {
            console.log(response.data);
            this.isScheduled = false;
          }).catch(e => { console.log(e); })
    }
  },
  computed:{
   gotoAssistance(){
     return `/artist/${this.artistId}/event/${this.eventId}/assistance`;
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
  /*padding-right: 30%;*/
  /*padding-left: 5%;*/
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

.asist {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  width: 70%;
  text-align: justify;
}
</style>