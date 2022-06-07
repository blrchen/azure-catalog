import React, { useEffect, useState } from 'react';
import { Card, Table } from 'antd';
import axios from "axios";
import { AWS_REGIONS_FILE} from "../../components/sidemenu/routers";

const AwsRegions: React.FC = () => {
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: 'Geography',
      dataIndex: 'geography',
      key: 'geography',
    },
    {
      title: 'Region Name',
      dataIndex: 'displayName',
      key: 'displayName',
    },
    {
      title: 'Availability Zone #',
      dataIndex: 'availabilityZoneCount',
      key: 'availabilityZoneCount',
    }
  ];

  useEffect(() => {
    axios
      .get(AWS_REGIONS_FILE)
      .then((response) => {
        setDataSource(response.data);
      });
  }, []);

  return (
    <Card title="Azure Regions">
      <Table dataSource={ dataSource } columns={ columns } />;
    </Card>

  );
};

export default AwsRegions;
