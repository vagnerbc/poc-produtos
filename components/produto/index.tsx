import { useCallback, useState, useEffect } from 'react'
import { Center, Button, Input, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TProduto } from "services/api/produtos/types";
import { produtoUseCase } from 'services/use-cases';

type Props = {
  produto: TProduto;
};

const Produto = ({ produto }: Props) => {
  const [name, setName] = useState(produto.name);

  const handleRemove = useCallback((produto: TProduto) => {
    produtoUseCase.delete(produto);
  }, []);

  useEffect(() => {
    if (name === produto.name) return;
    setTimeout(() => {
      produtoUseCase.update({ ...produto, name });
    }, 2000);
  }, [name, produto]);

  return (
    <Center bg="background" h="180px" w="100%" shadow="lg" borderRadius={6}>
      <Flex direction="column">
        <Text fontWeight="bold" color="secondary">{name} - {produto.sku}</Text>
        <Input
          placeholder="Novo nome do produto"
          value={name}
          my={4}
          variant="primary"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="delete" onClick={() => handleRemove(produto)}>Deletar</Button>
      </Flex>
    </Center>
  );
};

export default Produto;
