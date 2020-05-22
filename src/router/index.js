import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '',
    component: () => import("@/views/homepage/Homepage"),
    children: [{
        path: '/department',
        meta: {
          title: "部门管理"
        },
        component: () => import("@/views/department/Department")
      },
      {
        path: '/employee',
        meta: {
          title: "员工管理"
        },
        component: () => import("@/views/employee/Employee")
      },
      {
        path: '/permission',
        meta: {
          title: "权限管理"
        },
        component: () => import("@/views/permission/Permission")
      },
      {
        path: '/role',
        meta: {
          title: "角色管理"
        },
        component: () => import("@/views/role/Role")
      },
      {
        path: '/sysdictionary',
        meta: {
          title: "数据字典管理"
        },
        component: () => import("@/views/sysdictionary/Sysdictionary")
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router