import { Avatar as ChakraAvatar, AvatarBadge } from 'components/atoms'
import { useNetwork } from 'hooks/useNetwork'

const Avatar: React.FC = () => {
  const isOnline = useNetwork()

  return (
    <ChakraAvatar size={'sm'} src={'https://ui-avatars.com/api/?name=yandeh'}>
      <AvatarBadge boxSize="1.25em" bg={isOnline ? 'green.500' : 'tomato'} />
    </ChakraAvatar>
  )
}

export default Avatar
