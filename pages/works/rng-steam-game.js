import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="RNG Steam">
      <Container>
        <Title>
          Random Steam Game <Badge>2021</Badge>
        </Title>
        <P>
          Play dice and let this website choose randomly what to play from your Steam library.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Made this project with to learn Vue 3 + Vite</ListItem>
          <ListItem>Since this project choosing what to play has never been easier</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue 3, Vite, Express</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Snufkindee/random-steam-game">
              Frontend
            </Link>
            {', '}
            <Link href="https://github.com/Snufkindee/steam-rng-backend">
              Backend
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>13.03.2021</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>API&apos;s used</Center>
        </Heading>
  
        <UnorderedList my={8}>
          <ListItem>
            <Link href="https://steamcommunity.com/dev">
              <Badge mr={2} mb={1}>Steam</Badge>
              Steam Web API
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/no-image.png" alt="thumb" />
          <WorkImage src="/images/works/no-image.png" alt="thumb" />
        </SimpleGrid>
        <WorkImage src="/images/works/no-image.png" alt="thumb" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chackra'