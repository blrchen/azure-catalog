import { CSSProperties } from 'react'
import { PopperContentProps } from '@radix-ui/react-popover'

export interface MultipleSelectProps {
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
  /**
   * Whether to disable
   */
  disabled?: boolean
  /**
   * To set default date
   */
  defaultValue?: string[]
  /**
   * To set date
   */
  value?: string[]
  /**
   *
   */
  data?: { label: string; value: string }[]
  /**
   * The placeholder of date input
   */
  placeholder?: string
  /**
   * The size of input box
   * @defaultValue default
   */
  size?: '1' | '2' | '3'
  /**
   * Whether the popup is visible or not
   */
  popupVisible?: boolean
  /**
   * Whether input box can be entered.
   * @defaultValue true
   */
  editable?: boolean
  columns?: string
  /**
   *
   */
  popperContent?: PopperContentProps
  /**
   * Callback when the visibility of the popup is changed
   */
  onVisibleChange?: (visible?: boolean) => void
  /**
   * Callback when the selected value changes
   */
  onChange?: (value: string[]) => void
  /**
   * Callback when the show date changes but the selected value does not change
   */
  onSelect?: (dateString: string, date: Date | undefined) => void
}
