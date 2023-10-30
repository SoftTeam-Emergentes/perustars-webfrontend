<template>
  <div class="card-container mt-14">
    <v-card class="mx-auto d-flex flex-column px-8" max-width="450" elevation="3">
      <v-card-title class="text-body-1 text-sm-h6">Selecciona una fecha de asistencia</v-card-title>
      <v-date-picker
          v-model="assistanceDay"
          color="red"
          elevation="15"
          :min="this.minDate"
          :max="this.maxDate"
          :show-current="false"

      ></v-date-picker>
      <v-card-actions class="d-flex justify-center my-5">
        <v-btn class="btn-back" depressed text-to="/" @click="$router.go(-1)">
          <v-icon class="mr-1">mdi-arrow-left-circle</v-icon> Regresar
        </v-btn>
        <v-btn text @click="assign" class="btn-color">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import EventApiService from '../services/events-api.service'
import EventAssistancesApiService from '../services/event-assistances-api.service'
export default {
  name: "assistance-form",
  data(){
    return{
      event: Object,
      userId: JSON.parse(localStorage.getItem('person')).id,
      artistId: this.$route.params.artistId,
      eventId: this.$route.params.eventId,
      minDate: '',
      maxDate: '',
      assistanceDay: ''
    }
  },
  created() {
    this.retrieveEvent();
  },
  methods:{
    retrieveEvent() {
      EventApiService.get(this.artistId,this.eventId)
      .then(response => {
        this.event = response.data;
        this.minDate = this.parseToDate(this.event.dateStart);
        this.maxDate = this.parseToDate(this.event.dateEnd);
        console.log(this.event);
        console.log(this.minDate);
        console.log(this.maxDate);
      }).catch(e => { console.log(e); })
    },
    assign(){
      if(!this.assistanceDay) return;
      let jsonObject = JSON.stringify({'attendanceDay' : this.assistanceDay});
      EventAssistancesApiService.assign(this.userId, this.eventId, jsonObject)
        .then(response => {
          console.log(response.data)
          this.$router.go(-1);
        }).catch(e => { console.log(e); })
    },
    parseToDate(date){
      let enterDate = new Date(date);
      let DAY_MLS = 24 * 60 * 60 * 1000;
      return new Date(enterDate.getTime() - DAY_MLS).toISOString();
    }
  }
}
</script>

<style scoped>

.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);height: max-content;
}

</style>