'use client'

import React, { useCallback, useState } from 'react'
import { Text, Flex, Grid, Checkbox, Popover, ScrollArea } from '@radix-ui/themes'
import { MultipleSelectProps } from './interface'

export const MultipleSelect = ({
  style,
  className,
  children,
  disabled = false,
  placeholder = 'Please select date',
  editable = true,
  size,
  popperContent,
  data,
  columns = '1',
  onSelect,
  onChange,
  onVisibleChange,
  ...rest
}: MultipleSelectProps) => {
  const [popupVisible, setPopupVisible] = useState<boolean>(rest.popupVisible || false)

  const [value, setValue] = useState<string[] | undefined>(() => {
    return rest.value || rest.defaultValue
  })

  const mergedPopupVisible = 'popupVisible' in rest ? rest.popupVisible : popupVisible

  const setOpen = useCallback(
    (visible: boolean, callback?: () => void) => {
      setPopupVisible(visible)
      onVisibleChange?.(visible)
      callback?.()
    },
    [onVisibleChange]
  )

  const onCheckedChange = (checked: boolean | string, value: string) => {
    setValue((state) => {
      if (state === undefined) {
        state = []
      }
      if (checked) {
        state.push(value)
      } else {
        state.splice(state.indexOf(value), 1)
      }

      onChange?.(state)
      return [...state]
    })
  }

  return (
    <Popover.Root open={mergedPopupVisible} onOpenChange={setOpen}>
      <Popover.Trigger placeholder={placeholder}>{children}</Popover.Trigger>
      <Popover.Content className="min-w-[280px] p-0" {...popperContent}>
        <ScrollArea type="auto" className="max-h-[430px]">
          <Grid columns={columns} gap="3" width="auto" p="3">
            {data?.map((item) => (
              <Text as="label" size="2" key={item.value}>
                <Flex gap="2">
                  <Checkbox
                    variant="surface"
                    size={size}
                    value={item.value}
                    checked={value?.includes(item.value)}
                    onCheckedChange={(checked) => {
                      onCheckedChange(checked, item.value)
                    }}
                  />
                  {item.label}
                </Flex>
              </Text>
            ))}
          </Grid>
        </ScrollArea>
      </Popover.Content>
    </Popover.Root>
  )
}

MultipleSelect.displayName = 'SelectMultiple'

export default MultipleSelect
