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

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus" @click="logout">logout</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-plus" @click="addUser">add user</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div>
            <userList></userList>
        </div>
    </div>
</template>

<script>
import userList from './user/user-list.vue'

export default {
    name: 'ChatList',

    data: function() {
        return {
            url: "./webwxgetmsgimg.jpeg",
            addUserActive: false
        }
    },

    methods: {
        logout: function() {
            window.location = '/#/';
        },

        addUser: function() {
            this.addUserActive = true
        }
    },

    computed: {
        getSessionName: function() {
            return JSON.parse(this.$session.get('user')).Name;
        }
    },

    components: {
        userList,
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
}

.header .icon img {
    height: 40px;
    width: 40px;
}
</style>