import { forwardRef } from 'react'
import { Item } from '@radix-ui/react-accordion'
import cs from 'classnames'

export const AccordionItem = forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={cs('AccordionItem', className)} {...props} />
))

AccordionItem.displayName = 'AccordionItem'
