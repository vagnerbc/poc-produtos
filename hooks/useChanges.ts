import { useCallback, useEffect } from 'react'
import { actions, store, TDucksNames } from 'store'

export const useChanges = (ducks: TDucksNames[]) => {
  const countChanges = useCallback(() => {
    ducks.forEach((duck) => {
      if (!actions[duck].countChanges) return
      store.dispatch(actions[duck].countChanges())
    })
  }, [ducks])

  useEffect(() => {
    countChanges()
  }, [countChanges])
}
