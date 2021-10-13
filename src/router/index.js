import { createRouter, createWebHistory } from "vue-router";

import Questions from "../views/Questions";
import ChildrenQuestions from "../views/ChildrenQuestions";
import DopQuestions from "../views/DopQuestion";
import TheEnd from "../views/TheEnd";
import Start from "../views/Start";
import Testing from "../views/Testing";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/questions/:id",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/children-questions/:id",
    name: "ChildrenQuestions",
    component: ChildrenQuestions,
  },
  {
    path: "/dop-questions/:id",
    name: "DopQuestions",
    component: DopQuestions,
  },

  {
    path: "/theend",
    name: "TheEnd",
    component: TheEnd,
  },
  {
    path: "/testing",
    name: "Testing",
    component: Testing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
