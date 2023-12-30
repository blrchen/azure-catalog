'use client'

import { useRef } from 'react'
import { DataTable, DataTableProps } from '@/components'
import { ColumnDef } from '@tanstack/react-table'

export type AwsRegion = {
  displayName: string
  geography: string
  latitude: string
  longitude: string
  pairedRegion: string
  physicalLocation: string
  regionalDisplayName: string
  name: string
  availabilityZoneCount: number
  restricted: boolean
}

interface AwsRegionsTableProps {
  regions: AwsRegion[]
  className?: string
  variant?: DataTableProps['variant']
  height?: number | string
}

const AwsRegionsTable = ({
  className,
  variant = 'surface',
  regions,
  height = 'calc(100vh - 210px)'
}: AwsRegionsTableProps) => {
  const tableRef = useRef<any>()

  const columns: ColumnDef<AwsRegion>[] = [
    {
      accessorKey: 'name',
      header: 'Name'
    },
    {
      accessorKey: 'displayName',
      header: 'DisplayName'
    },
    {
      accessorKey: 'geography',
      header: 'Geography'
    },
    {
      accessorKey: 'physicalLocation',
      header: 'PhysicalLocation'
    },
    {
      accessorKey: 'availabilityZoneCount',
      header: 'AvailabilityZoneCount'
    }
  ]

  return (
    <DataTable
      variant={variant}
      className={className}
      loading={false}
      ref={tableRef}
      columns={columns}
      data={regions}
      style={{ height, minHeight: '400px', width: '100%' }}
    />
  )
}

export default AwsRegionsTable
