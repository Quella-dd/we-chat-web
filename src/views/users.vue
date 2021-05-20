<template>
    <div class="pannel-body">
        <div class="pannel-list">
			<div class="search">
				<div>
					<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input"></el-input>
				</div>
				<i class="ui-icon ui-icon-40 ui-icon-add" @click="toggle"></i>
			</div>

			<template v-if="addFriend">
				<AddFriend v-on:close="toggle"></AddFriend>
			</template>

			<template v-if="users.length">
				<div v-for="user of getFriends" :key="user.ID">
					<div class="user-item" :class="{'active': isActive(user)}" @click="upadteUser(user)" >
						<div class="ui-icon-50 ui-user-header"></div>
						<div class="title">{{user.Name}}</div>
					</div>
					<hr>
				</div>
			</template>

			<div v-if="!users.length" class="empty-content">
				<div>用户列表为空</div>
			</div>
		</div>
		<div class="pannel-content">
			<router-view :key="key"></router-view>
		</div>
	</div>
</template>

<script>
import AddFriend from '@/views/popup/add-friends'

export default {
	components: {
		AddFriend
	},

	data() {
		return {
			users: [],
			user: {},
			addFriend: false,
			input: ''
		}
	},

	methods: {
		toggle: function() {
			this.addFriend = !this.addFriend;
		},

		upadteUser: function(user) {
			this.$router.push('/users/' + user.ID)
		},

		isActive: function(user) {
			return this.user.ID === user.ID;
		},

		refreshList: async function() {
			this.users = await this.$store.dispatch('listFriends')

		}
	},
	
	mounted: async function() {
		await this.refreshList()
	},

	computed: {
		getFriends: function() {
			return this.users
		},
		
		key() {
			return this.$route.name !== undefined? this.$route.name + new Date(): this.$route + new Date()
		}
	}
}
</script>