<template>
  <v-card height="82vh" class="d-flex flex-column flex-sm-row align-center space-evenly elevation-0">
    <div class="d-flex flex-column align-center">
      <v-card-title class="mb-12 text-h6 text-md-h4 font-weight-medium" he>Iniciar Sesión</v-card-title>
      <v-img
          src="../assets/img/programmer.svg"
          alt="Iniciar Sesion"
          max-width="112px"
          max-height="112px"
      >
      </v-img>
    </div>
    <v-form v-model="valid" class="form-container" @submit.prevent="handleLogin">
      <v-container class="d-flex flex-column">
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            placeholder="Ex.username@example.com"
            required
            outlined
        >
        </v-text-field>
        <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="Al menos 8 caracteres"
            placeholder="Password"
            @click:append="showPassword = !showPassword"
            required
            outlined
        ></v-text-field>
      </v-container>
      <v-card-actions class="d-flex justify-center">
        <v-btn class="text-capitalize text-body-2" type="submit" color="error" :disabled="!valid">Login</v-btn>
      </v-card-actions>
    </v-form>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FA4D56"
            d="M35.8,-38.4C50,-30.7,67.8,-22.9,70.3,-11.9C72.8,-1,60.1,13.2,50.3,28.2C40.6,43.1,33.9,59,24.4,59C14.8,59,2.4,43.2,-11,35.9C-24.5,28.5,-39,29.7,-48.3,23.2C-57.6,16.7,-61.7,2.6,-57,-7.7C-52.4,-17.9,-39,-24.2,-28,-32.6C-17.1,-40.9,-8.5,-51.3,1.1,-52.6C10.8,-54,21.5,-46.2,35.8,-38.4Z"
            transform="translate(100 100)"/>
    </svg>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FA4D50"
            d="M64.4,-30.9C77.3,-14.9,77.4,14.9,64.5,38C51.6,61,25.8,77.4,2.8,75.7C-20.1,74.1,-40.2,54.5,-49.1,33.7C-58,12.9,-55.7,-9,-45.7,-23.4C-35.6,-37.8,-17.8,-44.7,4,-47C25.8,-49.3,51.5,-46.9,64.4,-30.9Z"
            transform="translate(100 100)"/>
    </svg>
  </v-card>
</template>

<script>
//import UserApiService from '../services/users-api.service'
import HobbyistsApiService from '../services/hobbyists-api.service'
import ArtistsApiService from '../services/artists-api.service'
export default {

  name: "login-form",
  data() {
    return {
      showPassword: false,
      valid: false,
      password: '',
      passwordRules: {
        required: value => !!value || 'La contraseña es requerida.',
        // min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        emailMatch: () => (`El email o la contraseña introducidas no son correctas`)
        // minus: v => /(?=.*[a-z])/.test(v) || 'Debe haber al menos un caracter en minúscula',
        // mayus: v => /(?=.*[A-Z])/.test(v) || 'Debe haber al menos un caracter en mayúscula',
        // numesp: v => /([!@$%])/.test(v) || /(?=.*\d)/.test(v) || 'Debe tener un número o caracter especial [!@#$%]'
      },
      email: '',
      emailRules: [
        v => !!v || 'El e-mail es requerido',
        v => /.+@.+/.test(v) || 'El e-mail debe ser válido',
      ],
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    sendForm(){
      this.user.username = this.email;
      this.user.password = this.password;
      console.log(this.user);
    },
    handleLogin(){
      this.sendForm();
      if(this.user.username && this.user.password){
        this.$store.dispatch('auth/login', this.user).then(
            (userId) => {
              console.log('Logged In '+ userId);
              this.goToRoute(userId);
            },
            error => {
              console.log('The login failed'+ error.response);
            }
        );
      }
    },
    goToRoute(id){
      HobbyistsApiService.getByUserId(id)
          .then( response =>{
            console.log(response);
            this.$store.dispatch('auth/savePerson', response.data);
            //this.$store.state.auth.person = response.data;
            //localStorage.setItem('person',JSON.stringify(response.data));
            this.$router.push('/home');
          }).catch(e =>{
        console.log(e);
      });
      ArtistsApiService.getByUserId(id)
          .then( response =>{
            console.log(response);
            this.$store.dispatch('auth/savePerson', response.data);
            //this.$store.state.auth.person = response.data;
            //localStorage.setItem('person',JSON.stringify(response.data));
          this.$router.push('/home/artist/profile');
          }).catch(e =>{
        console.log(e);
      });
    }
  }
}
</script>

<style scoped>

.space-evenly {
  justify-content: space-evenly;
}

svg{
  position: fixed;
  z-index: 10;
  right: -12%;
  top: 40px;
  height: 370px;
}
svg:first-of-type{
  right: 75%;
  top: 10px;
  height: 800px;
}

.form-container{
  width: 310px;
}
@media(max-width: 1010px) {
  svg{
    z-index: -10;

  }
}



</style>