import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.use(Vuex);

// 添加token信息
Vue.axios.interceptors.request.use(function(config) {
  if (sessionStorage.getItem('token')) {
    config.headers['token'] = sessionStorage.getItem('token')
  }
  return config;
}, function(error) {
  return Promise.reject(error);
})

Vue.axios.interceptors.response.use(function(response) {
	if (response.config.url.indexOf('login') > -1) {
		return response;
	}
  return response.data;
}, function(error) {
  return Promise.reject(error)
})

// import PubSub from 'pubsub-js'

export default new Vuex.Store({
	state: {
		token: '',
		
		friends: [],

		session: {},
		sessions: {},

		user: {},
		users: {},
	},
    
	mutations: {
		updateToken: function(state, payload) {
			this.state.token = payload.token
		},

		updateUser: function(state, payload) {
			this.state.user = payload.user
		},

		updateFriends: function(state, payload) {
			this.state.friends = payload.friends
		},

		updateSessions: function(state, payload) {
			this.state.sessions = payload.sessions
		},

		updateSession: function(state, payload) {
			this.state.session = payload.session
		}

	},
    
	actions: {
		login: async function(context, payload) {
			let resp = await Vue.axios.post('/api/login', payload)
			if (resp.headers['token']) {
				context.commit('updateToken', {
						'token': resp.headers['token']
				})
				sessionStorage.setItem('token', resp.headers['token'])
			}
			context.commit('updateUser', {
				'user': resp.data
			})
		},

		initWs: async function() {
			let ws = new WebSocket('wss://localhost:10086/event')
			ws.onmessage = function(msg) {
				console.log(msg)
			}

			ws.onopen = function() {
				console.log("websocket opened")
			}
			
			ws.onerror = function(error) {
				console.log(error)
			}
		},
		
		register: async function(context, payload) {
			return Vue.axios.post('/api/register', payload)
		},


		// Friends API
		listFriends: async function(context) {
			let resp = await Vue.axios.get('/api/friends')
			context.commit('updateFriends', {
				'friends': resp
			})
			return resp
		},

		getUser: async function(contxt, payload) {
			let resp = await Vue.axios.get('/api/user/' + payload.ID);
			return resp;
		},

		addFriend: async function(context, payload) {
			return Vue,axios.post(`/api/friend/${payload}`)
		},

		deleteFriend: async function(context, payload) {
			return Vue.axios.delete(`/api/friend/${payload}`)
		},

		// Requests API
		listRequests: async function(context) {
			return Vue.axios.get('/api/requests')
		},

		getRequest: async function(context, payload) {
			return Vue.axios.get('/api/request/' + payload.ID)
		},

		ackRequest: async function(context, payload) {
			return Vue.axios.post(`/api/request/${payload}`)
		},

		deleteRequest: async function(context, payload) {
			return Vue.axios.delete(`/api/request/${payload}`)
		},

		// Groups API
		listGroups: async function() {
			return Vue.axios.get('/api/groups')
		},
		
		createGroup: async function(context, payload) {
			return Vue.axios.post('/api/group', payload)
		},
		
		updateGroup: async function(context, payload) {
			return Vue.axios.post(`/api/group/${payload.ID}`, payload)
		},

		getGroup: async function(context, payload) {
			return Vue.axios.get(`/api/group/${payload.ID}`)
		},

		getGroupInfo: async function(context, payload) {
			return Vue.axios.get(`/api/group/${payload.ID}?info`)
		},

		deleteGroup: async function(context, payload) {
			return Vue.axios.delete(`/api/group/${payload.ID}`)
		},

		// Group Actions
		joinGroup: async function({context}, payload) {
			return Vue.axios.post(`/api/join/group/${payload.GroupID}`, {
				UserID: `${payload.UserID}`
			})
		},

		leaveGroup: async function({context}, payload) {
			return Vue.axios.post(`/api/leave/group/${payload.GroupID}`, {
				UserID: `${payload.UserID}`
			})
		},

		// Sessions API
		listSessions: async function(context) {
			let resp = await Vue.axios.get('/api/sessions')
			context.commit('updateSessions', {
				'sessions': resp.sessions
			})
			return resp.sessions
		},

		createSession: async function(context, payload) {
			return Vue.axios.post('/api/session', payload)
		},

		getSession: async function(context, payload) {
			return Vue.axios.get(`/api/session/${payload.ID}`)
		},

		deleteSession: async function(context, payload) {
			return Vue.axios.delete(`/api/session/${payload.ID}`)
		},


		// Search Users
		searchUsers: async function(context, payload) {
				return Vue.axios.get(`/api/userSearch/${payload.search}`)
		},

		sendMessage: async function(context, payload) {
			return Vue.axios.post('/api/sendMessage', payload)
		},

		getMessages: async function(context, payload) {
			return Vue.axios.get('/api/messages/' + payload.ID)
		}
	}
})