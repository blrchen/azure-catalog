import React from 'react'

import { Row } from 'antd'
import PagePanel from '@/components/PagePanel'
import AwsRegionTable from '@/static/AwsRegions/components/AwsRegionTable'

const AzureRegions = () => (
  <PagePanel title="AWS Regions">
    <Row>
      <AwsRegionTable />
    </Row>
  </PagePanel>
)

export default AzureRegions
