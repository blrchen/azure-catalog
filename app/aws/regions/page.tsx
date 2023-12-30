import AwsRegionsPage from './AwsRegionsPage'

const getRegions = async () => {
  const response = await fetch(
    `https://azurespeedjobs20231104.blob.core.windows.net/jobs/cloud-catalog/aws/regions.json`
  )
  return await response.json()
}

const Page = async () => {
  try {
    const regions = await getRegions()
    return <AwsRegionsPage regions={regions} />
  } catch (error) {
    console.error('Error loading regions.', error)
    return <div>Error loading regions.</div>
  }
}

export default Page
