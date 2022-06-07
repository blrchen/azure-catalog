import React, { useEffect, useState } from 'react';
import { Card, Table } from 'antd';
import axios from "axios";
import { AZURE_REGIONS_FILE } from "../../components/sidemenu/routers";

const AzureRegions: React.FC = () => {
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
      title: 'Physical Location',
      dataIndex: 'physicalLocation',
      key: 'physicalLocation',
    },
    {
      title: 'Availability Zone #',
      dataIndex: 'availabilityZoneCount',
      key: 'availabilityZoneCount',
    },
    {
      title: 'Paired Region',
      dataIndex: 'pairedRegion',
      key: 'pairedRegion',
    }
  ];

  useEffect(() => {
    axios
      .get(AZURE_REGIONS_FILE)
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

export default AzureRegions;
