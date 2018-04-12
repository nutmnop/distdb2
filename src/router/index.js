import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Top from '@/pages/Top'
import Detail from '@/pages/Detail'
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
            path: '/Top',
            name: 'Top',
            component: Top
        },
        {
            path: '/Detail',
            name: 'Detail',
            component: Detail
        }
    ]
})
