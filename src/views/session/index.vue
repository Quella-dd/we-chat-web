<template>
    <div class="pannel-body">
        <div class="pannel-list">
            <template v-for="session of getSessons">
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
                        <button @click="deleteSession(session)">删除</button>
                    </div>
                </div>
            </template>
        </div>
        <div class="pannel-content">
            <router-view></router-view>
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
            console.log(this.session)
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
        getSessons: function() {
            return this.sessions
        }
    }
}
</script>