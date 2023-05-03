import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cs from 'classnames'
import { Menu, MenuProps } from 'antd'
import { EnvironmentOutlined, HomeOutlined } from '@ant-design/icons'

import styles from './index.module.less'

export interface MainMenuProps {
  style?: React.CSSProperties
  className?: string
  theme?: MenuProps['theme']
  mode?: MenuProps['mode']
}

const menuItems = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>
  },
  {
    key: '/azure-regions',
    icon: <EnvironmentOutlined />,
    label: <Link to="/azure-regions">Azure Regions</Link>
  },
  {
    key: '/azure-geographies',
    icon: <EnvironmentOutlined />,
    label: <Link to="/azure-geographies">Azure Geographies</Link>
  },
  {
    key: '/aws-regions',
    icon: <EnvironmentOutlined />,
    label: <Link to="/aws-regions">AWS Regions</Link>
  },
  {
    key: '/aws-geographies',
    icon: <EnvironmentOutlined />,
    label: <Link to="/aws-geographies">AWS Geographies</Link>
  }
]

const getMenuKey = (pathname: string) => {
  return pathname
}

const MainMenu = (props: MainMenuProps) => {
  const { style, className, theme, mode = 'inline' } = props

  const location = useLocation()

  const [current, setcurrent] = useState<string>(getMenuKey(location.pathname))

  useEffect(() => {
    setcurrent(getMenuKey(location.pathname))
  }, [location.pathname])

  return (
    <Menu
      style={style}
      className={cs(styles.menu, className)}
      items={menuItems}
      theme={theme}
      mode={mode}
      selectedKeys={[current]}
    />
  )
}

export default MainMenu
