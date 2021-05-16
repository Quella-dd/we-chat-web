<template>
    <div class="modal-box">
        <div class="left">
            <div>
                <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="input"></el-input>
            </div>
            <div v-if="friends.length">
                <div class="user-item" v-for="friend of friends" :key="friend.ID">
                    <input type="checkbox" v-model="friend.checked" @click="checkFriend(e, user)">
                    <div class="user-item-name">{{friend.Name}}</div>
                </div>
            </div>
            <div v-if="!friends.length">
                Friends Empty
            </div>
        </div>
        <div class="right">
            <div>
                发起群聊 未选择联系人
            </div>
            <div>
                <div v-for="friend of getCheckedFriend" :key="friend.ID">
                    <div>{{friend.Name}}</div>
                </div>
            </div>

            <div>
                <el-button @click="create">取消</el-button>
                <el-button @click="cancel">创建</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            friends: []
        };
    },
    
    computed: {
        getCheckedFriend: function() {
            console.log(this.friends)

            return this.friends.filter(friend => {
                return friend.checked;
            });
        }
    },

    methods: {
        create() {
            let group, strArr = [];

            this.friends.forEach(element => {
                if (element.checked) {
                    strArr.push(element.ID.toString())
                }
            });

            if (strArr.length > 1) {
                group = this.$store.dispatch('createGroup', {
                    'Name': 'new Group',
                    'Childes': strArr
                })

                this.$store.dispatch('createSession', {
                    'Stype': 1,
                    'RoomID': group.ID
                })
            }
        },

        cancel() {
            
        },

        checkFriend(e, user) {
            console.log("event:", e)
            console.log("User:", user)
        }
    },

    mounted: async function() {
        this.friends = (await this.$store.dispatch('listFriends')).map(element => {
            element.checked = false;
            return element;
        });
    }
};
</script>

<style lang="less" scoped>
.modal-box {
    display: flex;
    height: 50%;

    .left {
        flex: 1;
    }

    .right {
        flex: 1;
    }
}
</style>