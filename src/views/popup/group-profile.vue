<template>
    <div class="group-profile">
        <div class="item">
            <span>群名称: {{group.Group.Name}}</span>
        </div>
        <div class="item">
            <span>群描述： {{group.Group.Description}}</span>
        </div>
        <div class="item">成员信息</div>
        <div class="user-item" v-for="user of group.Users" :key="user.ID">
            <div>{{user.Name}}</div>
            <div v-if="user.ID==group.Group.ManagerID" class="user-role">管理员</div>
            <div v-if="user.ID!=group.Group.ManagerID" class="user-role">成员</div>
            <div v-if="getAction(user)">
                <i class="ui-icon ui-icon-10 ui-icon-delete" @click="leaveGroup(user.ID)"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            group: {},
            groupID: {}
        }
    },

    methods: {
        refreshGroup: async function(id) {
            return await this.$store.dispatch('getGroupInfo', {
                ID: id
            });
        },

        leaveGroup: async function(id) {
            return await this.$store.dispatch('leaveGroup', {
                UserID: id,
                GroupID: this.groupID
            });
        },

        getAction: function(user) {
            return this.$store.state.user.ID == this.group.Group.ManagerID && this.$store.state.user.ID != user.ID;
        }
    },

    mounted: async function() {
        this.groupID = this.$store.state.session.RoomID;
        this.group = await this.refreshGroup(this.groupID);
        console.log("this group", this.group)
    }
}
</script>

<style lang="less" scoped>
.group-profile {
    padding: 10px 20px;

    .item {
        text-align: left;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .user-item {
        display: flex;
        height: 30px;
        align-items: center;
        padding: 10px 10px;
        justify-content: space-between;
        border: 1px solid black;
    }
}
</style>
