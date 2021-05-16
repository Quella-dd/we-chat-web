<template>
    <div class="side-bar">
        <div class="side-bar-item">
            <router-link to="/sessions">
                <i class="ui-icon ui-icon-20 ui-icon-session"></i>
            </router-link>
        </div>
        <div class="side-bar-item">
            <router-link to="/users">
                <i class="ui-icon ui-icon-20 ui-icon-friends"></i>
            </router-link>
        </div>
        <div class="side-bar-item">
            <router-link to="/requests">
                <i class="ui-icon ui-icon-20  ui-icon-request"></i>
            </router-link>
        </div>
        <div class="side-bar-item">
            <router-link to="moments">
                <i class="ui-icon ui-icon-20 ui-icon-relation"></i>
            </router-link>
        </div>
    </div>
</template>

<style lang="less" scoped>
.side-bar {
    margin-top: 10px;

    .side-bar-item {
        display: flex;
       
        height: 40px;
        width: 40px;

        justify-content: center;
        align-content: center;
    }
}
</style>