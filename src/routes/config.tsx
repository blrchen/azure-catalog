import React, { lazy, ReactNode, Suspense } from 'react'

import type { RouteObject } from 'react-router-dom'

import Loading from '@/components/Loading'
import BaseLayout from '@/layouts/BaseLayout'
import AzureRegions from '@/static/AzureRegions'
import AzureGeographies from '@/static/AzureGeographies'
import AwsGeographies from '@/static/AwsGeographies'
import AwsRegions from '@/static/AwsRegions'

const Home = lazy(() => import('@/static/Home'))

const Page404 = lazy(() => import('@/static/404'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: lazyLoad(<Home />)
      },
      {
        path: '/azure-regions',
        element: lazyLoad(<AzureRegions />)
      },
      {
        path: '/azure-geographies',
        element: lazyLoad(<AzureGeographies />)
      },
      {
        path: '/aws-regions',
        element: lazyLoad(<AwsRegions />)
      },
      {
        path: '/aws-geographies',
        element: lazyLoad(<AwsGeographies />)
      },
      {
        path: '/404',
        element: lazyLoad(<Page404 />)
      },
      {
        path: '*',
        element: lazyLoad(<Page404 />)
      }
    ]
  }
]
