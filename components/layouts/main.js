import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelCatLoader from '../voxel-cat-loader'

const LazyVoxelCat = dynamic(() => import('../voxel-cat'), {
  ssr: false,
  loading: () => <VoxelCatLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kami's homepage" />
        <meta name="author" content="Kami Nasri" />
        <meta name="author" content="Snufkin D" />

        <title>Kami Nasri - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelCat />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main