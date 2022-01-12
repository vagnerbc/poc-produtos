import { useEffect } from "react";
import { GetStaticProps, GetServerSideProps } from "next";
import { Box, SimpleGrid } from "@chakra-ui/react";

import Produto from "../components/produto";
import { IProduto } from "../model/produto";
import IndexedDBHandler from "../repository/indexedDBHandler";

type Props = {
  produtos: IProduto[];
};

export default function Home({ produtos }: Props) {
  useEffect(() => {
    const adicionaProdutosIndexedDB = async () => {
      const indexedDb = new IndexedDBHandler("test");
      await indexedDb.createObjectStore(["produtos"]);

      await indexedDb.putBulkValue("produtos", [...produtos]);

      // TESTS
      // await indexedDb.putValue('produtos', { name: 'Leite' });
      // await indexedDb.putBulkValue('produtos', [{ name: 'Cafe' }, { name: 'Chocolate' }]);
      // await indexedDb.getValue('produtos', 1);
      // await indexedDb.getAllValue('produtos');
      // await indexedDb.deleteValue('produtos', 1);
    };

    adicionaProdutosIndexedDB();
  }, []);

  return (
    <Box w='100%' h='100vh' p={4}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} spacing={4}>
        {produtos.map((produto, index) => (
          <Produto produto={produto} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

/**
 * STATIC GENERATION
 */
// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/produtos");
//   const json = await res.json();

//   return {
//     props: {
//       produtos: json.produtos,
//     },
//   };
// };

/**
 * SERVER SIDE RENDERING
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/produtos");
  const json = await res.json();

  return {
    props: {
      produtos: json.produtos,
    },
  };
};
