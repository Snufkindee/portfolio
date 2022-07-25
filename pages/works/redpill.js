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
    <Layout title="Red Pill">
      <Container>
        <Title>
          Red Pill <Badge>2016</Badge>
        </Title>
        <P>
          Mobile game that I made for my thesis. The objective was to see and compare differences between
           different game engines. 
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>LibGDX was my go-to framework for developing games</ListItem>
          <ListItem>This project required more time on the math problems rather than developing</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android, iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>LibGDX</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://bitbucket.org/Kamizu/redpill/src/master/">
              Bitbucket
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>31.01.2016</span>
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