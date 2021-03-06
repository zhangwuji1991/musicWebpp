import Vue from 'vue'
import Router from 'vue-router'
import recommend from 'components/recommend/recommend'
import rank from 'components/rank/rank'
import search from 'components/search/search'
import singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
	{
	  path: '/',
	  redirect: '/singer'
	},
  	{
      path: '/recommend',
      component: recommend
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/singer',
      component: singer
    }
  ]
})
