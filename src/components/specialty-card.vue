<template>
  <v-card class="artwork-card" max-width="200" elevation="3">
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        alt="Photo"
    ></v-img>
    <div class="mx-3">
      <v-card-title class="text-body-1 font-weight-bold justify-center">
        <h4>
          {{ specialtyName }}
        </h4>
        <v-btn icon @click="selectSpecialty">
          <v-icon :color="heartColor">{{heartSymbol}}</v-icon>
        </v-btn>
      </v-card-title>
    </div>

  </v-card>
</template>

<script>

export default {
  name: "specialty-card",
  props: [
      'specialtyName'
  ],
  data(){
    return {
      isFavorite: false,
      pictures: [
          'https://picsum.photos/id/1042/3456/5184',
          'https://picsum.photos/id/1042/3456/5184',
          'https://picsum.photos/id/1042/3456/5184',
          'https://picsum.photos/id/1042/3456/5184',
          'https://picsum.photos/id/1042/3456/5184',
          'https://picsum.photos/id/1042/3456/5184',
          'https://picsum.photos/id/1042/3456/5184',
          'https://picsum.photos/id/1042/3456/5184',
      ]
    }
  },
  computed:{
    heartColor() { return this.isFavorite? 'error' : 'dark'; },
    heartSymbol() { return this.isFavorite? 'mdi-check-circle' : 'mdi-check-circle-outline'; }
  },
  methods:{
    selectSpecialty(){
      this.isFavorite = !this.isFavorite;
    }
  }
}
</script>

<style scoped>

</style>