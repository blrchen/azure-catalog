import React from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text } from '@radix-ui/themes'
import { MultipleSelect } from '@/components'

export interface FilterMap {
  geographies: Set<string>
}

export interface Filter {
  geographies: string[]
}

export interface FilterBarProps {
  filterMap?: FilterMap
  filter?: Filter
  setFilter?: (filter: Filter) => void
}

export const FilterBar = ({ filterMap, filter, setFilter }: FilterBarProps) => {
  return (
    <Flex gap="3" justify="between" wrap="wrap">
      <Flex gap="3" wrap="wrap">
        <MultipleSelect
          placeholder="Select Geography"
          value={filter?.geographies}
          data={Array.from(filterMap?.geographies || [])
            .sort()
            .map((item) => ({
              label: item,
              value: item
            }))}
          onChange={(value) => {
            filter!.geographies = value
            setFilter?.({
              ...filter!
            })
          }}
        >
          <Button variant="outline" color="gray" className="flex justify-between">
            <Text as="p">
              Geography:
              {filterMap?.geographies.size === filter?.geographies.length
                ? ` All (${filter?.geographies.length}/${filterMap?.geographies.size || 0})`
                : ` Filtered (${filter?.geographies.length}/${filterMap?.geographies.size || 0})`}
            </Text>
            <ChevronDownIcon />
          </Button>
        </MultipleSelect>
      </Flex>
    </Flex>
  )
}

export default FilterBar
