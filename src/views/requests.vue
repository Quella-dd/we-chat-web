<template>
    <div class="pannel-body">
        <div class="pannel-list">
            <div v-if="!requests.length" class="empty-content">
                <div>请求列表为空</div>
            </div>
            <template v-if="requests.length">
                <div v-for="request of requests" :key="request.ID">
                    <div class="request-item" @click="updateRequest(request)">
                        <i class="ui-icon ui-icon-40 ui-request-avator"></i>
                        <div class="request-content">
                            <div>{{request.UserID}} </div>
                            <div class="request-content-item">{{request.Content}}</div>
                        </div>
                        <div v-if="request.Status">请求已处理</div>
                    </div>
                    <hr>
                </div>
            </template>
        </div>
        <div class="pannel-content">
            <router-view :key="key"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            'requests': [],
        }
    },

    mounted: async function() {
        await this.refreshRequestList()
    },

    methods: {
        async refreshRequestList() {
            this.requests = await this.$store.dispatch('listRequests')
        },

        updateRequest(request) {
            this.$router.push('/requests/' + request.ID)
        }
    },

    computed: {
        key() {
            return this.$route.name !== undefined? this.$route.name + new Date(): this.$route + new Date()
        }
    }
}
</script>

<style lang="less" scoped>
.request-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    > .request-content {
        > .request-content-item {
            margin-top: 10px;
        }
    }
}
</style>
