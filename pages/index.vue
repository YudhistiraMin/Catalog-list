<template>
  <div v-if="loadingLoad">
    <!-- section banner -->
    <section>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-carousel 
              cycle
              height="auto"
              delimiter-icon="mdi-minus"
              hide-delimiter-background
              show-arrows-on-hover>
              <v-carousel-item v-for="(banner, i) in list.banner" :key="i">
                <v-sheet height="100%">
                  <v-row class="fill-eight" align="center" justify="center">
                    <v-img cover height="340" :src="banner.img">
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5" />
                        </v-row>
                      </template>
                    </v-img>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- end section -->
    <!-- section produk -->
   <section class="mt-3">
    <v-container>
      <div>
        <div>
          <h2 class="title-section">Nike Air Force 1 Mi <span class="span-data-produk ml-1">(4 produk)</span></h2>
        </div>
        <v-row>
          <v-col :cols="$vuetify.breakpoint.xs ? 12 : $vuetify.breakpoint.sm ? 6 : $vuetify.breakpoint.md ? 3 : 3" v-for="(l,index) in list.list_item" :key="index">
            <div>
              <v-card
                outlined
                class="border-radius box-shadow"
                align="center"
                height="290"
                elevation="0"
                :width="$vuetify.breakpoint.xs ? '100%' : $vuetify.breakpoint.sm ? '100%' : '225'"
                :to="`/detail/${l.id}`">
                <v-img
                contain
                class="text-right pa-2"
                :src="l.img"
                color="#f5f5f5"
                height="150">
                <v-icon color="#f47760">mdi-fire</v-icon>
                </v-img>
                <div class="pt-2 pa-2">
                  <v-card-title class="pb-0 px-2">
                    <span class="text-title">
                      {{ l.title}}
                    </span>
                  </v-card-title>
                  <v-card-title class="pt-1 justify-center pb-1">
                  <span class="text-title">{{l.price}}</span>
                  </v-card-title>
                  <div class="justify-center">
                    <v-icon
                      v-for="n in 5" :key="n" 
                      small 
                      color="#ffc200">mdi-star
                    </v-icon>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
   </section>
   <!-- end section -->
  </div>
</template>
<style lang="scss" scoped>
.main-carousel {
  max-height: 295px;
  .v-carousel__controls {
    justify-content: start;
    padding: 0 20px;
    .v-carousel__controls__item {
      margin: 0;
      .v-icon {
        opacity: 1;
        font-size: 14px !important;
      }
    }
    .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active::before {
      opacity: 0;
    }
    .v-item--active {
      color: #bf9b30;
      opacity: 1;
    }
  }
  .v-btn--icon.v-size--small {
    width: 20px;
    height: 20px;
  }
}
</style>
<script>
export default {
  layout:'produk',
  data (){
    return{
      slider:0,
      loadingLoad: true,
    }
  },
  computed :{
    list(){
      return this.$store.state.list;
    }
  },
  mounted() {
    this.fetch()
    this.loading()
  },
  methods:{
    fetch(){
      this.$store.dispatch('getList')
    },
    loading(){
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      this.loading = false
    })
    },
  }
}
</script>


