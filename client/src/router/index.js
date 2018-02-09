import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Router/Login'
import Message from '@/components/Router/Message'
import Apply from '@/components/Router/Apply'
Vue.use(Router)
const router = new Router({
    mode: "history",
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/message',
            name: 'Message',
            component: Message
        },
        {
            path: '/apply',
            name: 'Apply',
            component: Apply
        }
    ]
})

router.beforeEach((to, from, next) => {
    var userInfo = JSON.parse(sessionStorage.getItem('user')); //获取浏览器缓存的用户信息
    if (userInfo) { //如果有就直接到首页咯
        next();
    } else {
        if (to.path == '/login') { //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login');
        }

    }
});
export default router