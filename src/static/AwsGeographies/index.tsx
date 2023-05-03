import React from 'react'
import PagePanel from '@/components/PagePanel'
import SourceData from '../../assets/aws/geographies.json'
import GeographyTable from 'src/components/GeographyTable'

const AwsGeographies = () => (
  <PagePanel title="AWS Geographies">
    <GeographyTable sourceData={SourceData} />
  </PagePanel>
)
export default AwsGeographies
