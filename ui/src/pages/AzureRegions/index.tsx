import React from 'react'

import { Card } from 'antd'

import PagePanel from '@/components/PagePanel'
import Regions from '@/components/Regions'
import { AZURE_REGIONS_FILE } from '@/pages/constants'

const AwsRegions = () => (
  <PagePanel title="Azure Regions">
    <Card bordered={false}>
      <Regions filename={AZURE_REGIONS_FILE} />
    </Card>
  </PagePanel>
)

export default AwsRegions
