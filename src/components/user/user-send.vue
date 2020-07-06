<template>
    <div>
        <!-- 输入框具体的操作，包括发送表情，截图，文件选择等 -->
        <div class="message-action"></div>
        <div class="message-content">
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="value"></el-input>
        </div>
        <div class="message-send">
            <el-button size="mini" @click="sendMesage">sendMessage</el-button>
        </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    name: 'userSend',
    data:function() {
        return {
            value: '',
        }
    },
    methods: {
        sendMesage: function() {
            this.$store.dispatch('sendMessage', {
                Type: 0,
                SourceID: JSON.parse(sessionStorage.getItem('user')).ID,
                DestinationID: this.$store.state.currentUser.ID,
                Content: this.value
            })

            PubSub.publish('messageSend', this.value)
            this.cleanInputMessage();
        },
        cleanInputMessage: function() {
            this.value = '';
        }
    }
}
</script>


<style scoped>
.message-action .textarea  {
    border: none;
}
.message-send {
    display: flex;
    flex-direction: row-reverse;
}

.el-textarea__inner {
    border: none;
}
</style>