<template>
    <div class="pannel-body">
        <div class="pannel-list">
            <div class="search">
                <div>
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input"></el-input>
                </div>
                <i class="ui-icon ui-icon-40 ui-icon-add" @click="toggleAddUser"></i>
            </div>

            <template v-if="addUser">
                <newChat v-on:close="toggleAddUser"></newChat>
            </template>

             <div v-if="!sessions.length" class="empty-content">
                <div>session列表为空</div>
            </div>

            <template v-if="sessions.length">
                <div v-for="session of sessions" :key="session.ID">
                    <div class="user-item" :class="{'active': isActive(session)}" @click="upadteSession(session)">
                        <div class="item-left">
                            <i class="ui-icon-50 ui-user-header"></i>
                        </div>
                        <div v-if="session.RoomID">群聊: {{session.ID}}</div>
                        <div class="item-right">
                            <div class="title"> 
                                <div class="content">{{session.DisplayName}}</div>
                            </div>
                            <div class="content">{{session.LatestContent}}</div>
                        </div>
                        <div class="ui-icon-20 ui-icon-delete" @click="deleteSession(session)"></div>
                    </div>
                    <hr>
                </div>
            </template>
        </div>

        <div class="pannel-content">
            <router-view :key="key"></router-view>
        </div>
    </div>
</template>

<script>
import newChat from '@/views/popup/new-chat'

export default {
    components: {
        newChat
    },

    data: function() {
        return {
            input: '',
            addUser: false,

            sessions: [],
            session: {}
        }
    },

    methods: {
        upadteSession: function(session) {
            this.session = session
            this.$store.commit('updateSession', {
                'session': session
            })
            this.$router.push('/sessions/' + session.ID)
        },

        isActive: function(session) {
            return this.$store.state.user.ID === session.Destination;
        },

        refreshList: async function() {
            this.sessions = await this.$store.dispatch('listSessions')
            if (!this.sessions) {
                this.sessions = [];
            }
        },

        deleteSession: async function(session) {
            await this.$store.dispatch('deleteSession', session)
            await this.refreshList()
        },

        toggleAddUser: function() {
            this.addUser = !this.addUser
        }
    },

    mounted: async function() {
        await this.refreshList()
    },
  
    computed: {
        key() {
            return this.$route.name !== undefined? this.$route.name + new Date(): this.$route + new Date()
        }
    }
}
</script>