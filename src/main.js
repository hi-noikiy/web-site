import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Web3 from 'web3'
Vue.prototype.Web3 = Web3
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
