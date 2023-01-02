import React from 'react'

import { Card } from 'antd'

import Geographies from '@/components/Geographies'
import PagePanel from '@/components/PagePanel'
import { AZURE_GEOGRAPHIES_FILE } from '@/pages/constants'

const AwsGeographies = () => (
  <PagePanel title="Azure Geographies">
    <Card bordered={false}>
      <Geographies filename={AZURE_GEOGRAPHIES_FILE} />
    </Card>
  </PagePanel>
)
export default AwsGeographies
