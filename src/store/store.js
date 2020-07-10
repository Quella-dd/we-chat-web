import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import PubSub from 'pubsub-js'

export default new Vuex.Store({
	state: {
        user: {},
        users: [],
        currentUser: {},
        active: false,
        ws: {},
    },
    
	mutations: {
        updateSessionUser: function({commit},  payload) {
            this.state.user = Object.assign({}, payload)
        },

        setCurrentUser: function({commit}, payload) {
            if (payload.ID !== this.state.currentUser.ID) {
                this.state.currentUser = Object.assign({}, payload)
            }
        },

        updateUses: function({commit}, payload) {
            this.state.users = payload
        },

        createWs: function({commit}, payload) {
            this.state.ws = new WebSocket("ws://localhost:9999/event?id=" + payload.ID);
            
            this.state.ws.onmessage = function(msg) {
                PubSub.publish('refreshList', JSON.parse(msg.data))
            }
            
            this.state.ws.onopen = function() {
                console.log("open websocket")
            }
        }
    },
    
    actions: {
        login: async function({context}, payload) {
            return Vue.axios.post('/api/login', Object.assign({}, payload))
        },

        registry: async function({context}, payload) {
            return Vue.axios.post('/api/registry', Object.assign({}, payload))
        },

        getAllFriends: async function() {
            let user = JSON.parse(sessionStorage.getItem('user'))
            return Vue.axios({
                method: 'get',
                url: '/api/friends',
                headers: {
                    'userID': user.ID
                }
            })
        },

        searchUsers: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        addFriend: async function({context}, payload) {
            let user = JSON.parse(sessionStorage.getItem('user'))
            return Vue.axios({
                method: 'post',
                url: '/api/friends/' + payload,
                headers: {
                    'userID': user.ID
                }
            })
        },

        createGroup: function({context}, payload) {
            return Vue.axios.post('/api/create-group', payload.group)
        },

        deleteGroup: function({context}, payload) {
            return Vue.axios.delete('/api/delete-group/' + payload.groupID)
        },

        getMessage: async function({context}, payload) {
            let user = JSON.parse(sessionStorage.getItem('user'))
            let config = {
                headers: {
                    'userID': user.ID,
                }
            }
            return Vue.axios.get('/api/messages/' + payload, config)
        },

        sendMessage: async function({context}, payload) {
            let user = JSON.parse(sessionStorage.getItem('user'))

            let config = {
                headers: {
                    'userID': user.ID,
                }
            }
            return Vue.axios.post('/api/sendMessage', payload, config)
        }
    }
})