import React, { CSSProperties, ReactNode } from 'react'

import type { PageHeaderProps } from 'antd'
import { PageHeader } from 'antd'
import cs from 'classnames'

import styles from './index.module.less'

export interface PagePanelProps {
  className?: string
  style?: CSSProperties
  title?: string
  subTitle?: ReactNode
  extra?: ReactNode
  breadcrumb?: PageHeaderProps['breadcrumb']
  body?: ReactNode
  children?: ReactNode
}

const PagePanel = (props: PagePanelProps) => {
  const { className, style, title, subTitle, breadcrumb, extra, body, children } = props
  return (
    <div className={cs(styles.page, className)} style={style}>
      <PageHeader
        breadcrumb={breadcrumb}
        ghost={false}
        subTitle={subTitle}
        title={title}
        extra={extra}
      >
        {body}
      </PageHeader>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default PagePanel
