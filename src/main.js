// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import Vueresource from 'vue-resource'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App.vue'
import find from './components/find/find.vue'
import study from './components/study/study.vue'
import mine from './components/mine/mine.vue'
import tip from './components/tip/tip.vue'
import question from './components/question/question.vue'
import answerSheet from './components/answerSheet/answerSheet.vue'
import answerReport from './components/answerReport/answerReport.vue'
import questionAnalysis from './components/questionAnalysis/questionAnalysis.vue'
import login from './components/login/login.vue'
import myCourse from './components/myCourse/myCourse.vue'
import setting from './components/setting/setting.vue'
import './common/stylus/index.styl'
import './common'

Vue.config.productionTip = false
// 轮播图
Vue.use(VueAwesomeSwiper)
// 路由
Vue.use(VueRouter)
Vue.use(iView)
// 数据请求
Vue.use(Vueresource)
// 路由配置
const routes = [
  {path: '/find', component: find},
  {path: '/study', component: study},
  {path: '/mine', component: mine},
  {path: '/login', component: login},
  {path: '/mine/myCourse', component: myCourse},
  {path: '/mine/setting', component: setting},
  {path: '/study/tip', component: tip},
  {path: '/study/tip/question', component: question},
  {path: '/study/tip/question/answerSheet', component: answerSheet},
  {path: '/study/tip/question/answerReport', component: answerReport},
  {path: '/study/tip/question/questionAnalysis', component: questionAnalysis}
]
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#myapp',
  components: {App},
  router
})
router.push('/find')

