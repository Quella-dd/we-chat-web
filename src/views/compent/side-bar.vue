<template>
    <div class="side-bar">
         <div class="user-content">
            <div class="user-name">{{this.$store.state.user.Name}}</div>
         </div>
        <div class="side-bar-item m-t-20">
            <router-link to="/sessions">
                <i class="ui-icon ui-icon-30" :class="[active('sessions')?'ui-icon-session-active':'ui-icon-session']"></i>
            </router-link>
        </div>
        <div class="side-bar-item m-t-20">
            <router-link to="/users">
                <i class="ui-icon ui-icon-30" :class="[active('users')?'ui-icon-friends-active':'ui-icon-friends']"></i>
            </router-link>
        </div>
        <div class="side-bar-item m-t-20">
            <router-link to="/requests">
                <i class="ui-icon ui-icon-30" :class="[active('requests')?'ui-icon-request-active':'ui-icon-request']"></i>
            </router-link>
        </div>
        <div class="side-bar-item m-t-20">
            <router-link to="moments">
                <i class="ui-icon ui-icon-30" :class="[active('moments')?'ui-icon-relation-active':'ui-icon-relation']"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        active(target) {
            return this.$route.name.indexOf(target) > -1;
        }
    }
}
</script>

<style lang="less" scoped>
.user-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.user-name {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>