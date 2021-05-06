<template>
    <el-container>
        <el-aside width="300px">
            <panel></panel>
        </el-aside>
        <el-main>
            <content></content>
        </el-main>
    </el-container>
</template>

<script>
import panel from '@/views/panel/index'
import content from '@/views/content/index'

export default {
    name: 'Index',
    data() {
        return {
            msg: 'this is index vue'
        }
    },
    components: {
        panel,
        content
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

.el-main {
    padding: 0;
}
</style>