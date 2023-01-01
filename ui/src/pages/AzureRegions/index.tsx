import React from 'react'

import { Card } from 'antd'

import { AZURE_REGIONS_FILE } from '@/common/constants'
import PagePanel from '@/components/PagePanel'
import Regions from '@/components/regions'

const AwsRegions = () => {
  return (
    <PagePanel title="Azure Regions">
      <Card bordered={false}>
        <Regions filename={AZURE_REGIONS_FILE} />;
      </Card>
    </PagePanel>
  )
}

export default AwsRegions
