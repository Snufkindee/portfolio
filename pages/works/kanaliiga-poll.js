import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Kanaliiga Poll">
      <Container>
        <Title>
          Kanaliiga Poll <Badge>2022</Badge>
        </Title>
        <P>
          Custom styles for a poll
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Used in Kanaliiga&apos;s Rocket League streams</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Snufkindee/kanaliiga-poll">
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>29.03.2022</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>More about</Center>
        </Heading>
  
        <UnorderedList my={8}>
          <ListItem>
            <Link href="https://poll.ma.pe">
              <Badge mr={2} mb={1}>Poll</Badge>
              Twitch poll Overlay
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://kanaliiga.fi/english/">
              <Badge mr={2} mb={1}>Kanaliiga</Badge>
              What is Kanaliiga?
            </Link>
          </ListItem>
        </UnorderedList>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chackra'