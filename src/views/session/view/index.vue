<template>
    <el-container>
        <el-header>
            <div>
                <div v-if="session.RoomID">
                    群聊：<span>{{session.RoomID}}</span>
                </div>
                <div v-if="!session.RoomID">
                    <span> {{ this.session.DisplayName }} </span>
                </div>
            </div>
            <div v-if="session.Stype" class="el-header-action" @click="toggle">
                <i class="ui-icon ui-icon-20 ui-icon-profile"></i>
            </div>
        </el-header>
        <el-main>
            <sessionContent></sessionContent>
            <div v-if="showProfile" class="right">
                <sessionProfile ></sessionProfile>
            </div>
        </el-main>
        <el-footer height="150px">
            <sessionSend></sessionSend>
        </el-footer>
    </el-container>
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
            this.showProfile = !this.showProfile;
            console.log(this.showProfile);
        }
    },
    mounted: function() {
        this.refreshSession()
    }
}
</script>