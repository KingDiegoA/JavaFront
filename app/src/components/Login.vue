<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Ingreso al Sistema ACL</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field name="login" label="Correo Electronico" type="email" required
                           ></v-text-field>
                           <v-text-field id="password" name="password" label="Password" type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                 
                        <v-card-actions>
                             <v-btn block color="primary" class="mr-2" type="submit">Acceder</v-btn>
                        </v-card-actions>
                        
                
                     
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
export default {
   name: 'Login',
   props: {
      source: String,
   },
};
</script>

<style></style>
