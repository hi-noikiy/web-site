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
		// {
		// 	path: '/ETFs',
		// 	name: 'ETFs',
		// 	component: resolve => {
		// 		require(['@/components/ETFs'], resolve);
		// 	}
			
		// },
		// {
		// 	path: '/details_ETFs',
		// 	name: 'details_ETFs',
		// 	component: resolve => {
		// 		require(['@/components/details_ETFs'], resolve);
		// 	}
			
		// },
	]
})