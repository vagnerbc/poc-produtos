import { Box, SimpleGrid, Spinner, Flex } from "components/atoms";
import CardProduto from "components/molecules/produto/card";
import { useSync } from "hooks/useSync";
import { useSelector, selectors, store, actions } from "store";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useCallback } from "react";
import Header from "components/molecules/produto/header";

export default function Home() {
  useSync(['produtos']);

  const loading = useSelector((state) => state.produtos.syncStatus === 'loading');
  const hasNextPage = useSelector((state) => state.produtos.produtos.length > state.produtos.offset);

  const loadMore = useCallback(() => {
    store.dispatch(actions.produtos.setOffset())
  }, [])

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    rootMargin: '0px 0px 400px 0px',
  });

  const produtos = useSelector(selectors.produtos.getProdutos);

  return (
    <Box w="100%" h="100vh">
      <Header />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} p={4}>
        {produtos.map((produto, index) => (
          <CardProduto produto={produto} key={index} />
        ))}
      </SimpleGrid>
      {(loading || hasNextPage) && (
        <Flex pt={4} direction="row" justifyContent="center" ref={sentryRef}>
          <Spinner />
        </Flex>
      )}
    </Box>
  );
}
