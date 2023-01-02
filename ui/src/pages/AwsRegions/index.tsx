import React from 'react'

import { Card } from 'antd'

import PagePanel from '@/components/PagePanel'
import Regions from '@/components/Regions'
import { AWS_REGIONS_FILE } from '@/pages/constants'

const AwsRegions = () => (
  <PagePanel title="AWS Regions">
    <Card bordered={false}>
      <Regions filename={AWS_REGIONS_FILE} />
    </Card>
  </PagePanel>
)

export default AwsRegions
