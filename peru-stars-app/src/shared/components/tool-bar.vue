<template>
    <v-card color="grey lighten-4 " flat tile style="margin-bottom: 65px">
      <v-toolbar   app :elevation="8">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-red font-weight-bold text-h4 ml-4 mr-3">PeruStars</v-toolbar-title>
        <div v-if="!loggedIn()" class="hidden-sm-and-down">
          <div class="button-container" style="display: flex;">
            <v-btn
              v-for="(option, index) in navigationPreHome"
              :key="index"
              :class="option.style"
              @click="buttonClick(option.to)"
            >
              {{ option.name }}
            </v-btn>
          </div>
        </div>
        <div v-if="loggedIn()">
          <v-btn class="text-toolbar-btn mr-4 red--text" plain to="/home">
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
          <v-btn class="text-toolbar-btn hidden-sm-and-down" plain to="/hobbyist/artworks">
            <v-icon>mdi-star</v-icon>
            Favoritos
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div v-if="!loggedIn()" class="hidden-sm-and-down">
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/">Home</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/about">About</v-btn>
          <v-btn class="text-toolbar-btn mr-4 white--text btn-color" elevation="1" text-to="/" to="/login">Iniciar
            Sesión
          </v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" outlined text-to="/" to="/register">Registrar
          </v-btn>
        </div>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
</template>

<script>
/*import ArtistsApiService from '../services/artists-api.service'
import HobbyistsApiService from '../services/hobbyists-api.service'*/
export default {
  name: "tool-bar",
  data() {
    return {
      value: 0,
      drawer: null,
      navigationPreHome: [
        {name: 'Home', icon: 'mdi-home', to:{name:'pre-home'} , style: 'text-toolbar-btn mr-4 text-red'},
        {name: 'About', icon: 'mdi-information',to:{name:'about'}, style: 'text-toolbar-btn mr-4 text-red'},
        {
          name: 'Iniciar Sesión',
          icon: 'mdi-login',
          to:{name:'sign-in'},
          style: 'text-toolbar-btn mr-4 white--text btn-color'
        },
        {
          name: 'Register',
          icon: 'mdi-format-color-highlight',
          to:{name:'sign-up'},
          style: 'text-toolbar-btn mr-4 text-red'
        }

      ],
      navigationHobbyist: [
        {name: 'Home', icon: 'mdi-home', path: '/home'},
        {name: 'Favorite', icon: 'mdi-star', path: '/hobbyist/artworks'}
      ],
    }
  },
  methods:
    {
      loggedIn() {
        return false
      },
      buttonClick(router){
        this.$router.push(router)
      }

    }

}
</script>

<style lang="scss" scoped>
.v-toolbar {
 position: fixed;
  z-index: 1000;
  width: 100%;
}

.text-toolbar-btn {
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 500;
}

.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}

.text-body-2 {
  text-decoration: none;
  color: #211c1c;
}
</style>
