import React from 'react'

import { Row } from 'antd'
import PagePanel from '@/components/PagePanel'
import AzureRegionTable from './components/AzureRegionTable'

const AzureRegions = () => (
  <PagePanel title="Azure Regions">
    <Row>
      <AzureRegionTable />
    </Row>
  </PagePanel>
)

export default AzureRegions
