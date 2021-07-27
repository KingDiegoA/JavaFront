<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar Miembros ACL</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarMiembros()">
            <v-text-field v-model="miembro.rutificador"
                label="Rutificador" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.nombre_empleado"
                label="Nombre" outlined required>
                </v-text-field>

                 <v-select label="Pais" v-model="miembro.nacionalidad" :items="items2" dense filled solo outlined required></v-select>

                <v-text-field type="email" v-model="miembro.correo_electronico"
                label="Correo Electronico" outlined required>
                </v-text-field>

                <v-text-field type="date" v-model="miembro.fecha_ingreso"
                label="Fecha de Ingreso" outlined required>
                </v-text-field>

                <v-text-field type="date" v-model="miembro.fecha_termino"
                label="Fecha de Termino" outlined required>
                </v-text-field>
                
            
                <v-select label="ACL" v-model="miembro.nombre_empresa" :items="items" dense filled solo outlined required></v-select>

               
                <v-card-actions>
                    <v-btn color="warning" class="mr-4" type="submit">Crear</v-btn>
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
        miembro:{
                rutificador:'',
                nombre_empleado:'',
                nacionalidad:'',
                correo_electronico:'',
                fecha_ingreso:'',
                fecha_termino:'',
                nombre_empresa:'',

        }
      }
    },
    methods:{
      guardarMiembros(){
         var router =  this.$router;
        axios.put('https://localhost/JavaFront/app/public/apirest/Members.php?id='+this.id+'&rutificador='+this.miembro.rutificador+'&nombre_empleado='+this.miembro.nombre_empleado+'&nacionalidad='+this.miembro.nacionalidad+'&correo_electronico='+this.miembro.correo_electronico+'&fecha_ingreso='+this.miembro.fecha_ingreso+'&fecha_termino='+this.miembro.fecha_termino+'&nombre_empresa='+this.miembro.nombre_empresa)
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