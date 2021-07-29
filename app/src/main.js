import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
Vue.prototype.$http = axios;

//Importar Vue-Router
import VueRouter from 'vue-router'

//Componentes Adicionales
import inicio from './components/Inicio';
import crearMiembro from './components/CrearMiembros';
import listarMiembros from './components/ListarMiembros';
import modificarMiembro from './components/ModificarMiembros';
import contacto from './components/Contacto';
import login from './components/Login';
import horas from './components/Horas';
import modificarHoras from './components/ModificarHoras';
import generarHoras from './components/Calendarizar';
import estadisticas from './components/Estadisticas';

//Creacion de los componentes
Vue.component('inicio', inicio);
Vue.component('listarMiembros', listarMiembros);
Vue.component('crearMiembro', crearMiembro);
Vue.component('modificarMiembro', modificarMiembro);
Vue.component('contacto', contacto);
Vue.component('login', login);
Vue.component('horas', horas);
Vue.component('modificarHoras', modificarHoras);
Vue.component('generarHoras', generarHoras);
Vue.component('estadisticas', estadisticas);

//Uso de Vue-Router
Vue.use(VueRouter);

//Definicion de Rutas
const routes = [
  {path:'/', component:inicio},
  {path:'/inicio', component:inicio},
  {path:'/miembros', component:listarMiembros},
  {path:'/crear', component:crearMiembro, name:'crearMiembro'},
  {path:'/EditarMiembro/:id', component:modificarMiembro, name:'modificarMiembro'},
  {path:'/ModificarDatosHoras/:id', component:modificarHoras, name:'modificarHoras'},
  {path:'/AgregarHoras/:id', component:generarHoras, name:'generarHoras'},
  {path:'/contacto/', component:contacto},
  {path:'/login/', component:login},
  {path:'/horas/', component:horas},
  {path:'/estadisticas/', component:estadisticas},
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