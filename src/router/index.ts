import React from 'react'

export default {
  routes: [
    {
      exact: true,
      path: '/',
      isDynamic: true,
      component: React.lazy(() => import('@/pages/home'))
    },
    {
      exact: true,
      path: '/login',
      isDynamic: true,
      component: React.lazy(() => import('@/pages/login'))
    }
  ]
}
