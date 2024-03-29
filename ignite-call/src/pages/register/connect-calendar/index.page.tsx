import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()
  const hasAuthError = !!router.query.error
  const isSignedId = session.status === 'authenticated'

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <>
      <NextSeo title="Connect your Calendar | Ignite" noindex />
      <Container>
        <Header>
          <Heading as="strong">Connect your Calendar</Heading>
          <Text>
            Connect to automatically verify the unavailable slots and new events
            as they are scheduled.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isSignedId ? (
              <Button size="sm" disabled>
                Connected
                <Check />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleConnectCalendar}
              >
                Connect
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Failed to connect to Google, verify if you have enabled the
              permissions to access Google Calendar.
            </AuthError>
          )}

          <Button
            onClick={handleNavigateToNextStep}
            type="submit"
            disabled={!isSignedId}
          >
            Next Step
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
