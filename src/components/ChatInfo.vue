<template>
    <div class="body">
        <el-header>
            {{ userName }}
            <span class="el-dropdown-link" @click="toggle">
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <Session v-show="active"></Session>
        </el-header>
        <el-main>
            <UserInfo></UserInfo>
        </el-main>
        <el-footer>
            <userSend></userSend>
        </el-footer>
    </div>
</template>

<script>
import UserInfo from './user/UserInfo.vue'
import userSend from './user/user-send.vue'
import Session from './user/session.vue'

export default {
	name: 'ChatInfo',
	components: {
		UserInfo,
        userSend,
        Session
    },
    computed: {
        userName: function() {
            return this.$store.state.currentUser ? this.$store.state.currentUser.Name : 'default'
        }
    },
    data: function() {
        return {
            active: false
        }
    },
    methods: {
        toggle: function() {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
.body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin-left: 0;
    border-left: 1px solid;
}
.el-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid;
}

.el-main {
    padding: 0;
    height: calc(100% - 142px);
    overflow: auto;
    border-bottom: 1px solid;
}

.el-footer {
    padding: 0;
}
</style>