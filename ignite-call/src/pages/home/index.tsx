import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from '@/src/pages/home/components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Easy Scheduling
        </Heading>
        <Text size={'lg'}>
          Connect your calendar and allow people to schedule time on your
          available spots.
        </Text>
        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400} // highest height
          quality={100}
          alt={'calendar image'}
          priority
        />
      </Preview>
    </Container>
  )
}
