<template>
  <div>
    <div class="shape">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-5.92,83.38 C-5.92,84.38 509.31,143.58 509.87,144.56 L500.00,150.00 L0.00,150.00 Z"
              style="stroke: none; fill: #fff;"></path>
      </svg>
    </div>
    <v-card class="mx-10 mt-10 top-content" color="transparent" elevation="0">
      <div class="flex-column ml-10 mr-5 image-profile">
        <v-card-title class="d-block text-center white--text text-h5 font-weight-bold">Hobbyist Name</v-card-title>
        <v-img
            src="https://picsum.photos/id/177/800"
            alt="artist image"
            width="200" height="200"
            class="rounded-circle"
        >
        </v-img>
      </div>
    </v-card>

    <v-card class="py-10 mx-auto px-5 px-md-16  col-9 col-sm-8 col-md-5">
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
        <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
            placeholder="Ex.great_artist21"
            required
            outlined
        ></v-text-field>

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
            :rules="[passwordRules.required, passwordRules.min, passwordRules.mayus, passwordRules.minus, passwordRules.numesp]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="Al menos 8 caracteres"
            placeholder="Password"
            @click:append="showPassword = !showPassword"
            required
            outlined
        ></v-text-field>

      </v-form>
    </v-card>

    <v-card elevation="0" class="mx-auto mt-15">
      <v-list-item-content class="d-flex flex-row justify-space-around mx-auto" style="width: 60%">
        <specialty-card v-for="(specialty,i) in specialties" :key="i" :specialtyName="specialty.name" class="mb-10 mx-16 mx-sm-0"></specialty-card>
      </v-list-item-content>
    </v-card>
    <div class="save-btn my-15 mx-auto" style="width: fit-content">
      <v-btn
          depressed
          color="error"
      >
        Actualizar
      </v-btn>
    </div>
  </div>
</template>

<script>
// Services
import SpecialtiesApiService from '../services/specialties-api.service'
//Components
import SpecialtyCard from '../components/specialty-card'

export default {
  name: "Hobbyist",
  components: {
    SpecialtyCard
  },
  data() {
    return {
      specialties: [],
      username: 'Miguel Angel',
      usernameRules: [
        value => !!value || 'El username es requerido.',
        v => v.length >= 8 || 'Mínimo 8 caracteres',
      ],
      showPassword: false,
      valid: false,
      password: 'Renacimiento123',
      passwordRules: {
        required: value => !!value || 'La contraseña es requerida.',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        emailMatch: () => (`El email o la contraseña introducidas no son correctas`),
        minus: v => /(?=.*[a-z])/.test(v) || 'Debe haber al menos un caracter en minúscula',
        mayus: v => /(?=.*[A-Z])/.test(v) || 'Debe haber al menos un caracter en mayúscula',
        numesp: v => /([!@$%])/.test(v) || /(?=.*\d)/.test(v) || 'Debe tener un número o caracter especial [!@#$%]'
      },
      email: 'mange41@gmailcom',
      emailRules: [
        v => !!v || 'El e-mail es requerido',
        v => /.+@.+/.test(v) || 'El e-mail debe ser válido',
      ]
    }
  },
  created() {
    this.$emit('isLogged');
    this.retrieveSpecialties();
  },
  methods:{
    retrieveSpecialties() {
      SpecialtiesApiService.getAll()
          .then(response => {
            this.specialties = response.data;
            console.log(this.specialties)
          }).catch(e => { console.log(e); })
    }
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

</style>