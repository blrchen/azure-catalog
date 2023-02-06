import React from 'react'

import { Card } from 'antd'

import PagePanel from '@/components/PagePanel'

const About = () => (
  <PagePanel title="About">
    <Card bordered={false}>
      <p>
        Source code of this site can be found at
        <a target="_blank" rel="noreferrer" href="https://github.com/blrchen/cloud-catalog">
          {' '}
          GitHub
        </a>
      </p>
      <p>
        If you find any bugs or have a feature request, please create an issue
        <a target="_blank" rel="noreferrer" href="https://github.com/blrchen/cloud-catalog/issues">
          {' '}
          here
        </a>
      </p>
    </Card>
  </PagePanel>
)

export default About
