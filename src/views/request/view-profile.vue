<template>
    <div class="profile">
        <div>aaaa</div>
        <hr>
        <div>
            <div>bbbb</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            request: {},
        }
    },

    computed: {
        getUserName: function() {
            return this.request.Name;
        },
    },

    mounted: async function() {
        this.request = await this.$store.dispatch('getRequest', {
            'ID': this.$route.params.id
        });
        console.log(this.request)
    }
}
</script>

<style lang="less" scoped>
.profile {
    padding: 10% 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > .profile-name {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>
