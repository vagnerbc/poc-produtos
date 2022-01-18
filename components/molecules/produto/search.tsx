import { Input } from 'components/atoms'
import { useDispatch, actions, useSelector } from 'store'

const Search = () => {
  const dispatch = useDispatch()
  const term = useSelector((state) => state.produtos.term)

  const handleSearch = (text: string) => {
    dispatch(actions.produtos.setTerm(text))
  }

  return (
    <Input
      onChange={(e) => handleSearch(e.target.value)}
      value={term}
      maxWidth="800px"
      mx={8}
      placeholder="Buscar produtos"
      variant="primary"
    />
  )
}

export default Search
