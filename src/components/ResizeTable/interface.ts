import type { TableColumnType, TableProps } from 'antd'
import { ResizableProps, ResizeHandle } from 'react-resizable'

export interface ResizeTableProps<T> extends Omit<TableProps<T>, 'columns'> {
  columns?: ResizeColumnType<T>[]
}

export interface ResizeColumnType<T> extends TableColumnType<T> {
  resize?: boolean
  minWidth?: number
}

export interface ResizableTitleProps {
  onResize?: ResizableProps['onResize']
  width?: ResizableProps['width']
  minWidth?: number
}

export interface ResizeHandleProps {
  handleAxis?: ResizeHandle
}
