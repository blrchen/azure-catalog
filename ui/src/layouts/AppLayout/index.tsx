import React, { ReactNode } from 'react'

import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'
import SiderMenu from '@/components/SiderMenu'

import styles from './index.module.less'

export interface AppLayoutProps {
  children?: ReactNode
}

const { Content } = Layout

const AppLayout = (props: AppLayoutProps) => {
  const onGlobalSearch = (_value: string) => {
    //
  }

  return (
    <Layout hasSider className={styles.layout}>
      <SiderMenu />
      <Layout>
        <HeaderBar />
        <Content className={styles.main}>
          <Outlet />
        </Content>
        <FooterBar />
      </Layout>
    </Layout>
  )
}

export default AppLayout
