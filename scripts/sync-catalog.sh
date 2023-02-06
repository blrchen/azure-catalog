# This script syncs latest cloud catalog data produced by azure-speed-jobs

SOURCE_DIR="https://azurespeedjobs.blob.core.windows.net/jobs/cloud-catalog"
TARGET_DIR="../ui/public/data"

curl ${SOURCE_DIR}/aws/geographies.json > ${TARGET_DIR}/aws/geographies.json
curl ${SOURCE_DIR}/aws/regions.json > ${TARGET_DIR}/aws/regions.json
curl ${SOURCE_DIR}/azure/geographies.json > ${TARGET_DIR}/azure/geographies.json
curl ${SOURCE_DIR}/azure/regions.json > ${TARGET_DIR}/azure/regions.json