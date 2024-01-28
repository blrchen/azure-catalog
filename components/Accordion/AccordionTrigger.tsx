import { forwardRef } from 'react'
import { Header, Trigger } from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import cs from 'classnames'

export const AccordionTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="AccordionHeader">
    <Trigger ref={ref} className={cs('AccordionTrigger', className)} {...props}>
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Trigger>
  </Header>
))
AccordionTrigger.displayName = Trigger.displayName
