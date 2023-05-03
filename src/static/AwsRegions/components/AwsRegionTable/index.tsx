import React from 'react'

import { Table } from 'antd'

import SourceData from '../../../../assets/aws/regions.json'

const AwsRegionTable = () => {
  const columns = [
    {
      title: 'Region Id',
      dataIndex: 'regionName'
    },
    {
      title: 'Region Name',
      dataIndex: 'displayName'
    },
    {
      title: 'Geography',
      dataIndex: 'geography'
    },
    {
      title: 'Availability Zone #',
      dataIndex: 'availabilityZoneCount'
    }
  ]

  return (
    <Table
      dataSource={SourceData}
      columns={columns}
      rowKey="regionName"
      pagination={{ pageSize: 15 }}
    />
  )
}

export default AwsRegionTable
