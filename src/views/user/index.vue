<template>
    <div class="pannel-body">
        <div v-if="users.length" class="pannel-list">
            <template v-for="user of getFriends">
                <div :key="user.ID" :class="{'active': isActive(user)}"  @click="upadteUser(user)" class="user-item">
                    <div class="ui-icon-50 ui-user-header"></div>
                    <div class="title">
                        {{user.Name}}
                    </div>
                </div>
            </template>
        </div>
        <div v-if="users.length" class="pannel-content">
            <router-view :key="key"></router-view>
        </div>
        <div v-if="!users.length" class="pannel-list">
            <div>用户列表为空</div>
        </div>
    </div>
</template>

<script>
// import PubSub from 'pubsub-js'

export default {
	data() {
		return {
			users: [],
			user: {}
		}
	},

	methods: {
		upadteUser: function(user) {
			this.$router.push('/users/' + user.ID)
		},

		isActive: function(user) {
			// return this.$store.state.currentUser.Name === user.Name;
			return this.user.ID === user.ID;
		},

		refreshList: async function() {
			this.users = await this.$store.dispatch('listFriends')
			console.log(this.users)

			// if (newData) {
			//     friends.map(user => {
			//         if (user.ID === newData.SourceID) {
			//             user.LastMessage = newData.Content
			//             user.LatetUpdate = newData.CreateAt

			//             if (!user.UnRead) {
			//                 user.UnRead = 0;
			//             } else {
			//                 user.UnRead = parseInt(user.UnRead) + 1;
			//             }
			//         }
			//     })
			// }
			// this.users = friends
		}
	},

	mounted: async function() {
		await this.refreshList()
	},

	// mounted: function() {
	//     PubSub.subscribe('refreshList', (topic, data) => {
	//         this.$notify({
	//             title: '来自用户ＩＤ为' + data.SourceID + '的消息',
	//             message: data.Content,
	//             type: 'success'
	//         });
			
	//         if (data.SourceID === this.$store.state.currentUser.ID) {
	//             PubSub.publish('messageSend', {
	//                 'Topic': topic,
	//                 'Data': data
	//             })
	//         }
	//         this.refreshList(data)
	//     })

	//     PubSub.subscribe('addUser', ()=> {
	//         this.refreshList()
	//     })
	// },

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