import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import noImageThumb from '../public/images/works/no-image.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="finstagram" title="Finstagram" thumbnail={noImageThumb}>
                            Instagram clone
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="hsl-board" title="HSL Board" thumbnail={noImageThumb}>
                            Displays bus schedules from specific stops in HSL fashion
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="whee" title="Whee Online Store" thumbnail={noImageThumb}>
                            Mock for online store
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem id="rng-steam-game" title="Random Steam Game" thumbnail={noImageThumb}>
                            Roll a dice for what to play from your Steam Library
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem id="weather-react" title="Weather React" thumbnail={noImageThumb}>
                            Simple weather forecast app
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.4}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Game Development
                    </Heading>
                </Section>

                <SimpleGrid columns={[1,1,2]} gap={6} >
                    <Section delay={0.5}>
                        <WorkGridItem id="tictactoe" title="Tic Tac Toe" thumbnail={noImageThumb}>
                            Simple game of Tic Tac Toe
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id="opex" title="Opex" thumbnail={noImageThumb}>
                             A mobile game made for a friend&apos;s birthday
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id="redpill" title="Red Pill" thumbnail={noImageThumb}>
                            Mobile game / My Thesis
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
                        <WorkGridItem id="kanaliiga-poll" title="Kanaliiga Poll" thumbnail={noImageThumb}>
                            Poll styles for Kanaliiga&apos;s Rocket League streams
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="dst" title="DST Mod" thumbnail={noImageThumb}>
                            New custom character for Don&apos;t Starve Together
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
export { getServerSideProps } from '../components/chackra'