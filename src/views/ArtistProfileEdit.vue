<template>
  <v-form>
    <section>
      <div class="shape">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M-5.92,83.38 C-5.92,84.38 509.31,143.58 509.87,144.56 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: #fff;"></path>
        </svg>
      </div>
      <v-card class="d-flex flex-row mx-10 mt-10 top-content" color="transparent" elevation="0">
        <div class="cont">
          <v-card-title style="width: 320px" class="d-block text-left ml-0 white--text text-h5 font-weight-bold mx-auto">{{ brandName }}</v-card-title>
          <v-img
              src="../assets/img/amateur.jpg"
              alt="artist image"
              width="200" height="200"
              class="img"
          >
          </v-img>
          <v-dialog v-model="informationDialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn" fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Información del Artista</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          v-model="firstName"
                          label="Nombre*"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="lastName"
                          label="Apellido*"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="brandName"
                          label="Apodo*"
                          required
                      ></v-text-field>
                    </v-col>

                  </v-row>
                </v-container>
                <small>*Todos los campos son requeridos</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="informationDialog = false"
                >
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div class="profile-data d-flex flex-row justify-space-around mr-10">
          <v-container class="flex-column profile-contact">
            <p class="font-weight-bold">Specialidad</p>
            <p>{{ specialty.name }}

              <v-dialog
                  v-model="specialtyDialog"
                  scrollable
                  max-width="300px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="ml-3" small fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                    <v-icon dark>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Elige una especialidad</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text style="height: 300px;">
                    <v-radio-group
                        v-model="specialty"
                        column
                    >
                      <v-radio
                          v-for="(specialty) in specialties" :key="specialty.id"
                          :label="specialty.name"
                          :value="specialty"
                      ></v-radio>
                    </v-radio-group>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="specialtyDialog = false"
                    >
                      Aceptar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </p>
          </v-container>
          <v-container class="flex-column" style="width: 450px">
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
            <v-btn class="mt-5" small fab dark color="deep-orange darken-2">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
          </v-container>
          <v-container class="flex-column">
            <p class="text-center" style="max-width: 350px">"{{phrase}}"</p>
            <v-dialog v-model="phraseDialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="mt-5" small fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Frase</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                            v-model="phrase"
                            :rules="rulesPhrase"
                            required
                            counter
                            maxlength="100"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*El campo es requerido.</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="error"
                      text
                      @click="phraseDialog = false"
                  >
                    Aceptar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
        </div>
      </v-card>
    </section>

    <section>
      <v-card elevation="0" class="ml-15 mb-16">
        <v-card-title class="text-h5 font-weight-medium">
          ¿Quién soy?
          <v-dialog v-model="descriptionDialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ml-3" x-small fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Descripción</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                          v-model="description"
                          color="error"
                          :rules="rulesDescription"
                          required
                          counter
                          maxlength="250"
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*El campo es requerido.</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="descriptionDialog = false"
                >
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>
        <p class="description-p">{{description}}</p>

      </v-card>
    </section>

    <section class="artworks-section">
      <v-card class="mx-10 mt-5 mb-13" elevation="0" color="transparent">
        <v-card-title class="white--text text-h5 font-weight-bold">Mis obras de arte</v-card-title>
        <v-card-title v-if="pageSize===0" class="white--text text-body-1 justify-center">Aún no cuentas con obras publicadas.</v-card-title>
        <v-btn class="agregar" to="/artwork/new">Agregar +</v-btn>
        <div class="d-flex flex-row align-center">
          <v-btn :disabled="page===0" elevation="0" height="auto" width="100px" color="transparent" v-on:click="previousPage"
                 class="rounded-circle">
            <v-icon class="text-h1 white--text">mdi-chevron-left</v-icon>
          </v-btn>
          <v-list-item-content class="d-flex flex-row justify-space-between justify-center px-10">
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
      <v-card class="mx-10 mt-5 mb-15" elevation="0" color="transparent">
        <v-card-title class="text-h5 font-weight-medium">Futuros eventos</v-card-title>
        <v-card-title v-if="events.length===0" class="darken-2 text-body-1 justify-center">Aún no cuentas con eventos.</v-card-title>
        <v-btn class="agregar" to="/event/new">Agregar +</v-btn>
        <v-carousel
            height="500"
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
        <v-btn
            v-if="firsTimeLogged"
            color="error"
            dark
            absolute
            top
            class="cambios"
            @click="createArtist"
        >
          Crear Perfil
        </v-btn>
        <v-btn
            v-else
            color="error"
            dark
            absolute
            top
            class="cambios"
            @click="updateArtist"
        >
          Aplicar Cambios
        </v-btn>
      </v-card>
    </section>
  </v-form>
</template>

