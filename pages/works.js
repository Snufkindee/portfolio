import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import projectThumb from '../public/images/works/walknote_eyecatch.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="project" title="Project 1" thumbnail={projectThumb}>
                            Project Description
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="project" title="Project 2" thumbnail={projectThumb}>
                            Project Description
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={[1,1,2]} gap={6} >
                <Section delay={0.3}>
                        <WorkGridItem id="project" title="Collab" thumbnail={projectThumb}>
                            Collab Description
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.4}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Old Works
                    </Heading>
                </Section>

                <SimpleGrid columns={[1,1,2]} gap={6} >
                <Section delay={0.5}>
                        <WorkGridItem id="project" title="Old project" thumbnail={projectThumb}>
                            Old project Description
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
export { getServerSideProps } from '../components/chackra'