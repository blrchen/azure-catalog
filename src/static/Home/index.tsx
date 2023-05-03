import React from 'react'

import { Row } from 'antd'

import { observer } from '@/hooks'
import PagePanel from '@/components/PagePanel'
import HomepageTable from '@/static/Home/HomeTable'

const Home = () => {
  return (
    <PagePanel title="Cloud Catalog">
      <Row>
        <HomepageTable />
      </Row>
    </PagePanel>
  )
}

export default observer(Home)
