<template>
    <v-container>
        <v-row class="text-center">
            <v-col class ="mb-4">
                <h2 class="display-2 font-weight-bold mb-3">Miembros ACL </h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mb-1">
                <v-btn :to="{name: 'crearMiembro'}" class="mx-2" x-large fab dark color="indigo">
                <v-icon dark>mdi-account-plus</v-icon>
                </v-btn>
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
                        <th class="text-center">Nacionalidad</th>
                        <th class="text-center">Cliente</th>
                        <th class="text-center">Correo Electronico</th>
                        <th class="text-center">Fecha de Ingreso</th>
                        <th class="text-center">Fecha de Termino</th>
                        <th class="text-center">Equipo ACL</th>
                        <th class="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="miembro in miembros" :key="miembro.id">
                    <td>{{miembro.rutificador}}</td>
                    <td>{{miembro.nombre_empleado}}</td>
                    <td>{{miembro.nacionalidad}}</td>
                     <td>{{miembro.nombre_empresa}}</td>
                    <td>{{miembro.correo_electronico}}</td>
                    <td>{{miembro.fecha_ingreso}}</td>
                    <td>{{miembro.fecha_termino}}</td>
                    <td>{{miembro.equipo}}</td>

                         <td>
                    <v-btn :to="{name:'modificarMiembro', params:{id:miembro.id}}" x-small fab small color="primary"><v-icon>mdi-account-edit</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=miembro.id" x-small fab small color="error"><v-icon>mdi-account-remove</v-icon></v-btn>
                    </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Eliminar Miembro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
        
       <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:'listarMiembros',
    mounted(){
        this.obtenerMiembros();
    },
    data(){
        return{            
            dialog:false,
            miembros:null,
            id:null,
            snackbar:false,
            textsnack:'Miembro Eliminado!'
        }
    },
    methods:{
        obtenerMiembros : function(){
            axios.get('https://localhost/JavaFront/app/public/apirest/Members.php')
            .then(r => {
                this.miembros = r.data;
                console.log(this.miembros);
            })
            .catch(function(error){
                console.log(error);
            })

        },
        
        confirmarBorrado(id){            
            axios.delete('https://localhost/JavaFront/app/public/apirest/Members.php?id='+id)
            .then(()=>{
                    this.obtenerMiembros();
                    this.dialog = false;
                    this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
                  this.obtenerMiembros();
            });    
        }
    }
}
</script>