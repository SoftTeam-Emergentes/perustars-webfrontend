<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-main>
  <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
import ToolBar from "@/shared/components/tool-bar.vue";
</script>
