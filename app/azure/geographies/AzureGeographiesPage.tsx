'use client'

import { Flex, Text, Heading, Box } from '@radix-ui/themes'
import { AzureRegion } from '@/app/azure/regions/AzureRegionsTable'

interface AzureGeography {
  name: string
  regions: AzureRegion[]
}

interface AzureGeographiesPageProps {
  geographies: AzureGeography[]
}

const AzureGeographiesPage = ({ geographies }: AzureGeographiesPageProps) => {
  return (
    <Flex direction="column" gap="3" p="4">
      <Heading size="4">
        <Text style={{ color: 'var(--accent-11)' }}>Azure Geographies</Text>
      </Heading>

      {geographies.map((geography: AzureGeography, i: number) => (
        <Box key={i}>
          <Heading as="h2" size="2">
            {geography.name}
          </Heading>
          <Text>
            {geography.regions.map((region: AzureRegion) => region.displayName).join(', ')}
          </Text>
        </Box>
      ))}
    </Flex>
  )
}

export default AzureGeographiesPage
