import { Center } from "@chakra-ui/react";
import React from "react";
import { IProduto } from "model/produto";

type Props = {
  produto: IProduto;
};
const Produto = ({ produto }: Props) => {
  return (
    <Center bg="primary.base" h="100px" w="100%" color="white">
      {produto.name} - {produto.sku}
    </Center>
  );
};

export default Produto;
