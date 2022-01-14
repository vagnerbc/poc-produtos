import { Center } from "@chakra-ui/react";
import React from "react";
import { TProduct } from "services/api/products/types";

type Props = {
  product: TProduct;
};

const Product = ({ product }: Props) => {
  return (
    <Center bg="primary.base" h="100px" w="100%" color="white">
      {product.name} - {product.sku}
    </Center>
  );
};

export default Product;
