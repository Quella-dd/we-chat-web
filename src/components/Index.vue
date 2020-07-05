<template>
    <div class="body">
        <el-container>
            <el-aside width="300px">
                <ChatList></ChatList>
            </el-aside>
            <el-main>
                <ChatInfo></ChatInfo>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import ChatList from '@/components/ChatList'
import ChatInfo from '@/components/ChatInfo'

export default {
    name: 'Index',
    data() {
        return {
            msg: 'this is index vue'
        }
    },
    components: {
        ChatList,
        ChatInfo
    }
}
</script>

<style scoped>
.body {
    width: 50%;
    margin-left: 25%;
    height: 100%;
}

.el-container {
    height: 100%;
}

.el-aside {
    border: 1px solid red;
}

.el-main {
    border: 1px solid red;
}
</style>