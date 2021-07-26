import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//Importar Vue-Router
import VueRouter from 'vue-router'


//Componentes Adicionales
import inicio from './components/Inicio';
import crearMiembro from './components/CrearMiembros';
//import eliminar from './components/eliminar';
import listarMiembros from './components/ListarMiembros';
import modificarMiembro from './components/ModificarMiembros';
import contacto from './components/Contacto';

//Creacion de los componentes
Vue.component('inicio', inicio);
Vue.component('listarMiembros', listarMiembros);
Vue.component('crearMiembro', crearMiembro);
Vue.component('modificarMiembro', modificarMiembro);
Vue.component('contacto', contacto);



//Uso de Vue-Router
Vue.use(VueRouter);
//Definicion de Rutas
const routes = [
  {path:'/', component:inicio},
  {path:'/inicio', component:inicio},
  {path:'/miembros', component:listarMiembros},
  {path:'/crear', component:crearMiembro},
  {path:'/editar/:id', component:modificarMiembro},
  {path:'/contacto/', component:contacto},
]
//Creacion del Objeto
const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
