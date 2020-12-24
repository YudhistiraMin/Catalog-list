<template>
  <v-app-bar
    fixed
    app
    height="70"
    style="background: #fff; box-shadow: rgba(0, 0, 0, 0.25) 0 3px 11px">
    <v-container>
      <v-row align="center">
        <v-col cols="6" sm="6">
          <v-row no-gutters sty>
            <v-col align-self="center" cols="2" class="mr-md-0 mr-xs-1">
              <nuxt-link to="/">
                <v-img
                  center
                  class="ma-auto"
                  contain
                  width="60"
                  :src="require('../assets/img/download.png')"/>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" sm="6">
          <v-row no-gutters sty>
            <v-col  class="text-right d-flex justify-end align-center py-0">
              <v-btn icon>
                <v-icon>mdi-email</v-icon>
              </v-btn>
              <v-btn icon :class="$vuetify.breakpoint.xs ? '':'mr-2'">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <template>
                <div>
                  <v-list-item class="pr-0">
                    <v-list-item-avatar class="align-self-start cursor-pointer mx-auto" size="30">
                      <v-img :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </div>
              </template>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>