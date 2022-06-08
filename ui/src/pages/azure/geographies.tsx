import React from 'react';
import { AZURE_GEOGRAPHIES_FILE } from "../../common/constants";
import Geographies from "../../components/geographies";

const AzureGeographies: React.FC = () => {
  return (
    <Geographies
      title="Azure Geographies"
      filename={ AZURE_GEOGRAPHIES_FILE }
    />
  );
};

export default AzureGeographies;
