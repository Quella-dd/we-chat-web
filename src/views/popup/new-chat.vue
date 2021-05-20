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
            <div v-if="!friends.length" class="empty-content">
                Friends Empty
            </div>
        </div>
        <el-container class="content">
            <el-header> 发起群聊 未选择联系人</el-header>
            <el-main>
                <div v-for="friend of checkedFriends" :key="JSON.parse(friend).ID">
                    <div>{{JSON.parse(friend).Name}}</div>
                </div>
            </el-main>
            <el-footer>
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="create">创建</el-button>
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
        async create() {
            let strArr = [];
            this.checkedFriends.forEach(e => {
                strArr.push(JSON.parse(e).ID.toString);
            });
            if (strArr.length > 1) {
                let group = await this.$store.dispatch('createGroup', {
                    'Name': 'new Group',
                    'Childes': strArr
                });
                await this.$store.dispatch('createSession', {
                    'Stype': 1,
                    'RoomID': `${group.ID}`
                })
            } else {
                this.$store.dispatch('createSession', {
                    'DestinationID': strArr[0]
                })
            }
            this.cancel()
        },

        cancel() {
            this.$emit('close')
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