<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Colaborador: <h3><br>{{miembro.nombre_empleado}}</h3>  </h1>      
        
      </v-col>     
    </v-row>
    <v-row>
        <v-col>       
            <v-card-actions class="justify-end">
                    <v-btn to="/miembros"   dark color="indigo"> <v-icon dark>mdi-backspace</v-icon></v-btn>
            </v-card-actions>

            <form v-on:submit.prevent="guardarMiembros()">
            <v-text-field v-model="miembro.rutificador"
                label="DNI" disabled outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.nombre_empleado"
                label="Nombre" disabled outlined required>
                </v-text-field>

                <v-select  filled  disabled dense label="Nacionalidad" v-model="miembro.nacionalidad" :items="items2"><v-text-field label="Pais"  outlined required> </v-text-field></v-select>

                <v-text-field type="email" v-model="miembro.correo_electronico"
                label="Correo Electronico" disabled outlined required>
                </v-text-field>

                <v-text-field type="date" v-model="miembro.fecha_ingreso"
                label="Fecha de Ingreso" outlined required>
                </v-text-field>

                <v-text-field type="date" v-model="miembro.fecha_termino"
                label="Fecha de Termino" outlined required>
                </v-text-field>
                
            
                <v-select  filled   dense label="Empresa" v-model="miembro.nombre_empresa" :items="items"><v-text-field  outlined required> </v-text-field></v-select>
                <v-select  filled   dense label="Equipo ACL" v-model="miembro.equipo" :items="items3"><v-text-field  outlined required> </v-text-field></v-select>

               
                <v-card-actions class="justify-center">
                    <v-btn color="warning" block class="mr-4" type="submit">Modificar</v-btn>
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
      axios.get('https://localhost/JavaFront/app/public/apirest/Members.php?id='+this.id)
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
        items: [
            'ACL',
            'Falabella',
            'Previred',
            'Cencosud',
            ],
            items2: [
            'CHILE',
            'VENEZUELA',
            'CUBA',
            'ARGENTINA',
            ],
            items3: [
            'SI',
            'NO',
            ],
        miembro:{
                rutificador:'',
                nombre_empleado:'',
                nacionalidad:'',
                correo_electronico:'',
                fecha_ingreso:'',
                fecha_termino:'',
                nombre_empresa:'',
                equipo:'',

        }
      }
    },
    methods:{
      guardarMiembros(){
         var router =  this.$router;
        axios.put('https://localhost/JavaFront/app/public/apirest/Members.php?id='+this.id+'&rutificador='+this.miembro.rutificador+'&nombre_empleado='+this.miembro.nombre_empleado+'&nacionalidad='+this.miembro.nacionalidad+'&correo_electronico='+this.miembro.correo_electronico+'&fecha_ingreso='+this.miembro.fecha_ingreso+'&fecha_termino='+this.miembro.fecha_termino+'&nombre_empresa='+this.miembro.nombre_empresa+'&equipo='+this.miembro.equipo)
        .then(function(){
           router.push('/miembros'); 
        })
        .catch(function(error){
        console.log(error);
        });
      }
    }
}
</script>