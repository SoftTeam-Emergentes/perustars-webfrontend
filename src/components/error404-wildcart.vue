<template>

  <div class="card-container mx-auto">
    <br>
    <br>
  <v-card class="justify-center" max-width="750" elevation="3">
    <v-card-title class="title">ERROR 404</v-card-title>
    <v-img class="img-notfound"></v-img>
    <v-card-subtitle>Lo sentimos :c ,el contenido que estas buscando no existe, te recomendamos regresar al menu </v-card-subtitle>
  <v-card-actions>
    <v-btn class="btn-color" @click="$router.go(-1)" > Regresar</v-btn>
    <v-btn class="btn-color" to="/"  > Menu Principal</v-btn>
  </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "error404-wildcart"

}


</script>

<style scoped>
.card-container{
  padding-left: 28%;
}
.justify-center{
  align-items: center;
}
.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}
.title{
  font-size: 80px;
}
.img-notfound{
  background: url("../assets/img/undraw_page_not_found_su7k.svg")no-repeat;
  background-size: cover;
  background-position: center;
}
</style>