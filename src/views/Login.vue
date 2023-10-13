<template>
  <div class="login">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "../components/login-form";

export default {
  name: "Login",
  components:{
    LoginForm
  },
  created() {
    this.$emit('isLogged')
  }
}
</script>

<style>

</style>
