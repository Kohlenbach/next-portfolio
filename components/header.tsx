import { Flex, Heading, Container } from '@chakra-ui/react'
import { IoMoonOutline as MoonSvg } from 'react-icons/io5'

export default function Header() {

  return (
    <Container
      as="header"
      px="32"
      py="4"
      pos="fixed"
      w="full"
      maxW="full"
      backgroundColor="white"
    >
      <Flex justifyContent="space-between">
        <Heading className="anton-font" fontSize="larger">LUKI</Heading>
        <MoonSvg/>
      </Flex>
    </Container>
  )
}