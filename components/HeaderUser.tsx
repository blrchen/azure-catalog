'use client'

import { Box, Avatar, DropdownMenu } from '@radix-ui/themes'
import { SiOpenai } from 'react-icons/si'

export const HeaderUser = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Box>
          <Avatar fallback={<SiOpenai className="h-4 w-4" />} size="2" radius="full" />
        </Box>
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  )
}

export default HeaderUser
