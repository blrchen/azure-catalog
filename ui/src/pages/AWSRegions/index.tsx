import React from 'react'

import { Card } from 'antd'

import { AWS_REGIONS_FILE } from '@/common/constants'
import PagePanel from '@/components/PagePanel'
import Regions from '@/components/regions'

const AwsRegions = () => {
  return (
    <PagePanel title="AWS Regions">
      <Card bordered={false}>
        <Regions filename={AWS_REGIONS_FILE} />;
      </Card>
    </PagePanel>
  )
}

export default AwsRegions
