<template>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense  height="70px" clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="red--text font-weight-bold text-h4 ml-4 mr-3">PeruStars</v-toolbar-title>
        <v-btn v-if="loggedIn" class="text-toolbar-btn ml-1 hidden-sm-and-down" plain to="/home"><v-icon>mdi-home</v-icon>Home</v-btn>
        <v-btn v-if="loggedIn" class="text-toolbar-btn hidden-sm-and-down" plain to="/hobbyist/artworks"><v-icon>mdi-star</v-icon>Favoritos</v-btn>
        <v-spacer></v-spacer>
        <div v-if="!loggedIn" class="hidden-sm-and-down">
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/">Home</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/about">About</v-btn>
          <v-btn class="text-toolbar-btn mr-4 white--text btn-color" elevation="1" text-to="/" to="/login">Iniciar Sesión</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" outlined text-to="/" to="/register">Registrar</v-btn>
        </div>
        <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
            width = "200"
            height="100vh"
            id = "drawer"
        >
          <v-list dense nav v-if="!loggedIn">
            <v-list-item
                v-for="item in buttonsList"
                :key="item.name"
                link
                :to='item.path'
            >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list dense nav v-else>
            <v-list-item
                v-for="item in loggedButtons"
                :key="item.name"
                link
                :to='item.path'
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <span v-if="loggedIn">{{ this.$store.state.auth.person.brandName || this.$store.state.auth.person.firstname }}</span>
<!--        <span v-if="loggedIn">{{ getToolbarName }}</span>-->
        <v-menu left bottom v-if="loggedIn">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="mr-2">
              <v-icon size="2rem">mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-if="true" @click="() => {}">
              <v-list-item-title class="text-body-2">
                <router-link class=" text-body-2" to="/hobbyist/profile">
                  <v-icon size="2rem px-5">mdi-account-edit</v-icon>Perfil
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-list-item-title>
                <button class="text-body-2" style="border: none" @click="handleLogout">
                  <v-icon size="2rem">mdi-logout</v-icon>Cerrar Sesión
                </button>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-card>

</template>

<script>
import ArtistsApiService from '../services/artists-api.service'
import HobbyistsApiService from '../services/hobbyists-api.service'
export default {
  name: "tool-bar",
  props:[
      'logged'
  ],
  data(){
    return{
      drawer: null,
      name: '',
      isArtist: JSON.parse(localStorage.getItem('person')).brandName,
      buttonsList: [
        {name:'Home', icon: 'mdi-home', path: '/'},
        {name:'About', icon: 'mdi-information', path: '/about'},
        {name:'Login', icon: 'mdi-login', path: '/login'},
        {name:'Register', icon: 'mdi-format-color-highlight', path: '/register'}
      ],
      loggedButtons:[
        {name:'Home', icon: 'mdi-home', path: '/home'},
        {name:'Favorite', icon: 'mdi-star', path: '/hobbyist/artworks'}
      ],
      person: {}
    }
  },
  computed:{
    loggedIn(){
      return this.$store.state.auth.initialState.status.loggedIn;
    },
    getToolbarName(){
      return JSON.parse(localStorage.getItem('person')).brandName || JSON.parse(localStorage.getItem('person')).firstname;
    },
    goByUser() {
      return this.isArtist? '/home/artist/profile' : '/home';
    }
  },
  methods:{
    handleLogout(){
        this.$store.dispatch('auth/logout').then(
            (userId) => {
              console.log('Logged Out '+ userId);
              //this.$store.state.auth.person = null;
              localStorage.removeItem('person');
              this.$router.push('/');
            },
            error => {
              console.log('The logout failed'+error.response.data);
            }
        );
    },
    currentUser(){
      ArtistsApiService.getByUserId(this.$store.state.auth.initialState.user.id)
          .then(response => {
            console.log(response.data);
            this.person = response.data;
        }).catch(e => { console.log(e); });

      HobbyistsApiService.getByUserId(this.$store.state.auth.initialState.user.id)
          .then(response => {
            console.log(response.data);
            this.person = response.data;
          }).catch(e => { console.log(e); });
    }
  },
}
</script>

<style scoped>
.v-toolbar{
  position: fixed;
  z-index: 200;
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
.text-body-2{
  text-decoration: none;
  color: #211c1c;
}
</style>