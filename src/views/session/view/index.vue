<template>
    <div class="body">
        <el-header>
            <span> {{ this.session.DisplayName }} </span>
            <!-- <span class="el-dropdown-link" @click="toggle">
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span> -->
        </el-header>
        <el-main>
            <sessionContent></sessionContent>
        </el-main>
        <el-footer>
            <sessionSend></sessionSend>
        </el-footer>
    </div>
</template>

<script>
import sessionContent from './session-content.vue'
import sessionSend from './session-send.vue'

export default {
	components: {
		sessionContent,
        sessionSend,
    },

    data: function() {
        return {
            session: {}
        }
    },

    methods: {
        refreshSession: function() {
            this.session = this.$store.state.session;
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
}
.el-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid;
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
</style>