<template>
    <div>
        <template v-for="user of getFriends">
            <div :key="user.ID" :class="{'active': isActive(user)}"  @click="upadteUser(user)" class="user-item">
                <div class="item-left">
                    <!-- <el-badge :value="user.UnRead" class="item">
                        <img class="img" src="./user.jpeg">
                    </el-badge> -->
                </div>
                <div class="item-right">
                    <div class="title"><div>{{user.Name}}</div></div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
    data: function() {
        return {
            users: [
                {ID: 1, Name: "admin"},
                {ID: 1, Name: "张三"},
                {ID: 1, Name: "李四"},
                {ID: 1, Name: "周汉卿"},
                {ID: 1, Name: "李哈哈"}
            ]
        }
    },

    methods: {
        upadteUser: function(user) {
            this.$store.commit('setCurrentUser', user)
        },

        isActive: function(user) {
            return this.$store.state.currentUser.Name === user.Name;
        },

        refreshList: async function(newData) {
            let friends = (await this.$store.dispatch('getAllFriends')).data[0]
            if (newData) {
                friends.map(user => {
                    if (user.ID === newData.SourceID) {
                        user.LastMessage = newData.Content
                        user.LatetUpdate = newData.CreateAt

                        if (!user.UnRead) {
                            user.UnRead = 0;
                        } else {
                            user.UnRead = parseInt(user.UnRead) + 1;
                        }
                    }
                })
            }
            this.users = friends
        }
    },

    created: async function() {
        let friends = (await this.$store.dispatch('getAllFriends')).data[0]
        this.$store.commit('setCurrentUser', friends[0])
        this.$store.commit('updateUses', friends)
    },

    mounted: function() {
        PubSub.subscribe('refreshList', (topic, data) => {
            this.$notify({
                title: '来自用户ＩＤ为' + data.SourceID + '的消息',
                message: data.Content,
                type: 'success'
            });
            
            if (data.SourceID === this.$store.state.currentUser.ID) {
                PubSub.publish('messageSend', {
                    'Topic': topic,
                    'Data': data
                })
            }
            this.refreshList(data)
        })

        PubSub.subscribe('addUser', ()=> {
            this.refreshList()
        })
    },

    computed: {
        getFriends: function() {
            return this.users
        }
    }
}
</script>

<style scoped>
.user-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    border-bottom: 1px solid;
}

.active {
    background-color: gainsboro;
}

.item-left {
    display: inline-flex;
}

.item-left img {
    height: 40px;
    width: 40px;
}

.item-right {
    display: inline-flex;
    flex-direction: column
}

.item-right .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>