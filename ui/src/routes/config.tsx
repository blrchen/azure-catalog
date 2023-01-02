import React, { lazy, ReactNode, Suspense } from 'react'

import type { RouteObject } from 'react-router-dom'

import Loading from '@/components/Loading'
import AppLayout from '@/layouts/AppLayout'
import AzureGeographies from '@/pages/AzureGeographies'
import AzureRegions from '@/pages/AzureRegions'

const About = lazy(() => import('@/pages/About'))
const AwsRegions = lazy(() => import('@/pages/AwsRegions'))
const AwsGeographies = lazy(() => import('@/pages/AwsGeographies'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/about',
        element: lazyLoad(<About />)
      },
      {
        path: '/aws/regions',
        element: lazyLoad(<AwsRegions />)
      },
      {
        path: '/aws/geographies',
        element: lazyLoad(<AwsGeographies />)
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
        element: lazyLoad(<AwsRegions />)
      }
    ]
  }
]
