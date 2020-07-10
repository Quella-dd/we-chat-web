<template>
    <div class="session-body">
        <div class="session-item" @click="joinGroup">+</div>
        <template v-for="user of users">
            <div :key="user.Name" class="session-item">{{ user.Name }}</div>
        </template>
        <Join v-show="joinActive" v-on:closeme="closeJoin"></Join>
    </div>
</template>

<script>
import Join from './join.vue'

export default {
    name: 'Session',
    data: function() {
        return {
            default: undefined,
            users: [{Name: 1}, {Name: 2}, {Name: 3}],
            joinActive: false
        }
    },
    methods: {
        joinGroup: function() {
            this.joinActive = true
        },

        closeJoin: function() {

        }
    },
    components: {
        Join
    }
}
</script>

<style scoped>
.session-body {
    position: absolute;
    width: calc(60% - 130px);
    top: 120px;
    display: flex;
    padding: 10px 10px;
    
    background-color: white;
    z-index: 10;
    border: 1px solid;
}

.session-item {
    width: 60px;
    height: 60px;
    border: 1px solid red;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>