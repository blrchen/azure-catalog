import React from 'react'

import { Result, Button } from 'antd'
import { useNavigate } from 'react-router'

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <Result
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/')
          }}
        >
          Back Home
        </Button>
      }
      status="404"
      subTitle="Sorry, the page you visited does not exist."
      title="404"
    />
  )
}

export default Page404
