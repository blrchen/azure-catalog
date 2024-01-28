'use client'

import { ReactNode, useCallback, useRef } from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import { useResizeObservable } from '@/hooks/useResizeObservable'

export interface PageLayoutProps {
  title?: ReactNode
  subTitle?: ReactNode
  filter?: ReactNode
  children?: ReactNode
  onResize?: (height: number) => void
}

const PageLayout = (props: PageLayoutProps) => {
  const { title, subTitle, filter, children, onResize } = props
  const root = useRef<HTMLDivElement>(null)

  const onRootResize = useCallback<(entries: ResizeObserverEntry[]) => void>(
    (entries) => {
      const { contentRect } = entries[0]
      console.log(contentRect.height)
      onResize?.(contentRect.height + 145)
    },
    [onResize]
  )

  useResizeObservable(root.current, onRootResize, { debounceTime: 10 })

  return (
    <Flex direction="column" gap="3" p="4" className="flex-1">
      <Flex ref={root} direction="column" gap="3">
        {title && <Heading size="4">{title}</Heading>}
        {subTitle && (
          <Heading size="3" weight="medium">
            {subTitle}
          </Heading>
        )}
        {filter}
      </Flex>
      {children}
    </Flex>
  )
}

export default PageLayout
