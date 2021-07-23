<template>
    <v-container>
        <v-row class="text-center">
            <v-col class ="mb-4">
                <h2 class="display-2 font-weight-bold mb-3"> Listado de Miembros ACL </h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mb-1">
                <v-btn :to="{name: 'crearMiembro'}" class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </v-col>
            </v-row>


        <v-row class="text-center">
        <v-col cols="12">
            <v-simple-table fixed-header class="elevation-3">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Rutificador</th>
                            <th class="text-center">Nombre</th>
                            <th class="text-center">Nacionalidad</th>
                            <th class="text-center">Correo</th>
                            <th class="text-center">Ingreso</th>
                            <th class="text-center">Termino</th>
                            <th class="text-center">Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="miembro in miembros" :key="miembro.ID">
                        <td>{{miembro.ID}}</td>
                        <td>{{miembro.rutificador}}</td>
                        <td>{{miembro.nombre}}</td>
                        <td>{{miembro.nacionalidad}}</td>
                        <td>{{miembro.correo}}</td>
                        <td>{{miembro.ingreso}}</td>
                        <td>{{miembro.termino}}</td>
                        <td>{{miembro.empresa}}</td>

                        <td>
                            <v-btn fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                            <v-btn fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                        </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="350">
            <v-card>
                <v-card-title class="headline">¿Eliminar Miembro? </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false">Cancelar</v-btn>
                    <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        
        <v-snackbar v-model ="snackbar" color="success"> {{textsnack}}
            <template v-slot:action="{attrs}">
                <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
            </template>

        </v-snackbar>

    </v-container>
</template>

<script>
export default {
    name:'listarMiembros'
}
</script>