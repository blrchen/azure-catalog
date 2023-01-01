import React, { lazy, ReactNode, Suspense } from 'react'

import type { RouteObject } from 'react-router-dom'

import Loading from '@/components/Loading'
import AppLayout from '@/layouts/AppLayout'
import AzureGeographies from '@/pages/AzureGeographies'
import AzureRegions from '@/pages/AzureRegions'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const AWSRegions = lazy(() => import('@/pages/AWSRegions'))
const AWSGeographies = lazy(() => import('@/pages/AWSGeographies'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: lazyLoad(<Home />)
      },
      {
        path: '/about',
        element: lazyLoad(<About />)
      },
      {
        path: '/aws/regions',
        element: lazyLoad(<AWSRegions />)
      },
      {
        path: '/aws/geographies',
        element: lazyLoad(<AWSGeographies />)
      },
      {
        path: '/azure/regions',
        element: lazyLoad(<AzureRegions />)
      },
      {
        path: '/azure/geographies',
        element: lazyLoad(<AzureGeographies />)
      },
      {
        path: '*',
        element: lazyLoad(<AWSRegions />)
      }
    ]
  }
]
