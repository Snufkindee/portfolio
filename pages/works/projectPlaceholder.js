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
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="placeholder-project-name">
      <Container>
        <Title>
          Placeholder <Badge>1992-1993</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/footprint.png" alt="icon" />
        </Center>
        <P>
          Placeholder project description
        </P>
        <P>
          More text
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Is good</ListItem>
          <ListItem>Very nice</ListItem>
          <ListItem>
            Not so nice
          </ListItem>
          <ListItem>
            Somewhat nice
          </ListItem>
          <ListItem>
            Less nice
          </ListItem>
          <ListItem>
            Is okay
          </ListItem>
          <ListItem>Not so okay</ListItem>
          <ListItem>
            Decent
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 98</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://www.google.com">
              v0.0.1
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>20.08.1992</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://www.google.com">
              <Badge mr={2}>Seiska</Badge>
              Seiskan uutislinkki
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/walknote_eyecatch.png" alt="thumb" />
          <WorkImage src="/images/works/walknote_eyecatch.png" alt="thumb" />
        </SimpleGrid>
        <WorkImage src="/images/works/walknote_eyecatch.png" alt="thumb" />
        <WorkImage src="/images/works/walknote_eyecatch.png" alt="thumb" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'