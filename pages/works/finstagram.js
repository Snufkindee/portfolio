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
    <Layout title="Finstagram">
      <Container>
        <Title>
          Finstagram <Badge>2022</Badge>
        </Title>
        <P>
          Instagram frontend clone
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Replicated to look like Instagram</ListItem>
          <ListItem>Mock data is filled with famous finnish people</ListItem>
          <ListItem>Eventually I would like to add some routing and functionality</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Tailwind</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Snufkindee/finstagram">
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>30.07.2022</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chackra'