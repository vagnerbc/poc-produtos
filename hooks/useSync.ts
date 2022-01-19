import { useEffect, useCallback } from 'react'
import { TDucksNames, store, actions } from 'store'
import { useNetwork } from './useNetwork'

export const useSync = (ducks: TDucksNames[], interval = 60 * 2000) => {
  const isOnline = useNetwork()

  const sync = useCallback(() => {
    console.log('chamou sync')
    ducks.forEach((duck) => {
      if (!actions[duck].sync) return
      store.dispatch(actions[duck].sync())
    })
  }, [ducks])

  useEffect(() => {
    const intervalHash = setInterval(
      (function callback() {
        sync()
        return callback
      })(),
      interval
    )
    if (!isOnline) {
      clearInterval(intervalHash)
    }
    return () => clearInterval(intervalHash)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, isOnline])
}
