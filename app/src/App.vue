<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary app clipped>
    <v-list>
      <v-list-item :to="{path: '/'}">
      <v-list-item-action>
        <v-icon>mdi-{{ icons[0] }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{path: '/miembros'}">
      <v-list-item-action>
      <v-icon>mdi-{{ icons[1] }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Miembros</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
       <v-list-item :to="{path: '/horas'}">
      <v-list-item-action>
      <v-icon>mdi-{{ icons[2] }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Carga de Horas</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{path: '/estadisticas'}">
      <v-list-item-action>
      <v-icon>mdi-{{ icons[3] }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Estadisticas</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{path: '/beneficios'}">
      <v-list-item-action>
      <v-icon>mdi-{{ icons[4] }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Beneficios</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{path: '/contacto'}">
      <v-list-item-action>
      <v-icon>mdi-{{ icons[5] }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Contacto</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    
    <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
      <v-system-bar color="red lighten-2 black--text"> <v-spacer></v-spacer>
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-twitter</v-icon>
        <v-icon>mdi-instagram</v-icon>

        </v-system-bar>
      <v-app-bar class="white">
        <v-app-bar-nav-icon @click="drawer=true" class="black--text"></v-app-bar-nav-icon>
        
        <v-toolbar-title>
          <v-list-item :to="{path:'/'}">
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://www.acl.cl/wp-content/uploads/2021/06/Positivo.png?x68645"  
            transition="scale-transition" width="60" :to="{path: '/'}"/>
          </v-list-item>
        </v-toolbar-title>
      </v-app-bar>
      
      <v-main>
        
        <v-container fluid>
          <v-fase-transition mode="out-in">
            <router-view></router-view>
          </v-fase-transition>
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>
<script>
  export default {
  components: {  },
   name: 'App',
   data: () =>({
     icons:['home','account','clock-outline','finance','seal','email'],
     drawer: false,
   }),
  };
</script>