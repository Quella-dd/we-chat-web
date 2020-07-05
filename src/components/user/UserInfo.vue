<template>
    <div class="message-body">
        <!-- message 实例， 根据message的属性判断是否是当前用户所发出的判断message显示的未知（左/右） -->
        <template v-for="message of this.getMessages()">
            <!-- <div class="item-default" v-bind:class="{'item-right': getPosition(message)}"  v-bind:key="message.ID"> -->
            <div class="item-default" v-bind:key="message.Create_At">
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
export default {
    name: 'UserInfo',

    data: function() {
        return {
            messages: [],
            user: {},
        }
    },

    methods: {
        getPosition: function(msg) {
            return msg.userID === this.user.ID
        }
    },

    computed: {
        getMessages: async function() {
            if (this.user.ID) {
                this.messages = (await this.$store.dispatch('getMessage', this.user.ID)).data[0]
                this.messages = this.messages[0].Messages
            }
            return this.messages
        }
    },

    mounted: function() {
        this.user = this.$store.state.currentUser
    },

    watch: function() {
        
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
    display: flex;
    height: 35px;
    border: 1px solid;
    align-items: center;
    margin-top: 10px;
    background-color: darkcyan;
    border-radius: 15px;
}
</style>