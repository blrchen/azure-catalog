import { forwardRef } from 'react'
import { Content } from '@radix-ui/react-accordion'
import cs from 'classnames'

export const AccordionContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content ref={ref} className="AccordionContent" {...props}>
    <div className={cs('AccordionContentText', className)}>{children}</div>
  </Content>
))

AccordionContent.displayName = Content.displayName
