import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Web3 from 'web3'
// import 'lib-flexible'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import $ from 'jquery'

//bootstrap
import './assets/bootstrap-3.4.1-dist/css/bootstrap.css'
import './assets/bootstrap-3.4.1-dist/js/bootstrap.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
Vue.prototype.Web3 = Web3
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
