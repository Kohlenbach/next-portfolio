import { Flex, Heading, Container, useColorMode } from '@chakra-ui/react'
import { IoMoonOutline as MoonSvg, IoSunnyOutline as SunSvg } from 'react-icons/io5'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container
      as="header"
      px={[8, 32, 32, 32, 44, 64, 96]}
      py="4"
      w="full"
      maxW="full"
    >
      <Flex justifyContent="space-between">
        <Heading className="anton-font" fontSize="larger">LUKI</Heading>
        {(colorMode === 'light')
          ? <MoonSvg size={25} cursor="pointer" onClick={() => toggleColorMode()}/>
          : <SunSvg size={25} cursor="pointer" onClick={() => toggleColorMode()}/>
        }
      </Flex>
    </Container>
  )
}