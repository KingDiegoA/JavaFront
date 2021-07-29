<template>
    <v-container>
        <v-row class="text-center">
            <v-col class ="mb-4">
                <h2 class="display-2 font-weight-bold mb-3"> Cargas de Horas ACL </h2>
            </v-col>
        </v-row>



        <v-row class="text-center">
        <v-col cols="12">
            
            <v-simple-table fixed-header class="elevation-3">
                
                <template v-slot:default>
                    
                    <thead>
                        <tr>
                        <th class="text-center">DNI</th>
                        <th class="text-center">Nombre Completo</th>
                        <th class="text-center">Codigo ACL</th>
                        <th class="text-center">Cargo</th>
                        <th class="text-center">Centro de Costos</th>
                        <th class="text-center">Oportunidad</th>
                        <th class="text-center">Mes</th>
                        <th class="text-center">Cantidad de Horas</th>
                        <th class="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="miembro in miembros" :key="miembro.id">
                        
                    <td>{{miembro.rutificador}}</td>
                    <td>{{miembro.nombre_empleado}}</td>
                    <td>{{miembro.codigoACL}}</td>
                     <td>{{miembro.cargo}}</td>
                    <td>{{miembro.cc}}</td>
                    <td>{{miembro.oportunidad}}</td>
                    <td>{{miembro.mes}}</td>
                    <td>{{miembro.horas}}</td>
                         <td>
                    <v-btn :to="{name:'modificarHoras', params:{id:miembro.id}}" x-small fab small color="primary"><v-icon>mdi-account-edit</v-icon></v-btn>
                    <v-btn :to="{name:'generarHoras', params:{id:miembro.id}}" x-small fab small color="primary"><v-icon>mdi-calendar</v-icon></v-btn>

                    </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        </v-row>

    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'horas',
    mounted(){
        this.obtenerMiembros();
    },
    data(){
        return{            
            dialog:false,
            miembros:null,
            horas:null,
            id:null,
            snackbar:false,
            textsnack:'Miembro Eliminado!'
        }
    },
    methods:{
        obtenerMiembros : function(){
            axios.get('https://localhost/JavaFront/app/public/apirest/members.php')

            .then(r => {
                this.miembros = r.data;
                console.log(this.miembros);
            })
            .catch(function(error){
                console.log(error);
            })

        },
    }
}
</script>