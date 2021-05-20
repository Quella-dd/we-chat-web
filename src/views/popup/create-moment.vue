<template>
    <div class="modal-box">
        <div class="modal-header">
            <div>发表动态</div>
            <div class="el-icon-close" @click="cancel"></div>
        </div>
        <div class="modal-body">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="content"></el-input>
        </div>
        <div class="modal-footer">
            <el-button type="success" @click="create">发表动态</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: ''
        }
    },
    methods: {
        async create() {
            this.$store.dispatch('createMoment', {
                OwnerID: `${this.$store.state.user.ID}`,
                Content: this.content
            })
        },
        
        cancel() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="less" scoped>
.modal-box {
    display: flex;
    flex-direction: column;
}
</style>