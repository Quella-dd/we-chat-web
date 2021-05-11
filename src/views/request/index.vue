<template>
    <div class="pannel-body">
        <div v-if="requests.length" class="pannel-list">
            <template v-for="request of requests">
                <div :key="request.ID" class="user-item">
                    <div class="item-right">
                        <div class="title"> 
                            <div> {{request.UserID}} </div>
                            <div> {{request.AddID}} </div>
                        </div>
                        <div class="content">{{request.Content}}</div>
                    </div>
                    <div v-if="!request.Status">
                        <button @click="ackRequest(request)">同意</button>
                        <button @click="notAllowRequest(request)">不同意</button>
                    </div>
                    <div v-if="request.Status">
                        <div>请求已处理</div>
                    </div>
                </div>
            </template>
        </div>
        <div v-if="!requests.length">
            <div>请求列表为空</div>
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

        async ackRequest(request) {
            await this.$store.dispatch('ackRequest', request.ID)
            await this.refreshRequestList()
        },

        async notAllowRequest(request) {
            await this.$store.dispatch('deleteRequest', request.ID)
            await this.refreshRequestList()
        }
    }
}
</script>
