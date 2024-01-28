'use client'

import { useEffect, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import PageLayout from '@/components/PageLayout'
import FilterBar, { Filter, FilterMap } from './FilterBar'
import RegionsTable, { AzureRegion } from './RegionsTable'

interface AzureRegionsPageProps {
  regions: AzureRegion[]
}

const RegionsPage = ({ regions }: AzureRegionsPageProps) => {
  const [filter, setFilter] = useState<Filter>({
    geographies: []
  })
  const [filterMap, setFilterMap] = useState<FilterMap>()
  const [filteredRegions, setFilteredRegions] = useState<AzureRegion[]>([])
  const [tableHeight, setTableHeight] = useState<string>()

  const onResize = (height: number) => {
    setTableHeight(`calc(100vh - ${height}px)`)
  }

  useEffect(() => {
    if (regions?.length) {
      const filters: FilterMap = { geographies: new Set<string>() }
      setFilteredRegions(
        regions.filter((region) => {
          filters.geographies.add(region.geography)
          return filter?.geographies.includes(region.geography) || !filter?.geographies.length
        })
      )
      setFilterMap(filters)
    }
  }, [regions, filter])

  return (
    <PageLayout
      title="Azure Regions"
      subTitle={
        <Flex gap="3" direction="column">
          <Text>
            An Azure region is a geographical area containing networked datacenters with low-latency
            connections.
          </Text>
          <ul className="list-disc list-inside pl-3">
            <li>
              <strong>Global Distribution:</strong> Azure regions are globally distributed to reduce
              latency and adhere to data regulations.
            </li>
            <li>
              <strong>Availability and Resiliency:</strong> Regions are paired for resource
              replication, backup, and disaster recovery.
            </li>
            <li>
              <strong>Compliance and Data Residency:</strong> Regions help comply with data
              residency laws by allowing location-specific data storage and processing.
            </li>
          </ul>
        </Flex>
      }
      filter={<FilterBar filterMap={filterMap} filter={filter} setFilter={setFilter} />}
      onResize={onResize}
    >
      <RegionsTable regions={filteredRegions} height={tableHeight} />
    </PageLayout>
  )
}

export default RegionsPage
