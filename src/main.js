import Vue from 'vue'

import App from './App'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import '@/views/css/layout.less'
import '@/views/css/icon.less'

import router from './router'
import store from './store/store'

Vue.use(ElementUI);

Vue.prototype.HOST = '/api'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  components: { App },
  render: h => h(App),
}).$mount('#app')
