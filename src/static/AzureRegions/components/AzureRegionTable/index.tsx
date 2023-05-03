import React from 'react'
import { Table } from 'antd'
import SourceData from '../../../../assets/azure/regions.json'

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
    title: 'Physical Location',
    dataIndex: 'physicalLocation'
  },
  {
    title: 'Availability Zone #',
    dataIndex: 'availabilityZoneCount'
  },
  {
    title: 'Paired Region',
    dataIndex: 'pairedRegion'
  }
]

const AzureRegionTable = () => (
  <Table
    dataSource={SourceData}
    columns={columns}
    rowKey={({ regionName }) => regionName}
    pagination={{ pageSize: 15 }}
  />
)

export default AzureRegionTable
