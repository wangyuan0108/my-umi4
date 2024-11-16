// [
//     {
//       path: "/",
//       redirect: "/home",
//     },
//     {
//       name: "首页",
//       path: "/home",
//       component: "./Home",
//     },
//     {
//       name: "权限演示",
//       path: "/access",
//       component: "./Access",
//     },
//     {
//       name: " CRUD 示例",
//       path: "/table",
//       component: "./Table",
//     },
//   ],

// import userRoutes from './modules/user';


// const routes = [
//   { path: '/', exact: true, redirect: '/home' },
//   { ...userRoutes },
// ];

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: '@/pages/Access',
  },
  
];
export default routes;
