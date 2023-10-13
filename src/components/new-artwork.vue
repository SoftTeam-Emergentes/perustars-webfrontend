<template>
<div class="all col-10 mx-auto my-12">
<v-card class="card">
  <!--Titulo-->
  <v-card-title class="Titulo">
    <span class="headline">Nueva Obra de Arte</span>
  </v-card-title>
  <!--Texto-->
  <v-card-text>
    <v-form v-model="valid">
    <v-container>
      <v-text-field
          v-model="artwork.artTitle" label="Titulo de la obra"
          required
          :rules="formRule.title"
      ></v-text-field>
<!--      <v-text-field-->
<!--          v-model="artwork.artDescription" label="¿De que trata tu obra?"-->
<!--          required-->
<!--          :rules="formRule.description"-->
<!--          :counter=250-->
<!--      ></v-text-field>-->
      <v-textarea
          v-model="artwork.artDescription" label="¿De que trata tu obra?"
          color="primary"
          :rules="formRule.description"
          required
          counter
          maxlength="250"
      >
      </v-textarea>
      <v-text-field
          v-model="artwork.artCost" label="S/.Valor"
          :rules="formRule.cost"
      ></v-text-field>
      <v-text-field
          v-model="artwork.linkInfo" label="Links externos"
      ></v-text-field>
    </v-container>
    </v-form>
  </v-card-text>

  <!--Botones-->
  <div class="botones">
  <v-card-actions>
    <v-btn text @click="$router.go(-1)">Retroceder</v-btn>
    <v-btn type="submit" color="error" :disabled="!valid" @click="saveArtwork">Crear</v-btn>
  </v-card-actions>
  </div>
</v-card>
</div>
</template>

<script>
/*Aqui falta Axios*/
import ArtworksApiService from '../services/artworks-api.service'

export default {
  name: "new-artwork",
  data(){
    return{
      valid: false,
      artistId: JSON.parse(localStorage.getItem('person')).id,
      artwork:{
        artTitle: '',
        artDescription: '',
        artCost: 0,
        linkInfo:'',
      },
      formRule:{
        title:[
            v => !!v||'Se requiere titulo'
        ],
        cost:[
            v=> v>=0||'Este valor no puede ser negativo'
        ],
        description:[
          v => v.length <= 250 || 'Max 250 characters',
          v => !!v || 'La descripción es requerida'
        ]
      }
    }
  },
  methods: {
    getJsonObject(){
      return JSON.stringify({
        "artTitle": this.artwork.artTitle,
        "artDescription": this.artwork.artDescription,
        "artCost": this.artwork.artCost || 0,
        "linkInfo": this.artwork.linkInfo
      })
    },
    saveArtwork(){
      ArtworksApiService.create(this.artistId, this.getJsonObject())
      .then(response => {
        console.log(response.data);
        this.$router.go(-1);
      }).catch(e => { console.log(e); })
    }
  }
}
</script>

<style scoped>
.card{
  align-items: center;
}
.botones{
  display: flex;
}
</style>