import Vue from 'vue'
import App from './App.vue'
import router from '@/plugins/vuerouter.js';
import clickOutside from './diretivas/clickOutside.js';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.directive('click-outside', clickOutside)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
