import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import auth from './auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },

    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Signup.vue")
    },
    {
      path: "/feeds",
      name: "feeds",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Feeds.vue"),
      meta: {
        middleware: auth
      }
    },
    {
      path: "/peer-assist",
      name: "peerAssist",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PeerAssist.vue"),
    },
    {
      path: "/materials",
      name: "materials",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Materials.vue"),
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
