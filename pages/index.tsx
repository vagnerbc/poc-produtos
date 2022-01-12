import { useEffect } from "react";
import { GetStaticProps, GetServerSideProps } from "next";
import { Box, SimpleGrid } from "@chakra-ui/react";

import Produto from "components/produto";
import { IProduto } from "model/produto";
import DBHandler from "repository/DBHandler";
import ProductDBService from "services/produtos/ProductDBService";
import ProdutoService from "services/produtos/ProdutoService";

type Props = {
  produtos: IProduto[];
};

export default function Home({ produtos }: Props) {
  const productService = new ProdutoService(
    new ProductDBService(new DBHandler("test"))
  );

  useEffect(() => {
    const cadastraProdutos = async () => {
      await productService.cadastraDB(produtos);
    };
    cadastraProdutos();
  }, []);

  useEffect(() => {
    const sincronizaProdutos = async () => {
      await productService.sincronizaDB();
    };

    sincronizaProdutos();
  }, []);

  return (
    <Box w="100%" h="100vh" p={4}>
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
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/produtos");
  const json = await res.json();

  return {
    props: {
      produtos: json.produtos,
    },
  };
};

/**
 * SERVER SIDE RENDERING
 */
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/produtos");
//   const json = await res.json();

//   return {
//     props: {
//       produtos: json.produtos,
//     },
//   };
// };
