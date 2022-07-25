import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Tic Tac Toe">
      <Container>
        <Title>
          Tic Tac Toe <Badge>2020</Badge>
        </Title>
        <P>
          A simple game of Tic Tac Toe
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Made for an interview task</ListItem>
          <ListItem>Nowadays would make this project with other framework than Angular</ListItem>
          <ListItem>First web game</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Angular</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Snufkindee/whee">
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>15.10.2020</span>
          </ListItem>
        </List>
  
        <SimpleGrid columns={2} gap={2} mt={8}>
          <WorkImage src="/images/works/no-image.png" alt="thumb" />
          <WorkImage src="/images/works/no-image.png" alt="thumb" />
        </SimpleGrid>
        <WorkImage src="/images/works/no-image.png" alt="thumb" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chackra'