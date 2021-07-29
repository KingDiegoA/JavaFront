<template>
    <v-container>
        <v-row class="text-center">
                <v-col>
                    <a><v-img :src="require('@/assets/acl5.png')"  height="200px">  </v-img> </a>
                </v-col>
        </v-row>
           <v-row class="text-center">

                <v-col cols="6" sm="4" >
                    <v-card>
                        <v-card>
                            <a href="/horas">
                          <v-img :src="require('@/assets/acl.jpg')" class="white--text" height="300px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">Carga de Hora</span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                        </v-img>
                          </a>
                    </v-card>
                    </v-card>
                </v-col>

                 <v-col cols="6" sm="4" >
                    <v-card>
                        <v-card>
                            <a href="/miembros">
                          <v-img :src="require('@/assets/acl2.jpg')" class="white--text" height="300px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">Miembros</span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                        </v-img>
                          </a>
                    </v-card>
                    </v-card>
                </v-col>

                <v-col cols="6" sm="4" >
                    <v-card>
                        <v-card>
                            <a href="/estadisticas">
                          <v-img :src="require('@/assets/acl3.jpg')" class="white--text" height="300px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">Estadisticas</span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                        </v-img>
                          </a>
                    </v-card>
                    </v-card>
                </v-col>
             </v-row>
            
            <v-row class="text-center">
                <v-col>
                    <a><v-img :src="require('@/assets/acl00.png')"   max-height="500" >  </v-img> </a>
                </v-col>
             </v-row>

              


    </v-container>
    
</template>

<script>
export default {
    name:'inicio'
}
</script>

