'use client'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

const queryClient = new QueryClient({
  // defaultOptions: {}
})

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      {/* {<ReactQueryDevtools initialIsOpen={false} />} */}
    </ReactQueryClientProvider>
  )
}

export default QueryClientProvider
