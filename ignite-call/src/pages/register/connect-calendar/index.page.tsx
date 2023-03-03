import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  // async function handleRegister() {

  // }

  return (
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
          <Button variant="secondary" size="sm">
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Next Step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
