<template>
    <div class="modal-box">
        <div class="list">
            <div>
                <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="input"></el-input>
            </div>
            <template v-if="friends.length">
                <el-checkbox-group v-model="checkedFriends">
                    <el-checkbox v-for="friend of friends" :label="JSON.stringify(friend)" :key="JSON.stringify(friend)">{{friend.Name}}</el-checkbox>
                </el-checkbox-group>
            </template>
            <div v-if="!friends.length">
                Friends Empty
            </div>
        </div>
        <el-container class="content">
            <el-header>
                发起群聊 未选择联系人
            </el-header>
            <el-main>
                <div v-for="friend of checkedFriends" :key="JSON.parse(friend).ID">
                    <div>{{JSON.parse(friend).Name}}</div>
                </div>
            </el-main>
            <el-footer>
                <el-button @click="create">取消</el-button>
                <el-button @click="cancel">创建</el-button>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            friends: [],
            checkedFriends: []
        };
    },

    methods: {
        create() {
            let group, strArr = [];

            this.checkedFriends.forEach(e => {
                strArr.push(JSON.parse(e).ID.toString);
            });

            if (strArr.length > 1) {
                // 创建群聊
                group = this.$store.dispatch('createGroup', {
                    'Name': 'new Group',
                    'Childes': strArr
                })

                this.$store.dispatch('createSession', {
                    'Stype': 1,
                    'RoomID': group.ID
                })
            } else {
                // 创建私聊
                this.$store.dispatch('createSession', {
                    'DestinationID': strArr[0]
                })
            }
        },

        cancel() {
            
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