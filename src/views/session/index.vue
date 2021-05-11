<template>
    <div class="pannel-body">
        <div v-if="sessions.length" class="pannel-list">
            <template v-for="session of sessions">
                <div :key="session.ID" :class="{'active': isActive(session)}"  @click="upadteSession(session)" class="user-item">
                    <div class="item-left">
                        <i class="ui-icon-50 ui-user-header"></i>
                    </div>
                    <div class="item-right">
                        <div class="title"> 
                            <div class="content">{{session.DisplayName}}</div>
                        </div>
                        <div class="content">{{session.LatestContent}}</div>
                    </div>
                    <div>
                        <div class="ui-icon-20 ui-icon-delete" @click="deleteSession(session)"></div>
                    </div>
                </div>
            </template>
        </div>
        <div v-if="sessions.length" class="pannel-content">
            <router-view :key="key"></router-view>
        </div>
        <div v-if="!sessions.length" class="pannel-list">
            <div>session列表为空</div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
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
        },

        deleteSession: async function(session) {
            await this.$store.dispatch('deleteSession', session)
            await this.refreshList()
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