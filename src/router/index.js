import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import personnalCenter from '@/pages/personnalCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      title: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/personnalCenter',
      name: 'personnalCenter',
      title: '个人中心',
      component: personnalCenter
    },
  ]
})
