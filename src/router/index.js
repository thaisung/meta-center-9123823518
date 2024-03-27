import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
// import ProductLayout from "../layouts/ProductLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/",
      component: HomeLayout,
      children: [
        {
          path: "/chat-bot",
          component: () => import("../views/ChatbotView.vue"),
        },
        {
          path: "/upload-data",
          component: () => import("../views/UploadView.vue"),
        },
        {
          path: "/",
          component: () => import("../views/MailView.vue"),
        },
      ]
    },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
