import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EditProduct from '../views/EditProduct.vue';
import AddProduct from '../views/AddProduct.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Add',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/products/:id',
    name: 'EditProduct',
    component: EditProduct,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
