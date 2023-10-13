<template>
  <div class="register">
    <register-form></register-form>
  </div>
</template>

<script>
import RegisterForm from "../components/register-form";

export default {
  name: "Register",
  components:{
    RegisterForm,
  },
  created() {
    this.$emit('isLogged')
  }
}
</script>

<style>

</style>