import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        user: {},
        users: [],
        currentUser: {},

        active: false,
        ws: {},

        /*
            ws: 监听服务器发送过来的事件，并且处理对应的事件，只是用于接收消息提示，不做其他用途
            currentUser: to show chatInfo
            users: action => users => show users (add/delete...)
            active: exam user status of active 
        */
    },
    
	mutations: {
        updateSessionUser: function({commit},  payload) {
            this.state.user = Object.assign({}, JSON.parse(payload))
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
            this.state.ws = new WebSocket("ws://localhost:9999/event?id=" + JSON.parse(payload).Name);
            
            this.state.ws.onmessage = function(msg) {
                console.log(msg.data)
            }
            
            this.state.ws.onopen = function() {
                console.log("open websocket")
            }
        }
    },
    
    actions: {
        login: async function({context}, payload) {
            // 用户登录成功后，则建立一条全局ws通道，来接收收到的消息提示
            return Vue.axios.post('/api/login', Object.assign({}, payload))
        },

        registry: async function({context}, payload) {
            return Vue.axios.post('/api/registry', Object.assign({}, payload))
        },

        getAllFriends: async function() {
            return Vue.axios.get('/api/friends/' + this.state.user.ID)
        },

        searchUsers: async function({context}, payload) {
            return Vue.axios.get('/api/search/users/' + payload.search)
        },

        addFriend: async function({context}, payload) {
            if (payload.key === 'Rooms') {
                return Vue.axios.post('/user/' + this.state.user.ID + '/room/' + payload.value)
            } else {
                return Vue.axios({
                    method: 'post',
                    url: '/api/friends/' + payload.value,
                    headers: {
                        'userID': this.state.user.ID
                    }
                })
            }
        },

        createGroup: function({context}, payload) {
            return Vue.axios.post('/api/create-group', payload.group)
        },

        deleteGroup: function({context}, payload) {
            return Vue.axios.delete('/api/delete-group/' + payload.groupID)
        },

        getMessage: async function({context}, payload) {
            let config = {
                headers: {
                    'userID': this.state.user.ID,
                }
            }
            return Vue.axios.get('/api/messages/' + payload.ID, config)
        },

        sendMessage: async function({context}, payload) {
            let config = {
                headers: {
                    'userID': this.state.user.ID,
                }
            }
            return Vue.axios.post('/api/sendMessage', payload, config)
        }
    }
})