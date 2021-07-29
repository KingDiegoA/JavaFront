<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Datos Carga de Horas</h1>      
        
      </v-col>     
    </v-row>
    <v-row>
        <v-col>       
            <v-card-actions class="justify-end">
                    <v-btn to="/horas"   dark color="indigo"> <v-icon dark>mdi-backspace</v-icon></v-btn>
            </v-card-actions>

            <form v-on:submit.prevent="guardarHoras()">

                <v-text-field v-model="miembro.nombre_empleado"
                label="Nombre" type="text" disabled outlined required>
                </v-text-field>
                <v-text-field v-model="miembro.codigoACL"
                label="Codigo ACL"  type="number" min="0" max="10000" outlined required>
                </v-text-field>
                <v-text-field v-model="miembro.cargo"
                label="Cargo"  outlined required>
                </v-text-field>
                <v-text-field v-model="miembro.cc"
                label="Centro de Costos"  type="number" min="0" max="1000000000" outlined required>
                </v-text-field>
                <v-text-field v-model="miembro.oportunidad"
                label="Oportunidad"  type="number" min="0" max="1000000" outlined required>
                </v-text-field>
               
                <v-card-actions class="justify-center">
                    <v-btn color="warning" block class="mr-4" type="submit">Implementar</v-btn>
                </v-card-actions>

                 

                
            </form>         
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'editarMiembros',
    mounted(){
      this.id = this.$route.params.id;
      console.log(this.$route);
      axios.get('https://localhost/JavaFront/app/public/apirest/members.php?id='+this.id)
      .then(r =>{
        this.miembro = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        id:null,
        miembro:{
                nombre_empleado:'',
                codigoACL:'',
                cargo:'',
                cc:'',
                oportunidad:'',

        }
      }
    },
    methods:{
      guardarHoras(){
         var router =  this.$router;
        axios.put('https://localhost/JavaFront/app/public/apirest/members.php?id='+this.id+'&nombre_empleado='+this.miembro.nombre_empleado+'&codigoACL='+this.miembro.codigoACL+'&cargo='+this.miembro.cargo+'&cc='+this.miembro.cc+'&oportunidad='+this.miembro.oportunidad)
        .then(function(){
           router.push('/horas'); 
        })
        .catch(function(error){
        console.log(error);
        });
      }
    }
}
</script>