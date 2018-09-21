import Home from '@/components/home/index';
import Kind from '@/components/kind/index';
import Cart from '@/components/cart/index';
import User from '@/components/user/index';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  }
]

export default routes;
