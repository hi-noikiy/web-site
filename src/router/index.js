/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/home'
Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: resolve => {
				require(['@/components/home'], resolve);
			}
			
		},
		{
			path: '/cookies',
			name: 'cookies',
			component: resolve => {
				require(['@/components/cookies'], resolve);
			}
		},
		{
			path: '/Disclaimer',
			name: 'Disclaimer',
			component: resolve => {
				require(['@/components/Disclaimer'], resolve);
			}
		},
		{
			path: '/policy',
			name: 'policy',
			component: resolve => {
				require(['@/components/policy'], resolve);
			}
			
		},
	]
})