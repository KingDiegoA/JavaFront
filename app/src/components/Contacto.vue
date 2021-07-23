<template>
    <vcontainer>
        <v-row class="text-center">
            <v-col cols="12">
               <v-img :src="require('../assets/Logo_rojo.png')" class="my-3" contain height="150" ></v-img>
            </v-col>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Contacto Diego San Martin </h1>
            </v-col>
        </v-row>

        <v-row class="text-center">
        
            <v-col class="mb-4">
               <v-btn href="http://www.facebook.com/DiegoSanMartinx2" target="_blank" class="mx-10" fab dark large color="indigo darken-2">
               <v-icon dark>mdi-facebook</v-icon>
               </v-btn>
                <v-btn href="https://github.com/KingDiegoA/JavaFront" target="_blank" class="mx-10" fab dark large color="indigo darken-1">
               <v-icon dark>mdi-github</v-icon>
               </v-btn>
            </v-col>
        </v-row>


    </vcontainer>
</template>