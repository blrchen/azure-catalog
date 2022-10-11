import React from "react";
import { AZURE_REGIONS_FILE } from "../../common/constants";
import Regions from "../../components/regions";

const AzureRegions: React.FC = () => {
  return <Regions title="Azure Regions" filename={AZURE_REGIONS_FILE} />;
};

export default AzureRegions;
