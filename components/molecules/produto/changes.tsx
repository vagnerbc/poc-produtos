import { useChanges } from 'hooks/useChanges'
import { useNetwork } from 'hooks/useNetwork'
import { useSelector } from 'store'

const Changes = () => {
  const isOnline = useNetwork()
  useChanges(['produtos'])

  const count = useSelector((state) => state.produtos.countChanges)

  return (
    <div>
      {!isOnline && <span>offline</span>}
      <span>{count}</span>
    </div>
  )
}

export default Changes
