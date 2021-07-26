<template>
    <v-container>
        <v-row class="text-center">
            <v-col class ="mb-4">
                <h2 class="display-2 font-weight-bold mb-3">Creacion de Miembros ACL </h2>
            </v-col>
        </v-row>


    <v-row>
        <v-col>
            <form v-on:submit.prevent="crearMiembro()">
                <v-text-field v-model="miembro.rutificador"
                label="Rutificador" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.nombre"
                label="Nombre" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.nacionalidad"
                label="Nacionalidad" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.correo"
                label="Correo" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.ingreso"
                label="Ingreso" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.termino"
                label="Termino" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.empresa"
                label="Empresa" outlined required>
                </v-text-field>
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
    name:'crearMiembro',
     data(){
        return{
            miembro:{
                rutificador:'',
                nombre:'',
                nacionalidad:'',
                correo:'',
                ingreso:'',
                termino:'',
                empresa:'',
            }
        };
    },
    methods:{
        crearMiembro(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('rutificador',this.miembro.rutificador);
           formData.append('nombre',this.miembro.nombre);
           formData.append('nacionalidad',this.miembro.nacionalidad);
           formData.append('correo',this.miembro.correo);
           formData.append('ingreso',this.miembro.ingreso);
           formData.append('termino',this.miembro.termino);
           formData.append('empresa',this.miembro.empresa);
           axios.post('https://localhost/JavaFront/app/public/apirest/Members.php',formData)
           .then(()=>{
               router.push('/miembros');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }
}
</script>