import { AzureRegion } from '@/app/azure/regions/AzureRegionsTable'

const getRegions = async () => {
  const response = await fetch(
    `https://azurespeedjobs20231104.blob.core.windows.net/jobs/cloud-catalog/azure/regions.json`
  )
  return await response.json()
}

export default async function Index() {
  const regions = await getRegions()
  return regions.map((region: AzureRegion) => <div>{region.displayName}</div>)
}
