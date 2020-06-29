<template>
    <div class="body">
        <el-container>
            <el-aside width="200px">
                <ChatList></ChatList>
            </el-aside>
            <el-main>
                <ChatInfo></ChatInfo>
            </el-main>
        </el-container>
        <addUser></addUser>
    </div>
</template>

<script>
import ChatList from '@/components/ChatList'
import ChatInfo from '@/components/ChatInfo'
import addUser from './user/add.vue'


/*
    1. get Active item to render chatInfo
    2. get Active item to render active item in chatList

    3. active item type　(user/group), active item's type decide to shwo actions and information
*/

export default {
    name: 'Index',

    data() {
        return {
            msg: 'this is index vue'
        }
    },

    components: {
        ChatList,
        ChatInfo,
        addUser
    }
}
</script>

<style scoped>
.body {
    width: 50%;
    margin-left: 25%;
}
</style>