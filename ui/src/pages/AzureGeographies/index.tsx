import React from 'react'

import { Card } from 'antd'

import { AZURE_GEOGRAPHIES_FILE } from '@/common/constants'
import Geographies from '@/components/geographies'
import PagePanel from '@/components/PagePanel'

const AwsGeographies = () => {
  return (
    <PagePanel title="Azure Geographies">
      <Card bordered={false}>
        <Geographies filename={AZURE_GEOGRAPHIES_FILE} />
      </Card>
    </PagePanel>
  )
}
export default AwsGeographies
