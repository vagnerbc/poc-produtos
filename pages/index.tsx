import { useCallback, useEffect } from 'react'
import {
  Box,
  SimpleGrid,
  Spinner,
  Flex,
  useBreakpointValue
} from 'components/atoms'
import CardProduto from 'components/molecules/produto/card'
import { useSync } from 'hooks/useSync'
import { useSelector, selectors, store, actions } from 'store'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import Header from 'components/molecules/produto/header'

function Home() {
  useSync(['produtos'])
  const scrollMargin = useBreakpointValue({
    base: '400px',
    sm: '400px',
    md: '300px'
  })
  const offsetCount = useBreakpointValue({
    base: 8,
    sm: 8,
    lg: 12,
    xl: 16
  })

  useEffect(() => {
    store.dispatch(actions.produtos.setOffsetCount(offsetCount))
  }, [offsetCount])

  const produtos = useSelector(selectors.produtos.getPaginatedProdutos)
  const hasNextPage = useSelector(selectors.produtos.getHasNextPage)

  const loading = useSelector(
    (state) => state.produtos.syncStatus === 'loading'
  )

  const loadMore = useCallback(() => {
    store.dispatch(actions.produtos.setOffset())
  }, [])

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    rootMargin: `0px 0px ${scrollMargin} 0px`,
    delayInMs: 400
  })

  return (
    <Box w="100%" h="100vh">
      <Header />
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        p={4}
      >
        {produtos.map((produto, index) => (
          <CardProduto produto={produto} key={index} />
        ))}
      </SimpleGrid>
      {(loading || hasNextPage) && (
        <Flex
          pt={4}
          pb={6}
          direction="row"
          justifyContent="center"
          ref={sentryRef}
        >
          <Spinner color="primary" />
        </Flex>
      )}
    </Box>
  )
}

export default Home
