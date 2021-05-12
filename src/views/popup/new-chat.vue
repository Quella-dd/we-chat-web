<template>
    <div class="modal-box">
        <div class="modal-header">
            <div>New Chat</div>
            <div class="el-icon-close"></div>
        </div>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Concats" name="first">
                <div v-if="friends.length">
                    <el-checkbox-group v-model="checkedFriends">
                        <el-checkbox v-for="friend of friends" :label="friend.ID" :key="friend.ID">{{friend.Name}}</el-checkbox>
                    </el-checkbox-group>
                    <el-button @click="create">OK</el-button>
                </div>
                <div v-if="!friends.length">
                    Friends Empty
                </div>
            </el-tab-pane>
            <el-tab-pane label="Groups" name="second">
                <div v-if="groups.length">
                    <div class="user-item" v-for="group of groups" :key="group.ID">
                        <div>{{group.Name}}</div>
                    </div>
                </div>
                <div v-if="!groups.length">
                    Groups Chat Empty
                </div>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            groups: [],
            friends: [],
            checkedFriends: [],
        };
    },

    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

        create() {
            let group;
            var strArr = this.checkedFriends.map(function(e){return e.toString()});

            if (this.checkedFriends.length > 1) {
                group = this.$store.dispatch('createGroup', {
                    'Name': 'new Group',
                    'Childes': strArr
                })

                this.$store.dispatch('createSession', {
                    'Stype': 1,
                    'RoomID': group.ID
                })
            }
        }
    },

    mounted: async function() {
        this.groups = await this.$store.dispatch('listGroups')
        this.friends = (await this.$store.dispatch('listFriends')).map(element => {
            element.checked = false;
            return element;
        });
    }
};
</script>

<style lang="less" scoped>
.user-item {
    display: flex;
    padding: 20px 20px;
    border-bottom: 1px solid red;
}
</style>