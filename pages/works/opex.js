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
    <Layout title="Opex">
      <Container>
        <Title>
          Opex <Badge>2019</Badge>
        </Title>
        <P>
          Mobile game that tests your reflexes and &apos;teaching&apos; skills.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Made for a friend for his birthday</ListItem>
          <ListItem>Fun project that was made with a tight deadline</ListItem>
          <ListItem>Art by the legend himself, Elias Rantanen</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity</span>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>05.04.2019</span>
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