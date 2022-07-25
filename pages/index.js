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
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
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
          textAlign="center"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a software developer based in Finland!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" >
              Kami Nasri
            </Heading>
            <Paragraph>Developer / Rocket League Coach / Kanaliiga Organiser</Paragraph>
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
                  src="/images/avatar.jpg"
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
          <Box>
          <Paragraph>
          Kami is a software developer based in Finland with a passion for building software. 
          Building many products for various clients he has a deep understanding for launching products, 
          from planning and developing all the way to solving real-life problems with code. 
          During his free-time, he loves hanging out with his cats or relax while playing video games or guitar.
          </Paragraph>
          </Box>
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
            Hello world!
          </BioSection>
          <BioSection>
            <BioYear>2011</BioYear>
            Electronics and ICT professional certificate
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Game developer @ Mobilive Ltd
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Co-Founder &amp; Game Developer @ Taphold Oy
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Bachelor of Engineering (Software Engineering)
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Software Developer @ Cybercom Group
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Developer @ Frantic
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Software Designer @ Solita
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ♥️
          </Heading>
          <Paragraph>
            Cats (Animals in general), Hiking, Board Games, Video Games, Playing Guitar.
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">Find me on:</Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Snufkindee">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />} >
                  @Snufkindee
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/kami-nasri">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />} >
                  @Kami Nasri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/snufkindee/">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />} >
                  @Snufkindee
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