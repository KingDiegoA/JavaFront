<template>
    <v-container>
        <v-row class="text-center">
            <v-col class ="mb-4">
                <h2 class="display-2 font-weight-bold mb-3">Creacion de Miembros ACL </h2>
            </v-col>
        </v-row>


    <v-row>
        <v-col>
            <v-card-actions class="justify-end">
                    <v-btn to="/miembros"   dark color="indigo"> <v-icon dark>mdi-backspace</v-icon></v-btn>
            </v-card-actions>
            
            <form v-on:submit.prevent="crearMiembro()">
                <v-text-field v-model="miembro.rutificador"
                label="DNI" outlined required>
                </v-text-field>

                <v-text-field v-model="miembro.nombre_empleado"
                label="Nombre Completo" outlined required>
                </v-text-field>

                <v-select  filled   dense label="Nacionalidad" v-model="miembro.nacionalidad" :items="items2"><v-text-field label="Pais" outlined required> </v-text-field></v-select>

                <v-text-field type="email" v-model="miembro.correo_electronico"
                label="Correo Electronico" outlined required>
                </v-text-field>

                <v-text-field type="date" v-model="miembro.fecha_ingreso"
                label="Fecha de Ingreso" outlined required>
                </v-text-field>
            <datepicker :bootstrap-styling="true"
                                class="form-control"
                                :open-date="openDate"
                                :format="customFormatter"
                                v-model="event_at">
                    </datepicker>
                <v-text-field type="date" v-model="miembro.fecha_termino"
                label="Fecha de Termino" outlined required>
                </v-text-field>

                <v-select  filled   dense label="Cliente" v-model="miembro.nombre_empresa" :items="items"><v-text-field  outlined required> </v-text-field></v-select>

                <v-select  filled   dense label="Equipo ACL" v-model="miembro.equipo" :items="items3"><v-text-field  outlined required> </v-text-field></v-select>
                

               
                <v-card-actions class="justify-center">
                    <v-btn color="warning" block class="mr-4" type="submit">Crear</v-btn>
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
        };
    },
    methods:{
        
        crearMiembro(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('rutificador',this.miembro.rutificador);
           formData.append('nombre_empleado',this.miembro.nombre_empleado);
           formData.append('nacionalidad',this.miembro.nacionalidad);
           formData.append('correo_electronico',this.miembro.correo_electronico);
           formData.append('fecha_ingreso',this.miembro.fecha_ingreso);
           formData.append('fecha_termino',this.miembro.fecha_termino);
           formData.append('nombre_empresa',this.miembro.nombre_empresa);
           formData.append('equipo',this.miembro.equipo);
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