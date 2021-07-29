<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Carga de Horas</h1>        
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

                <v-text-field v-model="miembro.horas"
                label="Horas" type="number" outlined required>
                </v-text-field>

                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="dates" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                    <v-combobox v-model="dates" outlined multiple chips small-chips label="Seleccione Dias" readonly v-bind="attrs" v-on="on"></v-combobox>
                    </template>
                    

                    <v-date-picker v-model="dates" multiple no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancelar</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(dates)"> OK </v-btn>
                    </v-date-picker>
                </v-menu>

               
                <v-card-actions class="justify-center">
                    <v-btn color="warning" block class="mr-4" type="submit">Cargar Horas</v-btn>
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
        dates: ['2021-12-30', '2021-12-01'],
         menu: false,
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
