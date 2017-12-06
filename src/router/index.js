import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/admin'

import Miui1 from '../views/miui1'
import Miui2 from '../views/miui2'
import Miui3 from '../views/miui3'
import Miui4 from '../views/miui4'
import Miui5 from '../views/miui5'
import Miui6 from '../views/miui6'
import Miui7 from '../views/miui7'
import Miui8 from '../views/miui8'
import Miui9 from '../views/miui9'
import Miui10 from '../views/miui10'


Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
      path: 'miui1',
      name: 'miui1',
      component: Miui1
    },
    {
      path: 'miui2',
      name: 'miui2',
      component: Miui2
    },
    {
      path: 'miui3',
      name: 'miui3',
      component: Miui3
    },
    {
      path: 'miui4',
      name: 'miui4',
      component: Miui4
    },
    {
      path: 'miui5',
      name: 'miui5',
      component: Miui5
    },
    {
      path: 'miui6',
      name: 'miui6',
      component: Miui6
    },
    {
      path: 'miui7',
      name: 'miui7',
      component: Miui7
    },
    {
      path: 'miui8',
      name: 'miui8',
      component: Miui8
    },
    {
      path: 'miui9',
      name: 'miui9',
      component: Miui9
    },
    {
      path: 'miui10',
      name: 'miui10',
      component: Miui10
    }
  ]
})
export default router;