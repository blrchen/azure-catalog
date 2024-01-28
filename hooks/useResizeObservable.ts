import { useEffect, useRef } from 'react'
import { debounce } from 'lodash-es'

const DEFAULT_OPTIONS = {
  debounceTime: 0
}

export const useResizeObservable = (
  targetEl: HTMLElement | null,
  cb: ResizeObserverCallback,
  options = DEFAULT_OPTIONS
) => {
  const observer = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    if (!cb || typeof cb !== 'function') {
      console.warn(`You must provide a valid callback function, instead you've provided ${cb}`)
      return
    }
    const { debounceTime } = options
    observer.current = new ResizeObserver(debounceTime > 0 ? debounce(cb, debounceTime) : cb)
  }, [cb, options])

  useEffect(() => {
    if (!observer.current || !targetEl) return
    try {
      observer.current.observe(targetEl)
    } catch (e) {
      console.error(e)
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [targetEl])
}
