import { Input } from 'components/atoms';
import { useDispatch, actions, useSelector } from 'store';

const Search = () => {
  const term = useSelector((state) => state.produtos.term);
  const dispatch = useDispatch();

  const handleSearch = (term) => {
    dispatch(actions.produtos.setTerm(term));
  };

  return (
    <Input
      onChange={(e) => handleSearch(e.target.value)}
      value={term}
      maxWidth="800px"
      mx={8}
      placeholder="buscar produtos"
      variant="primary"
    />
  );
};

export default Search;
