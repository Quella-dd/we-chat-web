<template>
    <div class="profile">
        <i class="ui-icon ui-icon-200 ui-user-header"></i>
        <div class="profile-name">{{ getUserName }}</div>
        <div>
            <el-button @click="sendMessage">发送消息</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {},
        }
    },

    computed: {
        getUserName: function() {
            return this.user.Name;
        },
    },

    methods: {
        async sendMessage() {
            await this.$store.dispatch('createSession', {
                'DestinationID': `${this.user.ID}`
            })
            
            this.$router.push('/sessions')
        }
    },

    mounted: async function() {
        this.user = await this.$store.dispatch('getUser', {
            'ID': this.$route.params.id
        });
    }
}
</script>

<style lang="less" scoped>
.profile {
    padding: 10% 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > .profile-name {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>
