<template>
    <div class="list-body">
        <div class="header">
            <div class="icon">
                <img class="img" src="./webwxgetmsgimg.jpeg">
            </div>
            <div class="action">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <span> {{ getSessionName }}</span>
                    <button @click="addUser">add</button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus" @click="logout">logout</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-plus" @click="addUser">add user</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <AddUSer v-show="addUserActive" v-on:closeme="addUser"></AddUSer>
        <div class="body">
            <userList></userList>
        </div>
    </div>
</template>

<script>
import userList from './user/user-list.vue'
import AddUSer from './user/add.vue'

export default {
    name: 'ChatList',

    data: function() {
        return {
            addUserActive: false
        }
    },

    methods: {
        logout: function() {
            window.location = '/#/';
        },

        addUser: function() {
            this.addUserActive = !this.addUserActive
        }
    },

    computed: {
        getSessionName: function() {
            return JSON.parse(sessionStorage.getItem('user')).Name
        }
    },

    components: {
        userList,
        AddUSer
    }
}
</script>

<style scoped>
.list-body {
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid;
}

.header .icon img {
    height: 40px;
    width: 40px;
}

.body {
}
</style>