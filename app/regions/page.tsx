import RegionsPage from './RegionsPage'

const getRegions = async () => {
  try {
    const response = await fetch(
      `https://azurespeedjobs20231104.blob.core.windows.net/jobs/azure-catalog/regions.json`
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch geographies:', error)
    throw error
  }
}

const Page = async () => {
  const regions = await getRegions()
  return <RegionsPage regions={regions} />
}

export default Page
