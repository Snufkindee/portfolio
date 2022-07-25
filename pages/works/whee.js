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
    <Layout title="Whee">
      <Container>
        <Title>
          Whee Online Store <Badge>2020</Badge>
        </Title>
        <P>
          A responsive online store mockup
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Made for an interview task</ListItem>
          <ListItem>Future Kami would made this with React rather than Angular</ListItem>
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
            <span>14.11.2020</span>
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