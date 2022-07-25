import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="DST - Mod">
      <Container>
        <Title>
          Don&apos;t Starve Together - Mod <Badge>2018</Badge>
        </Title>
        <P>
          Custom character for the game Don&apos;t Starve Together
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>The character is based on me and my quirks</ListItem>
          <ListItem>Art by the legend himself, Elias Rantanen</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Steam - Don&apos;t Starve Together</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Lua</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://bitbucket.org/Kamizu/kami-dst/src/master/">
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>29.03.2018</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chackra'