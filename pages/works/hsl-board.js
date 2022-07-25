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
    <Layout title="HSL Board">
      <Container>
        <Title>
          HSL Board <Badge>2022</Badge>
        </Title>
        <P>
          Timetable to show my mostly used stops timetables and arriving busses with real-time data.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Replicated to look like HSL&apos;s own timetables</ListItem>
          <ListItem>Future plans on putting this on Rasperry Pi and make magic with it</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Svelte, GraphQL</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Snufkindee/hsl-board">
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>27.03.2022</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>API&apos;s used</Center>
        </Heading>
  
        <UnorderedList my={8}>
          <ListItem>
            <Link href="https://www.hsl.fi/en/hsl/open-data">
              <Badge mr={2} mb={1}>HSL</Badge>
              HSL&apos;s Routing and Real-time API
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