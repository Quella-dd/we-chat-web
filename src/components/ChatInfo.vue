<template>
    <div class="body">
        <el-header>
            {{ userName }}
            <!-- <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right">下拉菜单</i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->
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

<style  scoped>
.body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin-left: 0;
}
.el-main {
    height: 100%;
    border-bottom: 1px solid;
}
.el-foot {
    padding: 0;
}
</style>