<template>
    <div class="body">
        <div class="profile">
            <div class="profile-img">
                <div class="ui-icon-200 ui-user-header"></div>
            </div>
            <div class="profile-name">
                {{getUserName}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getUserName: function() {
            return this.$route.params.id;
        },
    }
}
</script>

<style scoped>
.profile-img {
    display: flex;
    width: 30%;
}

.profile-name {
    font-size: 14px;
}
</style>
