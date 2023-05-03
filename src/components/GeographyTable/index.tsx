import React from 'react'
import { List } from 'antd'

interface ListItem {
  title: string
  description: string
}

interface Props {
  sourceData: {
    geography: string
    regions: {
      displayName: string
    }[]
  }[]
}

const GeographyTable = ({ sourceData }: Props) => {
  const list: ListItem[] = sourceData.map((d) => {
    const regions = d.regions.map((r) => r.displayName)
    return { title: d.geography, description: regions.join(', ') }
  })

  const renderItem = (item: ListItem) => (
    <List.Item>
      <List.Item.Meta title={item.title} description={item.description} />
    </List.Item>
  )

  return <List renderItem={renderItem} itemLayout="horizontal" dataSource={list} />
}

export default GeographyTable
