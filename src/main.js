// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import FastClick from 'fastclick'
import 'element-ui/lib/theme-default/index.css'
import cordova from './mobile-index'  // 打开此行代码的注释可以打 cordova 的包

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(ElementUI)

Vue.config.productionTip = false

cordova.onDeviceReady = () => {}  // 打开此行代码的注释可以打 cordova 的包

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

cordova.initialize() // 打开此行代码的注释可以打 cordova 的包