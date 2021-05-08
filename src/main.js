import Vue from 'vue'

import App from './App'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import '@/views/css/layout.less'
import '@/views/css/icon.less'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store/store'

Vue.use(ElementUI);

Vue.prototype.HOST = '/api'

Vue.use(VueAxios, axios);

Vue.prototype.httpHeader = function() {
  return {
      'userID': JSON.parse(this.$session.get('user')).ID
  }
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  components: { App },
  render: h => h(App),
}).$mount('#app')
