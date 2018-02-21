import goods from '../../components/sell/goods/goods'
import ratings from '../../components/sell/ratings/ratings'
import seller from '../../components/sell/seller/seller'
import main from '../../components/sell/main'

export default {
  path: '/main',
  name: 'main',
  component: main,
  children: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ]
}
