<template>
  <div>
    <section v-if="loadingLoad">
      <v-container v-if="detail.length !== 0">
        <v-row justify="space-between">
          <v-col :cols="$vuetify.breakpoint.xs ? 12 : $vuetify.breakpoint.sm ? 5:$vuetify.breakpoint.md ? 5:5">
            <v-card
              class="box-shadow"
              style="border-radius:4px;"
              align="center"
              flat
              outlined
              :height="$vuetify.breakpoint.xs ? 250:350">
              <v-img
              contain
              :height="$vuetify.breakpoint.xs ? 250:350"
              :src="dataImage === null ? detail.image : dataImage.image">
              </v-img>
            </v-card>
            <v-divider class="my-4" />
            <v-slide-group
              v-model="slideImage"
              mandatory>
              <v-slide-item
                v-for="(l, index) in detail.thumbnailImages"
                :key="index"
                v-slot:default="{toggle }">
                <v-card
                  height="112"
                  width="112"
                  flat
                  outlined
                  class="rounded-lg mr-4"
                  @click="toggle">
                  <v-img
                  width="100%"
                  height="100%"
                  contain
                  @click="switchImage(index)"
                  class="rounded-sm"
                  :src="l.image"/>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
          <v-col :cols="$vuetify.breakpoint.xs ? 12 : $vuetify.breakpoint.sm ? 6:$vuetify.breakpoint.md ? 6:6">
            <div>
              <h1 class="header-text mt-5">
                {{detail.title}}
              </h1>
              <div class="d-flex span-detail mt-5">
                <span class="mb-3 font-weight-bold" style="max-width:23px;min-width:135px">SKU</span>
                <span>:</span>
                <span class="ml-2">{{detail.sku}}</span>
              </div>
              <div class="d-flex span-detail">
                <span class="mb-3 font-weight-bold" style="max-width:23px;min-width:135px">Color</span>
                <span>:</span>
                <span class="ml-2">{{detail.color}}</span>
              </div>
              <div class="d-flex span-detail">
                <span class="mb-3 font-weight-bold" style="max-width:23px;min-width:135px">Release Date</span>
                <span>:</span>
                <span class="ml-2">{{detail.date}}</span>
              </div>
              <div class="d-flex span-detail">
                <span class="mb-3 font-weight-bold" style="max-width:23px;min-width:135px">Harga Retail</span>
                <span>:</span>
                <span class="ml-2">{{detail.price}}</span>
              </div>
              <div class="d-flex span-detail">
                <span class="mb-3 font-weight-bold" style="max-width:23px;min-width:135px">Jumlah</span>
                <span>:</span>
                <span class="ml-2">
                  <div class="d-flex">
                  <v-btn 
                    icon 
                    color="#2d2d2d"
                    :disabled="text.quantity === 1"
                    @click="removeQuantity">
                    <v-icon>mdi-minus-circle-outline</v-icon>
                  </v-btn>
                  <v-text-field
                    v-model="text.quantity"
                    class="mx-3 small-input qty-centered"
                    hide-details
                    required
                    solo
                    :rules="[(v) => v >= 1 || 'Minimal 1']"
                    type="number"
                    min="1"
                    dense
                    flat 
                    :style="$vuetify.breakpoint.xs ? 'width: 60px !important':'width:100px !important'"
                    single-line
                    outlined />
                  <v-btn 
                    icon 
                    color="#2d2d2d"
                    @click="addQuantity">
                    <v-icon>mdi-plus-circle-outline</v-icon>
                  </v-btn>
                  </div>
                </span>
              </div>
              <v-row class="mt-4">
                <v-col :class="$vuetify.breakpoint.xs ? 'pb-0':''" :cols="$vuetify.breakpoint.xs ? 12: $vuetify.breakpoint.sm ? 6: $vuetify.breakpoint.md ?  5:4">
                   <v-btn
                    depressed
                    outlined
                    large
                    color="black"
                    width="100%">
                    <v-icon 
                     left
                     small
                     class="mr-2"
                     color="black">
                     mdi-cart 
                    </v-icon>
                    Add To Cart
                  </v-btn>
                </v-col>
                <v-col :cols="$vuetify.breakpoint.xs ? 12: $vuetify.breakpoint.sm ? 6: $vuetify.breakpoint.md ?  5:4">
                  <v-btn
                  depressed
                  large
                  class="white--text"
                  color="#2d2d2d"
                  width="100%">
                  Beli Sekarang
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-sheet>
              <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                left>
                <v-tab
                  v-for="(item,i) in items"
                  :key="i">
                  {{ item }}
                </v-tab>
              </v-tabs>
            </v-sheet>
            <div class="mt-4" v-if="detail.tabs">
              <v-card  
                flat
                tile
                v-if="tab === 0">
                <v-card-title>Description</v-card-title>
                <v-card-text>{{detail.tabs.desc}}</v-card-text>
              </v-card>
              <v-card 
                flat
                tile
                class="rounded-lg mr-4"
                v-if="tab === 1">
                 <v-card-title>Information</v-card-title>
                <v-card-text>{{detail.tabs.info}}</v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideImage: 0,
      tab: null,
      loadingLoad: true,
      dataImage: null,
      items: ['Deskripsi','Informasi'],
      text:{
        quantity: 1,
      }
    }
  },
  computed :{
    detail(){
      return this.$store.state.detail
    },
  },
  mounted() {
    this.fetch()
    this.loading()
  },
  methods:{
    fetch(){
      this.$store.dispatch('getDetail',this.$route.params.id)
    },
    addQuantity(){
      return this.text.quantity++
    },
    removeQuantity(){
      return this.text.quantity--
    },
    loading(){
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      this.loading = false
    })
    },
    switchImage(index){
      this.dataImage = this.detail.thumbnailImages[index];
    }
  }
}
</script>