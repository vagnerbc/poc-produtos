import { useEffect, useCallback, useRef } from 'react'
import { TDucksNames, store, actions } from 'store'

export const useSync = (ducks: TDucksNames[], interval = 60 * 2000) => {
  const intervalRef = useRef<boolean>(false)

  const sync = useCallback(() => {
    if (!window.navigator.onLine) {
      console.warn('Sem conexão com a internet')
      return
    }

    ducks.forEach((duck) => {
      if (!actions[duck].sync) return
      store.dispatch(actions[duck].sync())
    })
  }, [ducks])

  useEffect(() => {
    if (!intervalRef.current) {
      sync()
      intervalRef.current = true
    }
    const intervalHash = setInterval(sync, interval)
    return () => clearInterval(intervalHash)
  }, [sync, interval])
}
