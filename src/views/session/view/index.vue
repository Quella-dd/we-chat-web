<template>
    <div class="body">
        <div class="left">
            <el-header>
                <div v-if="session.RoomID">
                    群聊：<span>{{session.RoomID}}</span>
                </div>
                <div v-if="!session.RoomID">
                    <span> {{ this.session.DisplayName }} </span>
                </div>
                <span class="el-dropdown-link" @click="toggle">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <div v-if="session.Stype" class="el-header-action" @click="toggleProfile">
                    <i class="ui-icon ui-icon-20 ui-icon-profile"></i>
                </div>
            </el-header>
            <el-main>
                <sessionContent></sessionContent>
            </el-main>
            <el-footer>
                <sessionSend></sessionSend>
            </el-footer>
        </div>
        <div v-if="showProfile" class="right">
            <sessionProfile ></sessionProfile>
        </div>
    </div>
</template>

<script>
import sessionContent from './session-content.vue'
import sessionSend from './session-send.vue'
import sessionProfile from '@/views/popup/group-profile.vue'

export default {
	components: {
		sessionContent,
        sessionSend,
        sessionProfile
    },

    data: function() {
        return {
            session: {},
            showProfile: false
        }
    },

    methods: {
        refreshSession: function() {
            this.session = this.$store.state.session;
        },

        toggle: function() {

        },

        toggleProfile: function() {
            this.showProfile = !this.showProfile;
            console.log(this.showProfile);
        }
    },

    mounted: function() {
        this.refreshSession()
    }
}
</script>

<style scoped>
.body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin-left: 0;
    border-left: 1px solid;
    display: flex;
    flex-wrap: wrap-reverse;
}

.el-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid;
}

.el-header-action {
    justify-content: flex-end;
}

.el-main {
    padding: 0;
    height: calc(100% - 142px);
    overflow: auto;
    border-bottom: 1px solid;
}

.el-footer {
    padding: 0;
}

.left {
    flex: 1;
}

.right {
    border: 1px solid red;
    float: right;
    height: 100%;
    width: 20%;
}
</style>