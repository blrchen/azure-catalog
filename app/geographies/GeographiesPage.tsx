'use client'

import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { AzureRegion } from '@/app/regions/RegionsTable'
import PageLayout from '@/components/PageLayout'

interface AzureGeography {
  name: string
  regions: AzureRegion[]
}

interface AzureGeographiesPageProps {
  geographies: AzureGeography[]
}

const GeographiesPage = ({ geographies }: AzureGeographiesPageProps) => {
  console.log(geographies)
  return (
    <PageLayout
      title="Azure Geographies"
      subTitle="Azure Geographies refer to the physical locations around the world where Microsoft Azure has established its data centers. These geographies ensure that customer data residency, sovereignty, compliance, and resiliency requirements are honored within geographical boundaries. They are divided into regions, which are sets of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network."
    >
      <Flex direction="column" gap="3" p="4">
        {geographies.map((geography: AzureGeography, i: number) => (
          <Card key={geography.name} variant="surface" className="p-5">
            <Heading size="4">
              <Text style={{ color: 'var(--accent-11)' }}> {geography.name}</Text>
            </Heading>
            <Text as="div" color="gray" size="3" mb="4">
              {geography.regions.map((region: AzureRegion) => region.displayName).join(', ')}
            </Text>
          </Card>
        ))}
      </Flex>
    </PageLayout>
  )
}

export default GeographiesPage
