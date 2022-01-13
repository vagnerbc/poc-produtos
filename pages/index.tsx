import { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import Product from "components/product";
import { productUseCase } from "services/use-cases/";
import { TProduct } from "services/api/products/types";

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await productUseCase.getAll();
      setProducts(response.data);
    };
    getProducts();
  }, []);

  // useEffect(() => {
  //   const syncProducts = async () => {
  //     await productUseCase.sync();
  //   };

  //   syncProducts();
  // }, []);

  return (
    <Box w="100%" h="100vh" p={4}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} spacing={4}>
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

/**
 * STATIC GENERATION
 */
// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/products");
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
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/products");
//   const json = await res.json();

//   return {
//     props: {
//       produtos: json.produtos,
//     },
//   };
// };
