<template>
    <div class="body">
        <div class="profile">
            <div class="profile-img">
                <div class="ui-icon-200 ui-user-header"></div>
            </div>
            <div class="profile-name">
                {{getUserName}}
            </div>
            <button @click="sendMessage">Message</button>
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

<style scoped>
.profile-img {
    display: flex;
    width: 30%;
}

.profile-name {
    font-size: 14px;
}
</style>
