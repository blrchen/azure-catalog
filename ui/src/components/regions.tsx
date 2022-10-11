import React, { useEffect, useState } from "react";
import { Card, Table } from "antd";
import axios from "axios";

type Props = {
  title: string;
  filename: string;
};
const Regions: React.FC<Props> = ({ title, filename }) => {
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "Region Id",
      dataIndex: "regionName",
      key: "regionName",
    },
    {
      title: "Region Name",
      dataIndex: "displayName",
      key: "displayName",
    },
    {
      title: "Geography",
      dataIndex: "geography",
      key: "geography",
    },
    {
      title: "Availability Zone #",
      dataIndex: "availabilityZoneCount",
      key: "availabilityZoneCount",
    },
  ];

  useEffect(() => {
    axios
      .get(filename)
      .then((response) => {
        setDataSource(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card title={title}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 15 }}
      />
      ;
    </Card>
  );
};

export default Regions;
