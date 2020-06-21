<template>
    <div>
        <template v-for="friend of friends">
            <div :key="friend.Name" :class="{'active': isActive(friend)}" @click="upadteUser(friend)" class="item">
                <div class="item-left">
                    <img class="img" src="./user.jpeg">
                </div>
                <div class="item-right">
                    <div class="title"> 
                        <div> {{friend.Name}} </div>
                    </div>
                    <div class="content">{{friend.LastMessage}}</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'userList',
    data: function() {
        return {
            friends: [],
        }
    },
    methods: {
        upadteUser: function(user) {
            // this.$store.commit('updateCurrentUser', {
            //     user: user
            // })
        },
        isActive: function(user) {
            return this.$store.state.currentUser.Name === user.Name;
        }
    },
    created: async function() {
        this.friends = (await this.$store.dispatch('getAllFriends')).data[0];
        // this.$store.commit('updateCurrentUser', {
        //     user: this.friends[0]
        // })
    }
}
</script>

<style scoped>
.item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
}

.active {
    background-color: gray;
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

.item-right .content {
}
</style>