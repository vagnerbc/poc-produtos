import { Center } from "@chakra-ui/react";
import React from "react";
import { ProductCollection } from "services/repository/product-repository";

type Props = {
  product: ProductCollection;
};

const Product = ({ product }: Props) => {
  return (
    <Center bg="primary.base" h="100px" w="100%" color="white">
      {product.name} - {product.sku}
    </Center>
  );
};

export default Product;
