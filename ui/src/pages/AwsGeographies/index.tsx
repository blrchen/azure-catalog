import React from 'react'

import { Card } from 'antd'

import Geographies from '@/components/Geographies'
import PagePanel from '@/components/PagePanel'
import { AWS_GEOGRAPHIES_FILE } from '@/pages/constants'

const AwsGeographies = () => (
  <PagePanel title="AWS Geographies">
    <Card bordered={false}>
      <Geographies filename={AWS_GEOGRAPHIES_FILE} />
    </Card>
  </PagePanel>
)
export default AwsGeographies
