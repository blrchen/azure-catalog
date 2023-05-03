import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'

import MainMenu from '@/components/MainMenu'

import styles from './index.module.less'

interface SiderMenuProps {
  collapsedWidth?: number
  siderWidth?: number
}

const { Sider } = Layout

const defaultProps = {
  collapsedWidth: 48,
  siderWidth: 200
}

function SiderMenu(props: SiderMenuProps) {
  const { siderWidth, collapsedWidth } = { ...defaultProps, ...props }
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [transition, setTransition] = useState<string>('none')

  useEffect(() => {
    setTransition('all 0.2s ease 0s')
  }, [])

  return (
    <>
      <div
        style={{
          width: collapsed ? collapsedWidth : siderWidth,
          overflow: 'hidden',
          flex: `0 0 ${collapsed ? collapsedWidth : siderWidth}px`,
          maxWidth: collapsed ? collapsedWidth : siderWidth,
          minWidth: collapsed ? collapsedWidth : siderWidth,
          transition
        }}
      />
      <Sider
        collapsible
        breakpoint="lg"
        className={styles.sider}
        collapsed={collapsed}
        collapsedWidth={collapsedWidth}
        theme="light"
        width={siderWidth}
        onCollapse={setCollapsed}
      >
        {/* <div className="logo" /> */}
        <div style={{ flex: '1 1 0%', overflow: 'hidden auto' }}>
          <MainMenu
            style={{ height: '100%', borderRight: 0 }}
            className={styles.menu}
            mode="inline"
          />
        </div>
      </Sider>
    </>
  )
}

export default SiderMenu
