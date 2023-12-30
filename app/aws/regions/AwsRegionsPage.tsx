'use client'

import { useEffect, useState } from 'react'
import { Flex, Text, Heading } from '@radix-ui/themes'
import AwsRegionsTable, { AwsRegion } from './AwsRegionsTable'
import FilterBar, { Filter, FilterMap } from './FilterBar'

interface AwsRegionsPageProps {
  regions: AwsRegion[]
}

const AwsRegionsPage = ({ regions }: AwsRegionsPageProps) => {
  const [filter, setFilter] = useState<Filter>({
    geographies: []
  })
  const [filteredRegions, setFilteredRegions] = useState<AwsRegion[]>([])
  const [filterMap, setFilterMap] = useState<FilterMap>()

  useEffect(() => {
    if (regions?.length) {
      const filters: FilterMap = { geographies: new Set<string>() }
      try {
        setFilteredRegions(
          regions.filter((region: AwsRegion) => {
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
        <Text style={{ color: 'var(--accent-11)' }}>AWS Regions</Text>
      </Heading>
      <FilterBar filterMap={filterMap} filter={filter} setFilter={setFilter} />
      <AwsRegionsTable regions={filteredRegions} />
    </Flex>
  )
}

export default AwsRegionsPage
