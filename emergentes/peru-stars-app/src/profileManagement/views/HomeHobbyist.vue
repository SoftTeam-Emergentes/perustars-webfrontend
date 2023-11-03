

<template>

  <body>
  <div class="flex flex-row ">
    <div v-if="screenIsWide" >
      <side-bar-hobbyist ></side-bar-hobbyist>
    </div>
    <div class=" overflow-auto">
      <top-artist></top-artist>
      <top-art></top-art>
    </div>

  </div>

  </body>


</template>

<script>
import SideBarHobbyist from "@/profileManagement/components/side-bar-hobbyist.vue";
import TopArtist from "@/profileManagement/components/top-artist.vue";
import TopArt from "@/profileManagement/components/top-artwork.vue";

export default {
  name: "HomeHobbyist",
  components: {TopArt, TopArtist, SideBarHobbyist},

  data(){
    return{
      screenIsWide: true,
    }

  },
  mounted() {
    // Escuchar el evento de cambio de tamaño de la pantalla
    window.addEventListener("resize", this.checkScreenWidth);

    // Llamar a la función para verificar el ancho de pantalla al cargar la página
    this.checkScreenWidth();
  },
  methods: {
    checkScreenWidth() {
      // Verificar el ancho de la pantalla y actualizar la variable
      this.screenIsWide = window.innerWidth >= 700;
    },
  },
  beforeUnmount() {
    // Asegúrate de eliminar el oyente del evento antes de destruir el componente
    window.removeEventListener("resize", this.checkScreenWidth);
  },

}
</script>

<style scoped>

</style>