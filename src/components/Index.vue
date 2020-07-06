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
    width: 70%;
    margin-left: 15%;
    height: 100%;
}

.el-container {
    height: 85%;
    border: 1px solid;
}

.el-aside {
}

.el-main {
    padding: 0;
}
</style>