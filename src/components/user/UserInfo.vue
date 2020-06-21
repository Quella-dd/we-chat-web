<template>
    <div class="message-body">
        <!-- message 实例， 根据message的属性判断是否是当前用户所发出的判断message显示的未知（左/右） -->
        <template v-for="message of messages">
            <div class="item-default" v-bind:class="{'item-right': getPosition(message)}"  v-bind:key="message.ID">
                <div class="message-item">
                    <div>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </div>
                    <div>{{ message.Content }}</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
/*
    客户端发送失败的数据是怎么展示在客户端的，这段数据会写入数据中心吗
    暂时不考虑数据的存储, 在固定的时间内，如果request 请求没有成功，则标记该消息为发送失败
    暂时所有的聊天记录保存在客户端缓存中
*/

export default {
    name: 'UserInfo',
    data: function() {
        return {
            userID: 2,
            messages: [
                {ID: 1, userID: 1, Content: "asdad", Icon: "aaa"},
                {ID: 2, userID: 2, Content: "asdad", Icon: "aaa"},
                {ID: 3, userID: 1, Content: "asdad", Icon: "aaa"},
                {ID: 4, userID: 2, Content: "asdad", Icon: "aaa"},
                {ID: 5, userID: 2, Content: "asdad", Icon: "aaa"},
                {ID: 6, userID: 1, Content: "asdad", Icon: "aaa"},
                {ID: 7, userID: 1, Content: "asdad", Icon: "aaa"},
                {ID: 8, userID: 1, Content: "asdad", Icon: "aaa"},
                {ID: 9, userID: 1, Content: "asdad", Icon: "aaa"},
                {ID: 0, userID: 1, Content: "asdad", Icon: "aaa"},
            ]
        }
    },

    methods: {
        getPosition: function(msg) {
            return msg.userID === this.userID
        }
    }
}
</script>

<style scoped>
.message-body {
    max-height: 80%;
    overflow-y: auto;
    border: 1px solid;
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
    /* display: inline-flex; */
    display: flex;
    height: 35px;
    border: 1px solid;
    align-items: center;
    margin-top: 10px;
    background-color: darkcyan;
    border-radius: 15px;
}
</style>