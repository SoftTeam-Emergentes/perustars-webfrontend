<script>
import SideBarHobbyist from "@/profileManagement/components/side-bar-hobbyist.vue";
import TopArtist from "@/profileManagement/components/top-artist.vue";

export default {
  name: "HomeHobbyist",
  components: {TopArtist, SideBarHobbyist}
}
</script>

<template>

  <body>
  <div class="flex flex-row">
    <side-bar-hobbyist></side-bar-hobbyist>
    <top-artist></top-artist>
    <h1>home hobbyist</h1>
  </div>



  </body>


</template>

<style scoped>

</style>