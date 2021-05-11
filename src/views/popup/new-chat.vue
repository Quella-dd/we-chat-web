<template>
    <div class="modal-box">
        <div class="modal-header">
            <div>New Chat</div>
            <div class="el-icon-close"></div>
        </div>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Concats" name="first">
                <div v-if="friends.length">
                    <div v-for="friend of friends" :key="friend.ID">
                        <div>{{friend.Name}}</div>
                    </div>
                </div>
                <div v-if="!friends.length">
                    Friends Empty
                </div>
            </el-tab-pane>
            <el-tab-pane label="Groups" name="second">
                <div v-if="groups.length">
                    <div v-for="group of groups" :key="group.ID">
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
        };
    },

    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    mounted: async function() {
        this.groups = await this.$store.dispatch('listGroups')
        this.friends = await this.$store.dispatch('listFriends')
    }
};
</script>