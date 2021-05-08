<template>
    <div class="content-body">
        <div class="list-body">
            <div class="header">
                <div class="ui-icon-30 ui-user-header"></div>
                <!-- <div class="icon">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div> -->
                <div>admin</div>
                <div class="action">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            <i class="el-icon-s-unfold"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus" command="logout">logout</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-plus" command="addFriend">add user</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    
                    <!-- <button @click="addUser">add</button> -->
                    <!-- <AddUSer v-show="addUserActive" v-on:closeme="addUser"></AddUSer> -->
                </div>
            </div>

            <ul>
                <li><router-link to="/sessions">会话列表</router-link></li>
                <li><router-link to="/users">用户列表</router-link></li>
            </ul>
        </div>
        <div class="list-content">
            <router-view></router-view>
        </div>
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
                    this.addFriend();
            }
        },

        addFriend: function() {
            this.$router.push(this.$route.path + '/add-users');
        }
    }
}
</script>