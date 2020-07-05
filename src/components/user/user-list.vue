<template>
    <div>
        <template v-for="user of getFriends">
            <div :key="user.ID" :class="{'active': isActive(user)}"  @click="upadteUser(user)" class="item">
                <div class="item-left">
                    <img class="img" src="./user.jpeg">
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
</template>

<script>
export default {
    name: 'userList',

    methods: {
        upadteUser: function(user) {
            this.$store.commit('setCurrentUser', user)
        },

        isActive: function(user) {
            return this.$store.state.currentUser.Name === user.Name;
        }
    },

    created: async function() {
        let friends = (await this.$store.dispatch('getAllFriends')).data[0]
        this.$store.commit('setCurrentUser', friends[0])
        this.$store.commit('updateUses', friends)
    },

    computed: {
        getFriends: function() {
            return this.$store.state.users
        }
    }
}
</script>

<style scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    padding: 10px 20px 10px 20px;
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