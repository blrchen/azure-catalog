import React from 'react'
import PagePanel from '@/components/PagePanel'
import GeographyTable from 'src/components/GeographyTable'
import SourceData from '../../assets/azure/geographies.json'

const AzureGeographies = () => (
  <PagePanel title="Azure Geographies">
    <GeographyTable sourceData={SourceData} />
  </PagePanel>
)
export default AzureGeographies
