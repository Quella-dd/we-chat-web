import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/views/login/index'
import Index from '@/views/index'

// import AddUSer from '@/views/user/add'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/index',
		name: 'Index',
		component: Index,
		// children: [{
		// 	path: '/add-user',
		// 	name: 'AddUSer',
		// 	component: AddUSer
		// }]
	},
	]
})
