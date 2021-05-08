<template>
    <div class="modal-box">
        <div class="modal-header">
            <div>添加用户</div>
            <div class="el-icon-close" @click="closeModal"></div>
        </div>
        <el-input placeholder="请输入内容"
            v-model="value"
            v-on:input="inputEvent"
            clearable>
        </el-input>
        <div class="modal-item">
            <template v-for="user of users">
                <div class="user-list" :key="user.ID">
                    <div>{{ user.Name }}</div>
                    <el-button type="primary" @click="addFriend(user)">添加好友</el-button>
                </div>
            </template>
            <div v-if="!users.length">暂无查询结果</div>
        </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
    name: 'AddUSer',
    data: function() {
        return {
            value: '',
            users: [],
        }
    },
    methods: {
        inputEvent: async function() {
            if (this.value !== '') {
                await this.searchUser()
            } else {
                this.users = []
            }
        },
        searchUser: async function() {
            try {
                this.users = (await this.$store.dispatch('searchUsers', {
                    search: this.value
                })).data;
            } catch (e) {
                this.users = []
            }
        },
        addFriend: async function(user) {
            await this.$store.dispatch('addFriend', user.ID)
            PubSub.publish('addUser');
            this.closeModal()
        },
        closeModal: function() {
            this.$emit("closeme"); 
        }
    }
}
</script>

<style scoped>
.modal-box {
    z-index: 1000;
    top: 25%;
    left: 25%;
    width: 50%;
    max-height: 50%;
    position: fixed;
    background-color:white;
    padding: 20px 20px;
    border: 1px solid black;
}

.modal-header {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-item {
    min-height: 100px;
    max-height: 150px;
    padding: 20px 20px;
    overflow-y: auto;
}

.user-list {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
}
</style>