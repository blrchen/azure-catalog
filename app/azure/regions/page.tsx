import AzureRegionsPage from './AzureRegionsPage'

const getRegions = async () => {
  const response = await fetch(
    `https://azurespeedjobs20231104.blob.core.windows.net/jobs/cloud-catalog/azure/regions.json`
  )
  return await response.json()
}

const Page = async () => {
  try {
    const regions = await getRegions()
    return <AzureRegionsPage regions={regions} />
  } catch (error) {
    console.error('Error loading regions.', error)
    return <div>Error loading regions.</div>
  }
}

export default Page
