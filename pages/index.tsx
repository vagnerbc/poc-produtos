import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Box, SimpleGrid } from "@chakra-ui/react";

import Product from "components/product";
import { ProductCollection } from "services/proxies/product/collection";
import { getProxy } from "services/proxies";
import { ProductService } from "services/api/product-service";
import { Repository } from "services/repository/config";

export default function Home() {
  const [products, setProducts] = useState<ProductCollection[]>([]);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const product = getProxy('products', '/products')
  //     const response = await product.getAll();
  //     setProducts(response.data);
  //   }
  //   getProducts()
  // }, []);

  useEffect(() => {
    const repository = new Repository();
    const getProducts = async () => {
      const service = new ProductService();
      const response = await service.getAll();
      setProducts(response.data);
    };
    getProducts();
  }, []);

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
