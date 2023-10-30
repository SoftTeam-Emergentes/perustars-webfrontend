<template>
  <div class="card-container mx-auto">
    <br>
    <br>
    <v-card class="card justify-center" max-width="450" elevation="3">
      <v-card-title class="text-center" >Evento registrado exitosamente</v-card-title>
      <v-card-text>
        El evento ha sido registrado de manera exitosa en su calendario.
        Para continuar haga click en el boton de "Volver al menu"
      </v-card-text>
      <br>
      <br>
      <v-card-actions>
        <v-btn text @click="assign" class="btn-color" elevation="2">Volver al menu</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "confirm-assistance"
}
</script>

<style scoped>
.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}

.card-container{
  padding-left: 10%;
}
.justify-center{
  align-items: center;
}

.card{
  align-items: center;
  align-content: center;
  margin:auto;
}
</style>