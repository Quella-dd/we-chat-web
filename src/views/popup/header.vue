<template>
    <div class="header">
        <div class="ui-icon-30 ui-user-header"></div>
        <!-- <div class="icon">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div> -->
        <div>{{ userName }}</div>
        <div class="action">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <i class="el-icon-s-unfold"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus" command="logout">Logout</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-plus" command="addFriend">Add Friends</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-plus" command="newChat">New Chat</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            
            <!-- <button @click="addUser">add</button> -->
            <!-- <addfriends v-show="aaa" v-on:closeme="backup"></addfriends> -->
        </div>

        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
    methods: {
        handleCommand: function(command) {
            switch (command) {
                case 'logout':
                    this.$router.push('/');
                    break;
                case 'addFriend':
                    this.$router.push('/add-users');
                    break
                case 'newChat':
                    this.$router.push('/new-chat');
            }
        },
    },

    computed: {
        userName() {
            return this.$store.state.user.Name;
        }
    }
}
</script>