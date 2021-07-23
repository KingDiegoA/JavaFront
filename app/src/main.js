import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//Componentes Adicionales
import inicio from './components/Inicio';
import crearMiembro from './components/CrearMiembros';
//import eliminar from './components/eliminar';
import listarMiembros from './components/ListarMiembros';
import modificarMiembro from './components/ModificarMiembros';

Vue.component('inicio', inicio);
Vue.component('listarMiembros', listarMiembros);
Vue.component('crearMiembro', crearMiembro);
Vue.component('modificarMiembro', modificarMiembro);


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
