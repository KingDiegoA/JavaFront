<template>
  <v-card>
    <v-card-title>
      Filtro Miembros ACL
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nombre Completo',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Nacionalidad', value: 'calories' },
          { text: 'Codigo ACL', value: 'fat' },
          { text: 'Centro de Costos', value: 'carbs' },
          { text: 'Oportunidad', value: 'protein' },
          { text: 'Equipo ACL', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Diego San Martin',
            calories: "Chileno",
            fat: 2143,
            carbs: 202130035,
            protein: 2021,
            iron: "SI",
          },
          {
            name: 'Juan Pablo Riquelme',
            calories: "Chileno",
            fat: 771,
            carbs: 0,
            protein: 0,
            iron: "SI",
          },
          {
            name: 'Carlos Ramos',
           calories: "Chileno",
            fat: 1843,
            carbs: 0,
            protein: 0,
            iron: "NO",
          },
          {
            name: 'Roberto Barolome',
            calories: "Venezolano",
            fat: 2150,
            carbs: 202141004,
            protein: 193511,
            iron: "NO",
          },
          {
            name: 'Luis Mauri',
            calories: "Cubano",
            fat: 2024,
            carbs: 202141004,
            protein: 193752,
            iron: "NO",
          },
          {
            name: 'Jose Ortiz',
            calories: "Venezolano",
            fat: 2224,
            carbs: 202141033,
            protein: 193895,
            iron: "NO",
          },
        ],
      }
    },
  }
</script>