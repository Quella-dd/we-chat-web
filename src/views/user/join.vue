<template>
    <div class="join-body">
        <div class="header"></div>
        <div class="body">
            <div class="selected">
                <template v-for="user of selectd">
                    <div :key="user">{{ user.Name }}</div>
                </template>     
            </div>

            <div class="search">
                <el-input v-model="search"></el-input>
            </div>

            <div class="list">
                <template v-for="user of filterUsers">
                    <div :key="user">{{ user.Name }}</div>
                </template>  
            </div>
        </div>
        <div class="footer"></div>
    </div>    
</template>

<script>
export default {
    name: 'Join',
    data: function() {
        return {
            users: [{Name: "A", Name: "B", Name: "C", Name: "D"}],
            search: '',
        }
    },
    computed: {
        selectd: function() {
            return this.users.filter(user => {
                return user.checked
            })
        },
        selectdLength: function() {
            return this.selectd.length
        },
        filterUsers: function() {
            return this.users.filter(user => {
                return user.Name.indexOf(this.search)
            })
        }
    }
}
</script>

<style scoped>
.join-body {
    position: absolute;
    border: 1px solid red;
    width: 100%;
    height: 100%;
}
</style>