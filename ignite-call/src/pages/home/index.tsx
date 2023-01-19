import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading>Easy Scheduling</Heading>
        <Text>
          Connect your calendar and allow people to schedule time on your
          available spots.
        </Text>
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          alt={'calendar image'}
          priority
        />
      </Preview>
    </Container>
  )
}
