import React from 'react'

import { Card } from 'antd'

import { AWS_GEOGRAPHIES_FILE } from '@/common/constants'
import Geographies from '@/components/geographies'
import PagePanel from '@/components/PagePanel'

const AwsGeographies = () => {
  return (
    <PagePanel title="AWS Geographies">
      <Card bordered={false}>
        <Geographies filename={AWS_GEOGRAPHIES_FILE} />
      </Card>
    </PagePanel>
  )
}
export default AwsGeographies
