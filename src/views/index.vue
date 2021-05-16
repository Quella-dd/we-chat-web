<template>
    <div class="content-body">
        <div class="list-body">
            <div class="ui-icon-30 ui-user-header"></div>
            
            <siderBar></siderBar>

            <!-- <siderHeader></siderHeader>
            <ul>
                <li><router-link to="/sessions">会话列表</router-link></li>
                <li><router-link to="/users">用户列表</router-link></li>
                <li><router-link to="/requests">请求列表</router-link></li>
            </ul> -->

        </div>
        <div class="list-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import siderBar from '@/views/compent/side-bar'

export default {
    components: {
        siderBar
    }
}
</script>