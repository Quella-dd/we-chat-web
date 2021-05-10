<template>
    <div class="pannel-body">
        <div class="pannel-list">
            <template v-for="user of getFriends">
                <div :key="user.ID" :class="{'active': isActive(user)}"  @click="upadteUser(user)" class="user-item">
                    <div class="ui-icon-50 ui-user-header"></div>
                    <div class="title">
                        {{user.Name}}
                    </div>
                </div>
            </template>
        </div>
        <div class="pannel-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import PubSub from 'pubsub-js'

export default {
  data: function() {
    return {
      users: [],
      user: {}
    }
  },

  methods: {
    upadteUser: function(user) {
      this.$store.commit('updateUser', {
          'user': user
      })
      this.$router.push('/users/' + user.Name)
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

  // created: async function() {
  //     let friends = (await this.$store.dispatch('getAllFriends')).data[0]
  //     this.$store.commit('setCurrentUser', friends[0])
  //     this.$store.commit('updateUses', friends)
  // },

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
    }
  }
}
</script>