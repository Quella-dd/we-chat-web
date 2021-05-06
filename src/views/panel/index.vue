<template>
    <div class="list-body">
        <div class="header">
            <div class="icon">
                <!-- <img class="img" src="@/componemts/webwxgetmsgimg.jpeg"> -->
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
                <AddUSer v-show="addUserActive" v-on:closeme="addUser"></AddUSer>
            </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="session" name="first">
                <sessions></sessions>
            </el-tab-pane>
            <el-tab-pane label="users" name="second">
               <users></users>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import sessions from '@/views/session/index'

import users from '@/views/user/index'

import AddUSer from '@/views/session/popup/add'

export default {
    components: {
        sessions,
        users,
        AddUSer
    },

    name: 'ChatList',
    data: function() {
        return {
            addUserActive: false,
            activeName: 'first'
        }
    },
    methods: {
        logout: function() {
            window.location = '/#/';
        },

        addUser: function() {
            this.addUserActive = !this.addUserActive
            // this.$router.push('index/add-user')
        }
    },
    computed: {
        getSessionName: function() {
            // return JSON.parse(sessionStorage.getItem('user')).Name
            return "admin"
        }
    },
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid;
    height: 50px;
}

.header .icon img {
    height: 40px;
    width: 40px;
}

.body {
}
</style>