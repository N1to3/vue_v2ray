import Vue from 'vue'
import Router from 'vue-router'
import v2ray from '@/components/v2ray'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'v2ray',
      component: v2ray
    }
  ]
})