<script>
import SpecialtiesApiService from '../services/specialties-api.service'
import ArtistsApiService from '../services/artists-api.service'

import ArtworkCard from "../components/artwork-card";
import ArtistEventCard from "../components/artist-event-card";
import ArtworksApiService from "../services/artworks-api.service";
import EventsApiService from "../services/events-api.service";

export default {
  name: "ArtistProfile",
  components: {ArtistEventCard, ArtworkCard},
  data() {
    return {
      informationDialog: false,
      specialtyDialog: false,
      phraseDialog: false,
      descriptionDialog: false,
      pageLength: 3,
      artworks: [],
      showingArtworks: [],
      events: [],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      phrase: 'Aquí va el texto de una frase célebre con el que te sientas identificado o defina mejor tu trabajo.',
      description: 'Aquí va el texto de su descripción como artista. Puede ser una breve biografía, sus trabajos, premios, pasatiempos, o algo que te defina como artista.',
      brandName: 'Nombre Artista',
      firstName: '',
      lastName: '',
      specialty:{
        id: 0,
        name: 'Ninguna'
      },
      rulesPhrase: [v => v.length <= 100 || 'Max 100 characters'],
      rulesDescription: [v => v.length <= 250 || 'Max 250 characters'],
      specialties: [],
      userId: JSON.parse(localStorage.getItem('user')).id,
      firsTimeLogged: false,
      personId: 0,
      page: 0,
      pageSize: 0,
      artistId: JSON.parse(localStorage.getItem('person')).id,
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
    retrieveArtworks(num){
      ArtworksApiService.getAll(this.artistId)
          .then(response => {
            console.log(response.data)
            this.artworks = response.data;
            this.pageSize = this.artworks.length;
            this.showingArtworks = this.artworks.slice(num,num+3);
          }).catch(e => { console.log(e); })
    },
    retrieveEvents(){
      EventsApiService.getAllByArtistId(this.artistId)
          .then(response => {
            this.events = response.data;
            //console.log(this.events)
          }).catch(e => { console.log(e); })
    },
    retrieveSpecialties(){
      SpecialtiesApiService.getAll()
      .then(response => {
        this.specialties = response.data;
      }).catch(e => { console.log(e); })
    },
    retrieveSpecialty(id){
      SpecialtiesApiService.get(id)
      .then(response => {
        this.specialty = response.data;
      })
    },
    getJsonObject(){
      return JSON.stringify({
        "firstname": this.firstName,
        "lastname": this.lastName,
        "userId": parseInt(this.userId),
        "brandName": this.brandName,
        "description": this.description,
        "phrase": this.phrase,
        "specialtyId": this.specialty.id
      })
    },
    createArtist(){
      console.log(this.getJsonObject());
      ArtistsApiService.create(this.getJsonObject())
          .then(response => {
            console.log(response.data)
          }).catch(e => { console.log(e); })
    },
    updateArtist(){
      ArtistsApiService.update(this.personId, this.getJsonObject())
          .then(response => {
            console.log(response.data);
            this.firsTimeLogged = true;
          }).catch(e => { console.log(e); })
    },
    existsArtist(){
      ArtistsApiService.getByUserId(this.userId)
      .then(response =>{
        this.$store.dispatch('auth/savePerson', response.data);
        this.saveProfileData(response.data);
        this.firsTimeLogged = false;
        console.log(response.data);
      }).catch(e => {
        console.log(e);
        this.firsTimeLogged = true;
      })
    },
    saveProfileData(person){
      this.firstName = person.firstname;
      this.lastName = person.lastname;
      this.brandName = person.brandName;
      this.description = person.description;
      this.phrase = person.phrase;
      this.personId = person.id;
      this.retrieveSpecialty(person.specialtyId);
    }
  },
  created() {
    this.existsArtist();
    this.retrieveSpecialties();
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

.image-profile {
  width: 20%;
}

.profile-contact {
  margin-right: 10px;;
}

.borde-prueba {
  border: 3px solid red;
}

.description-p {
  width: 750px;
}

.artworks-section {
  background: linear-gradient(90deg, rgba(236, 187, 61, 1) 0%, rgba(223, 0, 0, 1) 100%);
  padding: 1px 0;
}

.cont{
  margin-left: 10px;
  margin-right: 5px;
}

.cont .img{
  border-radius: 50%;
}

.cont .btn{
  margin-left: 138px;
  margin-top: -70px;
  border: none;
  cursor: pointer;
}

.agregar{
  position: absolute;
  top: 1.5%;
  right: 5%;
  color:orangered;
}

.cambios{
  left: 50%;
  transform:translateX(-50%);
  top: 110%;
  background: linear-gradient(90deg, rgba(236, 187, 61, 1) 0%, rgba(223, 0, 0, 1) 100%);
}


</style>