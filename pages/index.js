import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const Home = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          text-align="center"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I'm a full-stack developer based in Finland!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kami Nasri
            </Heading>
            <Paragraph>Developer</Paragraph>
          </Box>
            <Box 
              flexShrink={0} 
              mt={{ base: 4, md: 0 }} 
              ml={{ md: 6 }} 
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <ProfileImage
                  src="/images/snufkin.jpg"
                  alt="Profile image"
                  borderRadius="full"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Kerro vähän mitä duunaat</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={ <ChevronRightIcon /> } colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1992</BioYear>
            Born in blaablaablaa, Afkanistan
          </BioSection>
          <BioSection>
            <BioYear>201X</BioYear>
            Completed Ph.D
          </BioSection>
          <BioSection>
            <BioYear>202X</BioYear>
            Season 13 Grand Champion
          </BioSection>
          <BioSection>
            <BioYear>202X to present</BioYear>
            Solita
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ♥️
          </Heading>
          <Paragraph>
            Cats, Games, Playing Gitara etc...
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">Find me on:</Heading>
          <List>
            <ListItem>
              <Link href="https://www.google.com">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />} >
                  @SnufkinD
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.google.com">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />} >
                  @Kami Nasri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.google.com">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoDiscord />} >
                  @Snufkin D
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home;
export { getServerSideProps } from '../components/chackra'