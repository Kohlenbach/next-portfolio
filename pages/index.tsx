import { VStack, Heading, Text, HStack, Button, Box, Grid } from "@chakra-ui/react";
import Image from 'next/image'
import Header from "../components/header";
import Head from '../components/head'
import { IoSend as EmailIcon } from 'react-icons/io5'
import { IoLogoLinkedin  as LinkedinIcon } from 'react-icons/io5'
import { motion } from 'framer-motion'

export default function MainPage({ data }) {
  function handleEmail() {
    window.open('mailto:kohle.lukas@gmail.com')
  }

  function handleFollow() {
    window.open('https://www.linkedin.com/in/lukas-kohlenbach-a70568191/')
  }

  function goTo(url) {
    window.open(url)
  }

  return (
    <>
      <Head title="Lukas Kohlenbach"/>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}>
        <Header/>
      </motion.div>
      <motion.div animate={{ opacity: 1, translateY: 0 }} initial={{ opacity: 0, translateY: '50px' }} transition={{ duration: .5 }}>
        <VStack pb="24" pt="12" px={[8, 32, 32, 32, 44, 64, 96]} w="full" spacing="8" alignItems="start">
          <Image
            src="/photo.jpeg"
            priority
            quality={100}
            width={75}
            height={75}
            objectFit="cover"
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
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
          px={[8, 32, 32, 32, 44, 64, 96]} w="full"
          mb="24"
          gap="4"
        >
          {data.map(project => (
            <motion.div whileHover={{ translateY: '-5px' }}>
              <Box
                shadow="base"
                borderRadius="md"
                p="4"
                key={project.id}
                alignItems="start"
                minH="44"
                mb="6"
              >
                <Text fontWeight="bold">{project.name}</Text>
                <Text>{project.description}</Text>
                <Button mt="4" size="sm" onClick={() => goTo(project.html_url)}>Go to project</Button>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </motion.div>
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