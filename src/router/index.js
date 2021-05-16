import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Login',
		component: () => import(/* webpackChunkName: "system" */ '@/views/login/index.vue'),
	},
	{
		path: '/index',
		name: 'Index',
		component: () => import(/* webpackChunkName: "system" */ '@/views/index.vue'),

		children: [
			{
				path: '/sessions',
				name: 'sessions',
				component: () => import(/* webpackChunkName: "system" */ '@/views/session/index.vue'),
				children: [
					{
						path: '/sessions/:id',
						name: 'sessions', 
						component: () => import(/* webpackChunkName: "system" */ '@/views/session/view/index')

					},
				]
			},
			{
				path: '/users',
				name: 'users',
				component: () => import(/* webpackChunkName: "system" */ '@/views/user/index.vue'),
				children: [
					{
						path: '/users/:id',
						name: 'users', 
						component: () => import(/* webpackChunkName: "system" */ '@/views/user/views/view-profile')
					}
				]
			},

			{
				path: '/moments',
				name: 'moments',
				component: () => import(/* webpackChunkName: "system" */ '@/views/user/index.vue'),
			},

			{
				path: '/requests',
				name: 'requests',
				component: () => import(/* webpackChunkName: "system" */ '@/views/request/index.vue'),
			},
			// {
			// 	path: '/add-users',
			// 	name: 'add-users',
			// 	component: () => import(/* webpackChunkName: "system" */ '@/views/popup/add-friends.vue'),
			// },
			// {
			// 	path: '/new-chat',
			// 	name: 'new-chat',
			// 	component: () => import(/* webpackChunkName: "system" */ '@/views/popup/new-chat.vue'),
			// },
			
		]
	}]
})
