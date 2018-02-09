// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'
import store from './Store'
Vue.prototype.$axios = axios
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})