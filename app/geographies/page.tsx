import GeographiesPage from './GeographiesPage'

const getGeographies = async () => {
  try {
    const response = await fetch(
      `https://azurespeedjobs20231104.blob.core.windows.net/jobs/azure-catalog/geographies.json`
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch geographies:', error)
    throw error
  }
}

const Page = async () => {
  const geographiesData = await getGeographies()
  return <GeographiesPage geographies={geographiesData} />
}

export default Page
