<template>
    <div class="pannel-body">
        <div class="pannel-list">
            <template v-for="user of getFriends">
                <div :key="user.ID" :class="{'active': isActive(user)}"  @click="upadteUser(user)" class="user-item">
                    <div class="item-left">
                        <!-- <el-badge :value="user.UnRead" class="item">
                            <img class="img" src="./user.jpeg">
                        </el-badge> -->
                        <i class="ui-icon-50 ui-user-header"></i>
                    </div>
                    <div class="item-right">
                        <div class="title"> 
                            <div> {{user.Name}} </div>
                        </div>
                        <div class="content">{{user.LastMessage}}</div>
                    </div>
                </div>
            </template>
        </div>
        <div class="pannel-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import PubSub from 'pubsub-js'

export default {
    data: function() {
        return {
            // users: this.$store.state.users
            users: [
                {ID: 1, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 2, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 3, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 4, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 5, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 6, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 7, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 8, UnRead: 10, Name: "admin", LastMessage: "admin1"},
                {ID: 9, UnRead: 10, Name: "admin", LastMessage: "admin1"},
            ],
            user: {}
        }
    },

    methods: {
        upadteUser: function(user) {
            // this.$store.commit('setCurrentUser', user)
            this.user = user
            this.$router.push('/sessions/' + user.ID)
        },

        isActive: function(user) {
            // return this.$store.state.currentUser.Name === user.Name;
            return this.user.ID === user.ID;
        },

        // refreshList: async function(newData) {
        //     let friends = (await this.$store.dispatch('getAllFriends')).data[0]
        //     if (newData) {
        //         friends.map(user => {
        //             if (user.ID === newData.SourceID) {
        //                 user.LastMessage = newData.Content
        //                 user.LatetUpdate = newData.CreateAt
        //                 if (!user.UnRead) {
        //                     user.UnRead = 0;
        //                 } else {
        //                     user.UnRead = parseInt(user.UnRead) + 1;
        //                 }
        //             }
        //         })
        //     }
        //     this.users = friends
        // }
    },

    created: async function() {
        // let friends = (await this.$store.dispatch('getAllFriends')).data[0]
        // this.$store.commit('setCurrentUser', friends[0])
        // this.$store.commit('updateUses', friends)
    },

    mounted: function() {
        // PubSub.subscribe('refreshList', (topic, data) => {
        //     this.$notify({
        //         title: '来自用户ID为' + data.SourceID + '的消息',
        //         message: data.Content,
        //         type: 'success'
        //     });
            
        //     if (data.SourceID === this.$store.state.currentUser.ID) {
        //         PubSub.publish('messageSend', {
        //             'Topic': topic,
        //             'Data': data
        //         })
        //     }
        //     this.refreshList(data)
        // })

        // PubSub.subscribe('addUser', ()=> {
        //     this.refreshList()
        // })
    },

    computed: {
        getFriends: function() {
            return this.users
        }
    }
}
</script>