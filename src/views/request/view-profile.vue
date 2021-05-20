<template>
    <div class="profile">
        <div>{{request.User.Name}}</div>
        <hr>
        <div>{{request.Request.Content}}</div>
        <div>{{request.Request.CreatedAt}}</div>

        <div v-if="!request.Status">
            <el-button type="primary" @click="ackRequest">同意请求</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            request: {},
        }
    },

    methods: {
        async ackRequest() {
            await this.$store.dispatch('ackRequest', this.request.Request.ID)
            await this.refreshRequest()
        },

        async refreshRequest() {
            this.request = await this.$store.dispatch('getRequest', {
                'ID': this.$route.params.id
            });
        }
    },

    mounted: async function() {
        await this.refreshRequest()
    }
}
</script>

<style lang="less" scoped>
.profile {
    padding: 10% 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    hr {
        width: 100%;
    }
}
</style>
