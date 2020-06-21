import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Index from '@/components/Index'
import AddUSer from '@/components/user/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    
    {
      path: '/add-user',
      name: 'AddUSer',
      component: AddUSer
    }
  ]
})
