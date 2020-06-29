<template>
    <div class="message-body">
        <!-- 输入框具体的操作，包括发送表情，截图，文件选择等 -->
        <div class="message-action"></div>

        <!-- 输入框 -->
        <div class="message-content">
            <div style="margin: 20px 0;"></div>
            <el-input type="textarea" v-model="value"></el-input>
        </div>
     
        <!-- enter 按钮以及 按钮描述信息 -->
        <div class="message-send">
            <el-button size="mini" @click="sendMesage">sendMessage</el-button>
        </div>
    </div>
</template>

<script>
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
               SourceID: JSON.parse(this.$session.get('user')).ID,
               DestID: this.$store.state.currentUser.ID,
               Body: this.value
            })

            console.log("ready to send message", this.value)
            this.cleanInputMessage();
        },
        cleanInputMessage: function() {
            this.value = '';
        }
    }
}
</script>


<style scoped>
.message-body
{
    border: 1px solid;
}

.message-action .textarea  {
    border: none;
}

.message-content {
    
}

.message-send {
    display: flex;
    flex-direction: row-reverse;
}
</style>