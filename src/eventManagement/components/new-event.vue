<template>
  <div class="all col-10 mx-auto my-12">
    <v-card class="card">
      <!--Titulo-->
      <v-card-title class="Titulo">
        <span class="headline">Nuevo Evento</span>
      </v-card-title>
      <!--Texto-->
      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-text-field
                v-model="event.eventTitle" label="Titulo del Evento"
                required
                :rules="formRule.title"
                counter
                maxlength="100"
            ></v-text-field>
            <!--Fecha de Inicio y de Fin-->
            <div class="d-flex flex-row justify-space-around">
              <div class="text-center text-h6" >Fecha Inicio</div>
              <div class="text-center text-h6" >Fecha Fin</div>
            </div>
            <br>
          <v-row justify="space-around">

            <v-date-picker
                v-model="event.dateStart"
                color="red"
                elevation="15"
                :min="getToday"
                :show-current="true"
            ></v-date-picker>
            <v-date-picker
                v-model="event.dateEnd"
                color="red"
                elevation="15"
                :min="getToday"
                :show-current="false"
            ></v-date-picker>
          </v-row>
            <br>
            <v-textarea
                v-model="event.eventDescription" label="Descripción de su evento"
                color="primary"
                :rules="formRule.description"
                required
                counter
                maxlength="250"
            >
            </v-textarea>
            <v-text-field
                v-model="event.eventAdditionalInfo" label="Información de su evento (opcional)"
                required

            ></v-text-field>
          </v-container>
        </v-form>
      </v-card-text>

      <!--Botones-->
      <div class="botones">
        <v-card-actions>
          <v-btn class="btn-color" @click="$router.go(-1)" >Regresar</v-btn>
          <v-btn type="submit" color="error" :disabled="!valid" @click="save">Crear</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
import EventsApiService from '../services/events-api.service'

export default {

  name: "new-event",
  data() {
    return {
      valid: false,
      artistId: JSON.parse(localStorage.getItem('person')).id,
      event: {
        eventTitle:'',
        eventType: 1,
        dateStart: '',
        dateEnd: '',
        eventDescription: '',
        eventAdditionalInfo:''
      },
      formRule:{
        title:[
          v => !!v||'Se requiere titulo',
          v => v.length <= 100 || 'Max 100 characters'
        ],
        description:[
          v => v.length <= 250 || 'Max 250 characters',
          v => !!v||'Se requiere descripcion'
        ]
      }
    }
  },
  computed:{
    getToday(){
      return new Date(Date.now()).toISOString();
    }
  },
  methods: {
    getJsonObject(){
      return JSON.stringify({
        "eventTitle": this.event.eventTitle,
        "eventType": this.event.eventType,
        "dateStart": new Date(this.event.dateStart).toISOString(),
        "dateEnd": new Date(this.event.dateEnd).toISOString(),
        "eventDescription": this.event.eventDescription,
        "eventAditionalInfo": this.event.eventAdditionalInfo
      })
    },
    save(){
      console.log(this.getJsonObject());
      EventsApiService.create(this.artistId, this.getJsonObject())
      .then(response => {
        console.log(response.data)
        this.$router.go(-1);
      }).catch(e => { console.log(e); })
    }
  }
}
</script>

<style scoped>

</style>