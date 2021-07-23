<template>
    <v-container>
        <v-row class="text-center">
            <v-col class ="mb-4">
                <h2 class="display-2 font-weight-bold mb-3">Modificar de Miembros ACL </h2>
            </v-col>
        </v-row>


    <v-row>
        <v-col>
            <form v-on:submit.prevent="modificarMiembro()">
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
export default {
    name:'modificarMiembro'
}
</script>