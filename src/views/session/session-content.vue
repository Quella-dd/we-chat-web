<template :key="this.$store.state.currentUser.ID">
    <div class="listBody">
        <div class="content">
            <template v-for="message of messages">
                <div class="item-default" v-bind:class="{'item-right': getPosition(message)}" v-bind:key="message.Create_At">
                    <div class="message-item">
                        <div>
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        </div>
                        <div class="message-content">
                            <div class="name">{{ message.OwnerName }}</div>
                            <div class="content">{{ message.Content }}</div>
                        </div>
                    </div>
                </div>
            </template>
            <div id="bottom"></div>
        </div>
        <div v-if="!messages.length" class="empty-message">no message to show</div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            messages: [],
            session: {},
        }
    },
    methods: {
        getPosition: function(msg) {
            return msg.OwnerID === this.session.OwnerID;
        },

        refreshMessages: async function() {
            if (this.$store.state.session) {
                this.messages = await this.$store.dispatch('getMessages', {
                    'ID': this.$store.state.session.ID
                })
            }

            let element = document.getElementById('bottom')
            element.scrollIntoView()
        },
    },

    mounted: async function() {
        this.$event.sub("message", this.refreshMessages);
        await this.refreshMessages()
        this.session = this.$store.state.session
    },
}
</script>

<style scoped>
.list-body {
    padding: 10px 20px;
}

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
    border-radius: 15px;
}

.message-content {
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    padding: 10px 20px;
}

.content {
    margin-top: 10px;
}
</style>