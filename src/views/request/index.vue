<template>
    <div class="pannel-body">
        <div class="pannel-list">
            <template v-for="request of requests">
                <div :key="request.ID" class="user-item">
                    <div class="item-right">
                        <div class="title"> 
                            <div> {{request.UserID}} </div>
                            <div> {{request.AddID}} </div>
                        </div>
                        <div class="content">{{request.Content}}</div>
                        <div>{{request.Status}}</div>
                    </div>
                    <div>
                        <button @click="ackRequest(request)">同意</button>
                        <button @click="notAllowRequest(request)">不同意</button>
                    </div>
                </div>
            </template>
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
