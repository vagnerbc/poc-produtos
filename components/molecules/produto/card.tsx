import { useCallback, useState, useEffect } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Center, Button, Input, Flex, Text, IconButton } from 'components/atoms'
import { TProduto } from 'services/api/produtos/types'
import { store, actions, useSelector } from 'store'

type Props = {
  produto: TProduto
}

const Produto = ({ produto }: Props) => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(produto.name)
  }, [produto.name])

  const loadingMap = useSelector((state) => state.produtos.loadingMap)
  const isLoading = loadingMap.includes(produto.sku)

  const handleRemove = useCallback(() => {
    store.dispatch(actions.produtos.delete(produto.sku))
  }, [produto])

  const handleSave = useCallback(() => {
    store.dispatch(actions.produtos.update({ ...produto, name }))
  }, [name, produto])

  return (
    <Center
      bg="background"
      h="200px"
      w="100%"
      shadow="md"
      borderRadius={6}
      p={6}
    >
      <Flex direction="column" width="100%">
        <Text fontWeight="bold" color="secondary" noOfLines={2} h="48px">
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
          <Button variant="save" isLoading={isLoading} onClick={handleSave}>
            Salvar
          </Button>
          <IconButton
            variant="delete"
            aria-label="delete"
            isLoading={isLoading}
            icon={<DeleteIcon />}
            onClick={handleRemove}
          />
        </Flex>
      </Flex>
    </Center>
  )
}

export default Produto
