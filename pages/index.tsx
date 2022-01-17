import { Box, SimpleGrid } from "components/atoms";
import CardProduto from "components/molecules/produto/card";
import { useSync } from "hooks/useSync";
import { useSelector } from "store";

export default function Home() {
  useSync(['produtos']);

  const produtos = useSelector((state) => state.produtos.produtos);

  return (
    <Box w="100%" h="100vh" p={4}>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {produtos.map((produto, index) => (
          <CardProduto produto={produto} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
