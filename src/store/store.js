import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import PubSub from 'pubsub-js'

export default new Vuex.Store({
	state: {
        user: {},
        users: [],
        currentUser: {},
        active: false,
        ws: {},
        token: ''
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

        // createWs: function({commit}, payload) {
        //     this.state.ws = new WebSocket("ws://localhost:9999/event?id=" + payload.ID);
            
        //     this.state.ws.onmessage = function(msg) {
        //         PubSub.publish('refreshList', JSON.parse(msg.data))
        //     }
            
        //     this.state.ws.onopen = function() {
        //         console.log("open websocket")
        //     }
        // }
    },
    
    actions: {
        login: async function({context}, payload) {
            return Vue.axios.post('/api/login', Object.assign({}, payload))
        },

        register: async function({context}, payload) {
            return Vue.axios.post('/api/register', Object.assign({}, payload))
        },


        // Friends API
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

        deleteFriend: async function({context}, payload) {
            let user = JSON.parse(sessionStorage.getItem('user'))
            return Vue.axios({
                method: 'delete',
                url: '/api/friends/' + payload,
                headers: {
                    'userID': user.ID
                }
            })
        },

        // Requests API
        listRequests: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        ackRequest: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        deleteRequest: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },


        // Groups API
        listGroups: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },
        
        createGroup: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },
        
        updateGroup: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        getGroup: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        deleteGroup: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },


        // Group Actions
        joinGroup: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        leaveGroup: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        // Sessions API
        listSessions: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        createSession: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        getSession: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        deleteSession: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },


        // Search Users
        searchUsers: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },


        // Send && Get messages from Session TODO
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