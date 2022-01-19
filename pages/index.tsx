import { Box } from 'components/atoms'
import Header from 'components/molecules/produto/header'
import List from 'components/organisms/produto/list'
import { useSync } from 'hooks/useSync'

function Home() {
  useSync(['produtos'])

  return (
    <Box w="100%" h="100vh">
      <Header />
      <List />
    </Box>
  )
}

export default Home
