import { useCallback, useState, useEffect } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Center, Button, Input, Flex, Text, IconButton } from 'components/atoms'
import { TProduto } from 'services/api/produtos/types'
import { produtoUseCase } from 'services/use-cases'

type Props = {
  produto: TProduto
}

const Produto = ({ produto }: Props) => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(produto.name)
  }, [produto.name])

  const handleRemove = useCallback(() => {
    produtoUseCase.delete(produto)
  }, [produto])

  const handleSave = useCallback(() => {
    produtoUseCase.update({ ...produto, name })
  }, [name, produto])

  return (
    <Center bg="background" h="180px" w="100%" shadow="lg" borderRadius={6}>
      <Flex direction="column">
        <Text fontWeight="bold" color="secondary">
          {produto.name} - {produto.sku}
        </Text>
        <Input
          placeholder="Novo nome do produto"
          value={name}
          my={4}
          variant="primary"
          onChange={(e) => setName(e.target.value)}
        />
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="save" onClick={handleSave}>
            Salvar
          </Button>
          <IconButton
            variant="delete"
            aria-label="delete"
            icon={<DeleteIcon />}
            onClick={handleRemove}
          />
        </Flex>
      </Flex>
    </Center>
  )
}

export default Produto
