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
    <Layout title="Weather">
      <Container>
        <Title>
          Weather Forecast
        </Title>
        <P>
          A simple weather forecast bootstrapped with Create React App
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>One of my first React projects</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Snufkindee/weather-react">
              Source
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>API&apos;s used</Center>
        </Heading>
  
        <UnorderedList my={8}>
          <ListItem>
            <Link href="https://openweathermap.org/api">
              <Badge mr={2} mb={1}>OpenWeather</Badge>
              OpenWeather&apos;s Weather API
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