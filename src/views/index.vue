<template>
    <div class="content-body">
        <div class="list-body">
            <siderHeader></siderHeader>
            <ul>
                <li><router-link to="/sessions">会话列表</router-link></li>
                <li><router-link to="/users">用户列表</router-link></li>
                <li><router-link to="/requests">请求列表</router-link></li>
            </ul>
        </div>
        <div class="list-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import siderHeader from '@/views/popup/header'

export default {
    components: {
        siderHeader
    }
}
</script>