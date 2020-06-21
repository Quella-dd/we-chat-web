<template>
    <div>
        <el-container>
            <el-header>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单
						<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>

            <el-main>
				<UserInfo></UserInfo>
			</el-main>
			
            <el-footer>
				<userSend></userSend>
			</el-footer>
        </el-container>
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
	}
}
</script>
