<template>
  <v-app>
    <tool-bar :logged="logged"></tool-bar>
    <v-main>
      <router-view @isLogged="login"></router-view>

    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "./components/tool-bar";

export default {
  name: 'App',
  components: {
    ToolBar
  },
  data: () => ({
    logged: false,
    freeViews:['/','/about','/login', '/register', '/terms&conditions']
  }),
  created() {
    this.login();
  },
  methods:{
    login(){
      for (const view of this.freeViews){
        if (window.location.pathname === view)
          return this.logged = false;
      }
      return this.logged = true;
    }
  }
};
</script>

<style>
main{
  margin-top: 70px;
}
</style>
