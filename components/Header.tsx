'use client'

import React, { useCallback, useState } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Avatar, Flex, Heading, IconButton, Select, Tooltip } from '@radix-ui/themes'
import cs from 'classnames'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineHome } from 'react-icons/ai'
import { CiSquareQuestion, CiViewTable } from 'react-icons/ci'
import { FaAdjust, FaGithub, FaMoon, FaRegSun } from 'react-icons/fa'
import { Link } from './Link'
import { useTheme } from './Themes'

export interface HeaderProps {
  children?: React.ReactNode
  gitHubLink?: string
  ghost?: boolean
}

const menuItems = [
  {
    key: '/',
    icon: <AiOutlineHome className="w-4 h-4" />,
    label: 'Home'
  },
  {
    key: '/regions',
    icon: <CiViewTable className="w-4 h-4" />,
    label: 'Regions'
  },
  {
    key: '/geographies',
    icon: <CiViewTable className="w-4 h-4" />,
    label: 'Geographies'
  },
  {
    key: '/faq',
    icon: <CiSquareQuestion className="w-4 h-4" />,
    label: 'FAQ'
  }
]

export const Header = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [show, setShow] = useState(false)

  const toggleNavBar = useCallback(() => {
    setShow((state) => !state)
  }, [])

  return (
    <header
      className={cs('block shadow-sm sticky top-0 dark:shadow-gray-500 py-3 px-4 z-20')}
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <Flex align="center" gap="3">
        <NextLink href="/">
          <Heading as="h2" size="3" style={{ maxWidth: 200 }}>
            Azure Catalog
          </Heading>
        </NextLink>
        <Flex align="center" gap="3" className={cs('navbar-collapse', { show: show })}>
          {menuItems.map((item) => {
            const href = item.key
            return (
              <Link
                key={item.key}
                className="inline-flex gap-2 px-3 items-center break-all  whitespace-nowrap"
                href={href}
                color={pathname === href ? undefined : 'gray'}
              >
                {item.icon} {item.label}
              </Link>
            )
          })}
        </Flex>
        <Flex align="center" gap="3" className="ml-auto">
          <Avatar
            color="gray"
            size="2"
            radius="full"
            fallback={
              <Link href="https://github.com/blrchen/azure-catalog">
                <FaGithub />
              </Link>
            }
          />
          <Select.Root value={theme} onValueChange={setTheme}>
            <Select.Trigger radius="full" />
            <Select.Content>
              <Select.Item value="light">
                <FaRegSun />
              </Select.Item>
              <Select.Item value="dark">
                <FaMoon />
              </Select.Item>
              <Select.Item value="system">
                <FaAdjust />
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
        <Tooltip content="Navigation">
          <IconButton
            size="3"
            variant="ghost"
            color="gray"
            className="md:hidden"
            onClick={toggleNavBar}
          >
            <HamburgerMenuIcon width="16" height="16" />
          </IconButton>
        </Tooltip>
      </Flex>
    </header>
  )
}
