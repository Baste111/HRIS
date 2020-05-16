import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "login",
    component: () => import("../pages/Login"),
  },

  {
    path: "/home",
    component: () => import("../layouts/Home"),
    children: [
      {
        path: "employee-management",
        component: () => import("../layouts/partials/Sub"),
        children: [
          {
            path: "",
            name: "employee-list",
            component: () => import("../pages/employee/List"),
            meta: {
              breadcrumbs: [
                {
                  text: "Employee List",
                  icon: "mdi-clipboard-list-outline",
                  to: { name: "employee-list" },
                },
              ],
            },
          },
          {
            path: "create",
            name: "employee-form",
            component: () => import("../pages/employee/Form"),
            meta: {
              breadcrumbs: [
                {
                  text: "Employee List",
                  icon: "mdi-clipboard-list-outline",
                  to: { name: "employee-list" },
                },
                {
                  text: "Employee Form",
                  icon: "mdi-form-select",
                  to: { name: "employee-form" },
                },
              ],
            },
          },
        ],
      },

      {
        path: "department-management",
        name: "department-list",
        component: () => import("../pages/department/List"),
        meta: {
          breadcrumbs: [
            {
              text: "Department List",
              icon: "mdi-clipboard-list-outline",
              to: { name: "department-list" },
            },
          ],
        },
        children: [
          {
            path: "create",
            name: "department-form",
            component: () => import("../pages/department/Form"),
            meta: {
              breadcrumbs: [
                {
                  text: "Department List",
                  icon: "mdi-clipboard-list-outline",
                  to: { name: "department-list" },
                },
                {
                  text: "Department Form",
                  icon: "mdi-form-select",
                  to: { name: "department-form" },
                },
              ],
            },
          },
        ],
      },

      {
        path: "designation-management",
        name: "designation-list",
        component: () => import("../pages/designation/List"),
        meta: {
          breadcrumbs: [
            {
              text: "Designation List",
              icon: "mdi-clipboard-list-outline",
              to: { name: "designation-list" },
            },
          ],
        },
        children: [
          {
            path: "create",
            name: "designation-form",
            component: () => import("../pages/designation/Form"),
            meta: {
              breadcrumbs: [
                {
                  text: "Designation List",
                  icon: "mdi-clipboard-list-outline",
                  to: { name: "designation-list" },
                },
                {
                  text: "Designation Form",
                  icon: "mdi-form-select",
                  to: { name: "designation-form" },
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
