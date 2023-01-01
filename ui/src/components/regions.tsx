import React, { useEffect, useState } from 'react'

import { Table } from 'antd'
import axios from 'axios'

type Props = {
  filename: string
}
const Regions: React.FC<Props> = ({ filename }) => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      title: 'Region Id',
      dataIndex: 'regionName',
      key: 'regionName'
    },
    {
      title: 'Region Name',
      dataIndex: 'displayName',
      key: 'displayName'
    },
    {
      title: 'Geography',
      dataIndex: 'geography',
      key: 'geography'
    },
    {
      title: 'Availability Zone #',
      dataIndex: 'availabilityZoneCount',
      key: 'availabilityZoneCount'
    }
  ]

  useEffect(() => {
    axios
      .get(filename)
      .then((response) => {
        console.log('0102=======', response.data)
        setDataSource(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [filename])

  return <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 15 }} />
}

export default Regions
