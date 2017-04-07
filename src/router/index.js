import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import About from '@/components/About'
import Hello from '@/components/Hello'
import First from '@/components/First'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
  ]
})
