import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from '@/src/pages/home/components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Easy Scheduling | Ignite"
        description="Connect your calendar and let people schedule a time with you."
      />
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
            style={{ borderRadius: '0.5rem' }}
          />
        </Preview>
      </Container>
    </>
  )
}
