<template>
    <div v-show="active" class="modal-box">
        <div class="modal-header">
            <div>添加用户</div>
            <div class="el-icon-close" @click="closeModal"></div>
        </div>
        <el-input placeholder="请输入内容"
            v-model="value"
            v-on:input="inputEvent"
            clearable>
        </el-input>
        <div class="modal-item">
            <template v-for="key in attrs">
                <template v-for="object of usersAndRooms[key]">
                    <div class="user-list" :key="object.ID">
                        <div>{{ object.Name }}</div>
                        <el-button type="primary" 
                            @click="addFriend(key, object)">添加好友</el-button>
                    </div>
                </template>
            </template>

            <div v-if="!emptyObjects">暂无查询结果</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddUSer',

    data: function() {
        return {
            value: '',
            attrs: ['Users', 'Rooms'],
            usersAndRooms: {},
            active: true,
        }
    },

    methods: {
        inputEvent: async function() {
            if (this.value !== '') {
                await this.searchUser()
            } else {
                this.usersAndRooms = {}
            }
        },

        searchUser: async function() {
            try {
                this.usersAndRooms = (await this.$store.dispatch('searchUsers', {
                    search: this.value
                })).data;
            } catch (e) {
                this.usersAndRooms = {}
            }
        },

        addFriend: async function(key, object) {
            await this.$store.dispatch('addFriend', {
                key: key,
                value: this.value
            })
        },
        
        closeModal:  function() {
            this.active = false;
        }
    },
    
    computed: {
        emptyObjects: function() {
            return this.attrs.some(key => {
                return this.usersAndRooms[key] && this.usersAndRooms[key].length
            })
        }
    }
}
</script>

<style scoped>
.modal-box {
    width: 50%;
    max-height: 50%;
    position: fixed;
    top: 100px;
    background-color:white;
    border: 1px solid;
    padding: 20px 20px;
}

.modal-header {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-item {
    max-height: 150px;
    padding: 20px 20px;
    overflow-y: auto;
}

.user-list {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
}
</style>