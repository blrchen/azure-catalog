'use client'

import { useRef } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable, DataTableProps } from '@/components'

export type AzureRegion = {
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

interface AzureRegionsTableProps {
  regions: AzureRegion[]
  className?: string
  variant?: DataTableProps['variant']
  height?: number | string
}

const AzureRegionsTable = ({
  className,
  variant = 'surface',
  regions,
  height = 'calc(100vh - 210px)'
}: AzureRegionsTableProps) => {
  const tableRef = useRef<any>()

  const columns: ColumnDef<AzureRegion>[] = [
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
      accessorKey: 'latitude',
      header: 'Latitude'
    },
    {
      accessorKey: 'longitude',
      header: 'Longitude'
    },
    {
      accessorKey: 'pairedRegion',
      header: 'PairedRegion'
    },
    {
      accessorKey: 'availabilityZoneCount',
      header: 'AvailabilityZoneCount'
    },
    {
      accessorKey: 'restricted',
      header: 'Restricted'
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

export default AzureRegionsTable
