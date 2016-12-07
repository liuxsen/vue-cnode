import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/bankuai',
        component: require('../views/bankuai')
    }, {
        path: '/xin',
        component: require('../views/xin')
    }, {
        path: '/share',
        component: require('../views/share')
    }, {
        path: '/action',
        component: require('../views/action')
    }, {
        path: '/zhaopin',
        component: require('../views/zhaopin')
    }, {
        path: '/athor',
        component: require('../views/athor')
    }, {
        path: '/setting',
        component: require('../views/setting')
    }]
})

export default router;
