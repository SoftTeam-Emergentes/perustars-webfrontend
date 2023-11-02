

<template>
  <div class="w-full">
    <pv-carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
          <div class="mb-3">
            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
          </div>
          <div>
            <h4 class="mb-1">{{ slotProps.data.name }}</h4>
            <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
            <div class="mt-5 flex align-items-center justify-content-center gap-2">
              <pv-button icon="pi pi-search" rounded />
              <pv-button  icon="pi pi-star-fill" rounded severity="secondary" />
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>


    <h1>top artist</h1>

  </div>


</template>

<script>
export default {
  name: "top-artist",
  data(){
    return{

    }
  }

}
</script>
<style scoped>

</style>