'use client'

import { Flex, Text, Heading, Box } from '@radix-ui/themes'
import { AwsRegion } from '@/app/aws/regions/AwsRegionsTable'

interface AwsGeography {
  name: string
  regions: AwsRegion[]
}

interface AwsGeographiesPageProps {
  geographies: AwsGeography[]
}

const AwsGeographiesPage = ({ geographies }: AwsGeographiesPageProps) => {
  return (
    <Flex direction="column" gap="3" p="4">
      <Heading size="4">
        <Text style={{ color: 'var(--accent-11)' }}>AWS Geographies</Text>
      </Heading>
      {geographies.map((geography: AwsGeography, i: number) => (
        <Box key={i}>
          <Heading as="h2" size="2">
            {geography.name}
          </Heading>
          <Text>{geography.regions.map((region) => region.displayName).join(', ')}</Text>
        </Box>
      ))}
    </Flex>
  )
}

export default AwsGeographiesPage
