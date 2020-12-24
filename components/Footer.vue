<template>
  <div>
    <v-footer class="caption white--text background-dark">
      <v-container class="py-0">
        <div class="white--text text-center py-2">
          Copyright &copy;<span>{{year}}</span> 
        </div>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
export default {
  data(){
   return {
    year: new Date().getFullYear()
   }
  }
}
</script>
<style scoped>
/* BACKGROUND */
.background-dark {
  background-color: #2d2d2d !important;
}
</style>