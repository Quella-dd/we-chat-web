<template :key="this.$store.state.currentUser.ID">
    <div class="listBody">
        <template v-for="message of messages">
            <div class="item-default" v-bind:class="{'item-right': getPosition(message)}" v-bind:key="message.Create_At">
                <div class="message-item">
                    <div>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </div>
                    <div>{{ message.Content }}</div>
                </div>
            </div>
        </template>
        <div v-if="!messages.length" class="empty-message">no message to show</div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
    name: 'UserInfo',
    data: function() {
        return {
            messages: [],
            user: JSON.parse(sessionStorage.getItem('user'))
        }
    },
    methods: {
        getPosition: function(msg) {
            return msg.SourceID === this.user.ID
        },

        refreshMessages: async function() {
            if (this.$store.state.currentUser && this.$store.state.currentUser.ID) {
                this.messages = (await this.$store.dispatch('getMessage', this.$store.state.currentUser.ID)).data[0]
                if (!this.messages) {
                    this.messages = []
                }
            }
        },

        scrollToBottom: function() {
            setTimeout(() => {
                let container = document.getElementsByClassName('listBody')[0]
                container.scrollTop = container.scrollHeight;
            }, 0)
        },
    },

    computed: {
        getCurrentUser() {
            return this.$store.state.currentUser
        }
    },

    watch: {
        getCurrentUser: async function(newVal, oldValue) {
            await this.refreshMessages();
            this.scrollToBottom()
        }
    },

    mounted: function() {
        PubSub.subscribe('messageSend', this.refreshMessages)
        this.scrollToBottom()
    }
}
</script>

<style scoped>
.empty-message {
    align-content: center;
}

.item-default {
    display: flex;
}

.item-right {
    flex-direction: row-reverse;
}

.message-item {
    font-size: 12px;
    padding: 2px 10px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    background-color: aliceblue;
    border-radius: 15px;
}
</style>