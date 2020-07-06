<template>
    <div class="body">
        <el-header>
            {{ userName }}
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

export default {
	name: 'ChatInfo',
	components: {
		UserInfo,
		userSend
    },
    computed: {
        userName: function() {
            return this.$store.state.currentUser ? this.$store.state.currentUser.Name : 'default'
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