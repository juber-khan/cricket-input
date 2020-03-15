import Vue from "vue";
import App from "./App.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Matches from "./components/Matches.vue";
import Login from "./components/Login.vue";

Vue.config.productionTip = false;
const router = new VueRouter({
  //mode: 'history',
  routes: [
    { path: '/matches', name:'matches',component: Matches },
    { path: '/login', name:'login', component: Login },
    {path: '*', redirect:'/login'}
  ]
})

router.beforeEach((to, from, next) => {
	if (to.name === 'login' || to.name === 'matches') {
		return next();
	}
	next('/login');
});

Vue.use(VueRouter);

new Vue({
  render: h => h(App)
}).$mount("#app");
