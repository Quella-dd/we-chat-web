<template>
    <div v-show="active" class="modal-box">
        <div class="modal-header">
            <div>添加用户</div>
            <div class="el-icon-close" @click="closeModal"></div>
        </div>
        <el-input placeholder="请输入内容" v-model="value">
            <el-button slot="append" icon="el-icon-search" @click="searchUser"></el-button>
        </el-input>
        <div class="modal-item">
            <template v-for="user of users">
                <div class="user-list" :key="user.Name">
                    <div>{{ user.Name }}</div>
                    <button @click="addFriend(user)">add friend</button>
                </div>
            </template>
            <div v-if="!users.length">
                暂无查询用户
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddUSer',
    data: function() {
        return {
            value: '',
            users: [],
            normalUsers: [],
            group: [],
            active: true
        }
    },
    methods: {
        searchUser: async function() {
            try {
                this.users = (await this.$store.dispatch('searchUsers', {
                    search: this.value
                })).data;
            } catch (e) {
                this.users = []
            }
        },

        sortUser: function() {
            this.users.forEach(user => {
                if (user.Type === 'user') {
                    this.normalUsers.push(user)
                } else {
                    this.group.push(user)
                }
            })
        },

        addFriend: async function(user) {
            await this.$store.dispatch('addFriend', {
                value: this.value
            })
        },
        
        closeModal:  function() {
            this.active = false;
        }
    }
}
</script>

<style scoped>
.modal-box {
    width: 50%;
    height: 50%;
    position: fixed;
    top: 100px;
    background-color:white;
    border: 1px solid;
    padding: 0 20px;
}

.modal-header {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-item {
    padding: 20px 20px;
}

.user-list {
    display: flex;
    justify-content: space-between;
}
</style>