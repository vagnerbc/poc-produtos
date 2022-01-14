import { Center } from "@chakra-ui/react";
import React from "react";
import { TProduto } from "services/api/produtos/types";

type Props = {
  produto: TProduto;
};

const Produto = ({ produto }: Props) => {
  return (
    <Center bg="primary.base" h="100px" w="100%" color="white">
      {produto.name} - {produto.sku}
    </Center>
  );
};

export default Produto;
