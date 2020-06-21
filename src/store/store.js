import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        user: {},
        active: false,
        // currentUser: {},
        users: [],
        ws: {},

        /*
            ws: 监听服务器发送过来的事件，并且处理对应的事件，只是用于接收消息提示，不做其他用途
            currentUser: to show chatInfo
            users: action => users => show users (add/delete...)
            active: exam user status of active 
        */
    },
    
	mutations: {
        // updateSessionUser: function({},  payload) {
        //     this.state.user = Object.assign({}, payload)
        // },

        // updateCurrentUser: function({}, payload) {
        //     this.state.currentUser = Object.assign({}, payload.user)
        // },

        createWs: function() {
            this.state.ws = new WebSocket("ws://localhost:9999/event?id=" + this.state.user.user.Name);
            
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
            /*
                用户登录成功后，则建立一条全局ws通道，来接收收到的消息提示
            */
            return Vue.axios.post('/api/login', {...payload})
        },

        registry: async function({context}, payload) {
            return Vue.axios.post('/api/registry', {...payload})
        },

        getAllFriends: async function() {
            return Vue.axios.get('/api/friends/1');
        },

        searchUsers: async function({context}, payload) {
            return Vue.axios.get('/api/users/' + payload.search);
        },

        addFriend: async function({context}, payload) {
            debugger;
            return Vue.axios({
                method: 'post',
                url: '/api/friends/' + payload.value,
                headers: {
                    'userID': 1
                }
            })
        },

        createGroup: function({context}, payload) {
            return Vue.axios.post('/api/create-group', payload.group)
        },

        deleteGroup: function({context}, payload) {
            return Vue.axios.delete('/api/delete-group/' + payload.groupID)
        },

        sendMessage: async function({context}, payload) {
            /*
                send: this.$store.user.useID,
                receiver: {
                    type: user/group,
                    instanceID: useID/groupID,
                }
                content:
            */

            /*
                receiver: 1,
                content: this.value
            */
            return Vue.axios.post('/api/sendmessage', payload)
        }
    }
})