<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="error" v-bind="attrs" v-on="on">{{ text }}</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="error" dark>
          <span>Ingresa a tu cuenta o regístrate</span>
          <v-spacer></v-spacer>
          <v-btn class="text-action-btn" elevation="0" color="error" @click="dialog.value = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <div class="text-h2 pa-12">
            <img alt="user" src="../assets/img/please-login.svg" width="100%" height="200vh">
            <div class="btns mt-3">
              <v-btn class="mr-2" color="error" outlined to="/register">Regístrate</v-btn>
              <v-btn class="ml-2" color="error" to="/login">Iniciar Sesión</v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "login-dialog",
  props: [
    'text'
  ]
}
</script>

<style scoped>
.btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>