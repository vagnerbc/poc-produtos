import { CircularProgress, CircularProgressLabel, Box } from 'components/atoms'
import { useChanges } from 'hooks/useChanges'
import { useSelector } from 'store'

const Changes = () => {
  useChanges(['produtos'])

  const isSyncing = useSelector(
    (state) => state.produtos.syncStatus === 'loading'
  )
  const count = useSelector((state) => state.produtos.countChanges)

  return (
    <Box width="32px" height="32px">
      {!isSyncing ? null : (
        <CircularProgress
          isIndeterminate={isSyncing}
          color="secondary"
          size="32px"
          thickness="8px"
        >
          {!count ? null : (
            <CircularProgressLabel color="white" fontSize="12px">
              {count}
            </CircularProgressLabel>
          )}
        </CircularProgress>
      )}
    </Box>
  )
}

export default Changes
