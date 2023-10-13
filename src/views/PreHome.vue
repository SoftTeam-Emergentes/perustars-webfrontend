<template>
  <div class="pre-home">
    <home-preview></home-preview>
  </div>
</template>

<script>
import HomePreview from "../components/home-preview";

export default {
  name: "PreHome",
  components: {
    HomePreview
  },
  created() {
    this.$emit('isLogged')
  }
}
</script>
