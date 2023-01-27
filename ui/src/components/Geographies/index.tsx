import React, { useEffect, useState } from 'react'

import { List } from 'antd'
import axios from 'axios'

import { AWS_GEOGRAPHIES_FILE, AZURE_GEOGRAPHIES_FILE } from '@/pages/constants'

interface GeographiesProps {
  filename: string
}

const Geographies = (props: GeographiesProps) => {
  const { filename } = props
  const [dataSource, setDataSource] = useState<{ title: string; description: string }[]>([])

  useEffect(() => {
    axios
      .get(filename)
      .then((response) => {
        const list = []
        for (const d of response.data) {
          const regions = []
          for (const r of d.regions) {
            let regionName = ''
            if (filename === AZURE_GEOGRAPHIES_FILE) {
              regionName = `${r.displayName}`
            } else if (filename === AWS_GEOGRAPHIES_FILE) {
              regionName = `${r.displayName}`
            }

            regions.push(regionName)
          }
          list.push({ title: d.geography, description: regions.join(', ') })
        }
        setDataSource(list)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [filename])

  return (
    <List
      renderItem={(item: { title: string; description: string }) => (
        <List.Item>
          <List.Item.Meta title={item.title} description={item.description}>
            {item.description}
          </List.Item.Meta>
        </List.Item>
      )}
      itemLayout="horizontal"
      dataSource={dataSource}
    />
  )
}

export default Geographies
