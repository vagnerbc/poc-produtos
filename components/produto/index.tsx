import { Center } from '@chakra-ui/react'
import React from 'react'
import { IProduto } from '../../model/produto'

type Props = {
    produto: IProduto
}
const Produto = ({ produto }: Props) => {
    return (
        <Center bg="tomato" h="100px" color="white">
            {produto.nome}
        </Center>
    )
}

export default Produto
