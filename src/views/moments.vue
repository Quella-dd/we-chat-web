<template>
    <div class="moment">
        <div class="header">
            <img src="@/css/icon/back-group.png">
            <div class="header-action">
                <i class="ui-icon ui-icon-30 ui-icon-photo" @click="togger"></i>
                <template v-if="active">
                    <moment v-on:close="togger"></moment>
                </template>
            </div>
        </div>
        <div class="moment-list">
            <div class="moment-item" v-for="moment of moments" :key="moment.id">
                <div class="avator">
                    <i class="ui-icon ui-moment-avator ui-icon-40"></i>
                </div>
                <div class="content">
                    <div class="user-name">{{ moment.OwnerName }}</div>
                    <div class="user-content">{{ moment.Content }}</div>

                    <div class="flex">
                        <div class="time">{{ moment.CreatedAt }}</div>
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
import moment from '@/views/popup/create-moment'

export default {
    components: {
        moment
    },

    data() {
        return {
            moments: [],
            active: false
        }
    },
    
    methods: {
        togger() {
            this.active = !this.active;
        },

        refreshMoments: async function() {
            console.log("refreshMoments")
            this.moments = await this.$store.dispatch('listMoments')
        }
    },

    mounted: async function() {
        await this.refreshMoments()
        this.$event.sub('moment', this.refreshMoments)
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

        > .header-action {
            position: absolute;
            top: 10px;
            right: 20px;
            z-index: 1000;
            cursor: pointer;
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