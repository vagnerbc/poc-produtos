import { useEffect, useState } from 'react'

export const useConnection = () => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsOnline(false)
    })
    window.addEventListener('online', () => {
      setIsOnline(true)
    })

    return () => {
      window.removeEventListener('offline', () => {
        setIsOnline(false)
      })
      window.removeEventListener('online', () => {
        setIsOnline(true)
      })
    }
  }, [])

  return { isOnline }
}
