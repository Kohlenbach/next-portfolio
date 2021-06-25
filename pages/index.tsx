import { VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";
import Image from 'next/image'
import Header from "../components/header";
import Head from '../components/head'
import { IoSend as EmailIcon } from 'react-icons/io5'
import { IoLogoLinkedin  as LinkedinIcon } from 'react-icons/io5'

export default function MainPage({ data }) {
  function handleEmail() {
    window.open('mailto:kohle.lukas@gmail.com')
  }

  function handleFollow() {
    window.open('https://www.linkedin.com/in/lukas-kohlenbach-a70568191/')
  }

  return (
    <>
      <Head/>
      <Header/>
      <VStack py="24" px="32" w="full" spacing="8" alignItems="start">
        <Image
          src="/photo.jpg"
          priority
          quality={100}
          width={75}
          height={75}
          className="rounded-image"
        />
        <Heading size="3xl">Hi! I'm Lukas Kohlenbach.</Heading>
        <VStack spacing="2" alignItems="start" fontSize="xl">
          <Text>
            Self-taught software engineer that focuses on user experience,
            automation, and web development.
          </Text>
          <Text>
            Want to improve my software engineer skills and experience with
            decision making.
          </Text>
        </VStack>
        <HStack spacing="4">
          <Button
            size="lg"
            bg="purple.500"
            color="white"
            leftIcon={<EmailIcon />}
            _hover={{ bg: 'purple.400' }}
            _active={{ bg: 'purple.300' }}
            onClick={() => handleEmail()}
          >
            Get in touch
          </Button>
          <Button
            variant="ghost"
            colorScheme="linkedin"
            leftIcon={<LinkedinIcon/>}
            size="lg"
            onClick={() => handleFollow()}
          >
            Follow
          </Button>
        </HStack>
      </VStack>
      {data.map(project => (
        <VStack
          key={project.id}
          alignItems="start"
          px="32" w="full"
          mb="6"
        >
          <Text fontWeight="bold">{project.name}</Text>
          <Text>{project.description}</Text>
          <Button size="sm">Go to project</Button>
        </VStack>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/Kohlenbach/repos')
  const projects = await response.json()

  return {
    props: {
      data: projects
    },
  }
}