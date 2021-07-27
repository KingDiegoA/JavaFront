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
            <v-text-field
                v-model="miembro.rutificador"        
                label="Rutificador"        
                outlined
                required       
            ></v-text-field>
            <v-text-field
                v-model="miembro.nombre"        
                label="Nombre"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="miembro.nacionalidad"        
                label="Nacionalidad"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="miembro.correo"        
                label="Correo"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="miembro.ingreso"        
                label="Ingreso"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="miembro.termino"        
                label="Termino"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="miembro.empresa"        
                label="Empresa"
                outlined
                required        
            ></v-text-field>
            <v-card-actions>
            <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
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
        miembro:{
          rutificador:'',
          nombre:'',
          nacionalidad:'',
          correo:'',
          ingreso:'',
          termino:'',
          empresa:''

        }
      }
    },
    methods:{
      guardarMiembros(){
         var router =  this.$router;
        axios.put('https://localhost/JavaFront/app/public/apirest/Members.php?id='+this.id+'&rutificador='+this.miembro.rutificador+'&nombre='+this.miembro.nombre+'&nacionalidad='+this.miembro.nacionalidad+'&correo='+this.miembro.correo+'&ingreso='+this.miembro.ingreso+'&termino='+this.miembro.termino+'&empresa='+this.miembro.empresa)
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