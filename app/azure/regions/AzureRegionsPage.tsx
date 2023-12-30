'use client'

import { useEffect, useState } from 'react'
import { Flex, Text, Heading } from '@radix-ui/themes'
import AzureRegionsTable, { AzureRegion } from './AzureRegionsTable'
import FilterBar, { Filter, FilterMap } from './FilterBar'

interface AzureRegionsPageProps {
  regions: AzureRegion[]
}

const AzureRegionsPage = ({ regions }: AzureRegionsPageProps) => {
  const [filter, setFilter] = useState<Filter>({
    geographies: []
  })
  const [filteredRegions, setFilteredRegions] = useState<AzureRegion[]>([])
  const [filterMap, setFilterMap] = useState<FilterMap>()

  useEffect(() => {
    if (regions?.length) {
      const filters: FilterMap = { geographies: new Set<string>() }
      try {
        setFilteredRegions(
          regions.filter((region) => {
            filters.geographies.add(region.geography)
            return filter?.geographies.includes(region.geography) || !filter?.geographies.length
          })
        )
        setFilterMap(filters)
      } catch (error) {
        console.error('Error while filtering regions:', error)
      }
    }
  }, [regions, filter])

  return (
    <Flex direction="column" gap="3" p="4">
      <Heading size="4">
        <Text style={{ color: 'var(--accent-11)' }}>Azure Regions</Text>
      </Heading>
      <FilterBar filterMap={filterMap} filter={filter} setFilter={setFilter} />
      <AzureRegionsTable regions={filteredRegions} />
    </Flex>
  )
}

export default AzureRegionsPage
