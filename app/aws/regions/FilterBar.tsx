import React from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'
import { ChevronDownIcon } from '@radix-ui/react-icons'
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
    <Flex gap="3">
      <MultipleSelect
        placeholder="Select geographies"
        data={Array.from(filterMap?.geographies || []).map((item) => ({
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
        <Button variant="outline" className="flex justify-between">
          <Text as="p" className="w-52 truncate">
            {filter?.geographies.join() || 'Geography'}
          </Text>
          <ChevronDownIcon />
        </Button>
      </MultipleSelect>
    </Flex>
  )
}

export default FilterBar
