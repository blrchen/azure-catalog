import React from 'react'
import { Table, TableProps } from 'antd'

interface HomepageTableData {
  key: string
  page: string
  link: string
}

const dataSource: HomepageTableData[] = [
  {
    key: '1',
    page: 'Azure Regions',
    link: '/azure-regions'
  },
  {
    key: '2',
    page: 'Azure Geographies',
    link: '/azure-geographies'
  },
  {
    key: '3',
    page: 'AWS Regions',
    link: '/aws-regions'
  },
  {
    key: '4',
    page: 'AWS Geographies',
    link: '/aws-geographies'
  }
]

const columns: TableProps<HomepageTableData>['columns'] = [
  {
    title: 'Page',
    dataIndex: 'page',
    key: 'page'
  },
  {
    title: 'Link',
    dataIndex: 'link',
    key: 'link',
    render: (link: string) => <a href={link}>Link</a>
  }
]

const HomepageTable = () => {
  return <Table dataSource={dataSource} columns={columns} />
}

export default HomepageTable
