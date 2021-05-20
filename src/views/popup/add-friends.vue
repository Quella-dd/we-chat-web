<template>
    <div class="modal-box">
        <div class="modal-header">
            <div>添加用户</div>
            <div class="el-icon-close" @click="close"></div>
        </div>
        <div class="search-item">
            <el-input placeholder="微信号/名称" v-model="search" v-on:input="inputEvent" clearable></el-input>
        </div>
        <div class="modal-item">
            <template v-for="user of getSearchUsers">
                <div class="user-list" :key="user.ID">
                    <div>{{ user.Name }}</div>
                    <div v-if="beenFriend(user)">已经是好友了</div>
                    <div v-if="!beenFriend(user)">
                        <el-button type="primary" @click="addFriend(user)">添加好友</el-button>
                    </div>
                </div>
            </template>
            <div v-if="!users.length">暂无查询结果</div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            search: '',
            users: [],
        }
    },

    methods: {
        inputEvent: async function() {
            if (this.value !== '') {
                await this.searchUser()
            } else {
                this.users = []
            }
        },

        searchUser: async function() {
            try {
                this.users = (await this.$store.dispatch('searchUsers', {
                    'search': this.search
                }));
                console.log(this.users)
            } catch (e) {
                this.users = []
            }
        },

        addFriend: async function(user) {
            await this.$store.dispatch('addFriend', user.ID)
            this.close()
        },

        // FIXME
        beenFriend: function(user) {
            return (this.$store.state.user.Relations || []).some(relation => {
                return relation == user.ID;
            });
        },

        close: function() {
            this.$emit('close')
        }
    },

    computed: {
        getSearchUsers: function() {
            return this.users.filter(user => {
                return user.ID !== this.$store.state.user.ID;
            });
        }
    }
}
</script>

<style lang="less" scoped>
.modal-box {
    display: flex;
    flex-direction: column;

    > .search-item {
        padding: 10px 20px;
    }

    .el-icon-close {
        cursor: pointer;
    }
}
</style>