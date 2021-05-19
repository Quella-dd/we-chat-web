import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Login',
		component: () => import(/* webpackChunkName: "system" */ '@/views/login.vue'),
	},
	{
		path: '/index',
		name: 'Index',
		redirect: '/sessions',
		component: () => import(/* webpackChunkName: "system" */ '@/views/index.vue'),
		children: [
			{
				path: '/sessions',
				name: 'sessions',
				component: () => import(/* webpackChunkName: "system" */ '@/views/sessions.vue'),
				children: [
					{
						path: '/sessions/:id',
						name: 'session-profile', 
						component: () => import(/* webpackChunkName: "system" */ '@/views/session/view-profile')

					},
				]
			},
			{
				path: '/users',
				name: 'users',
				component: () => import(/* webpackChunkName: "system" */ '@/views/users.vue'),
				children: [
					{
						path: '/users/:id',
						name: 'user-profile', 
						component: () => import(/* webpackChunkName: "system" */ '@/views/user/view-profile')
					}
				]
			},
			{
				path: '/requests',
				name: 'requests',
				component: () => import(/* webpackChunkName: "system" */ '@/views/requests.vue'),
				children: [
					{
						path: '/requests/:id',
						name: 'request-profile',
						component: () => import(/* webpackChunkName: "system" */ '@/views/request/view-profile')
					}
				]
			},
			{
				path: '/moments',
				name: 'moments',
				component: () => import(/* webpackChunkName: "system" */ '@/views/moments.vue'),
			},
		]
	}]
})
