<template>
    <div class="moment">
        <div class="header">
            <img src="@/css/icon/back-group.png">
        </div>
        
        <div class="moment-list">
            <div class="moment-item" v-for="moment of moments" :key="moment.id">
                <div class="avator">
                    <i class="ui-icon ui-moment-avator ui-icon-40"></i>
                </div>
                <div class="content">
                    <div class="user-name">{{ moment.name }}</div>
                    <div class="user-content">{{ moment.content }}</div>

                    <div class="flex">
                        <div class="time">{{ moment.create_time }}</div>
                        <div class="action">
                            <i class="ui-icon ui-icon-20 ui-icon-profile"></i>
                        </div>
                    </div>

                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moments: [
                {id: 1, name: "zhangsan", content: "i'm 张三， this is my first moment", create_time: "2021-1-1"},
                {id: 2, name: "lisi", content: "i'm lisi this is my first moment", create_time: "2021-1-1"},
                {id: 3, name: "admin", content: "i'm admin this is my first moment", create_time: "2021-1-1"},
                {id: 4, name: "wangmazi", content: "i'm wangmazi this is my first moment", create_time: "2021-1-1"},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.moment {
    height: 100%;

    .header {
        img {
            width: 100%;
            height: 200px;
        }
    }

    .moment-list {
        height: calc(100% - 200px);
        overflow: auto;

        > .moment-item {
            display: flex;
            padding: 10px 20px;

            > .avator {
                width: 70px;
            }

            > .content {
                flex: 1;
                text-align: left;

                > .user-name {
                    margin-bottom: 10px;
                }

                > .user-content {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>