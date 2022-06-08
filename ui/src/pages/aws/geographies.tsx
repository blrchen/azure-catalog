import React from 'react';
import Geographies from "../../components/geographies";
import { AWS_GEOGRAPHIES_FILE } from "../../common/constants";

const AwsGeographies: React.FC = () => {
  return (
    <Geographies
      title="AWS Geographies"
      filename={ AWS_GEOGRAPHIES_FILE }
    />
  );
};

export default AwsGeographies;
