// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import ElementUI from 'element-ui';
import store from './store/store'

import VueSession from 'vue-session'

import WebRTC from 'vue-webrtc'
 
Vue.use(WebRTC)

Vue.use(VueSession, {
    persist: true
})

Vue.use(ElementUI);

Vue.prototype.HOST = '/api'

Vue.use(VueAxios, axios);

Vue.prototype.httpHeader = function() {
    return {
        'userID': JSON.parse(this.$session.get('user')).ID
    }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
