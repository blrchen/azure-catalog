import React from 'react';
import { AWS_REGIONS_FILE } from "../../common/constants";
import Regions from "../../components/regions";

const AwsRegions: React.FC = () => {
  return (
    <Regions
      title="AWS Regions"
      filename={ AWS_REGIONS_FILE }
    />
  );
};

export default AwsRegions;
