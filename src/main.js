import Vue from "vue";
import App from "./App.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
const router = new VueRouter({
  //mode: 'history',
  routes: [
    { path: '/dashboard', name:'dashboard',component: Dashboard },
    { path: '/login', name:'login', component: Login },
    {path: '*', redirect:'/login'}
  ]
})

router.beforeEach((to, from, next) => {
	if (to.name === 'login' || to.name === 'dashboard') {
		return next();
	}
	next('/login');
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
