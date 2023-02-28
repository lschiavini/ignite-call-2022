import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Form, FormError, Header } from './styles'
import {
  RegisterFormData,
  registerFormSchema,
} from '@/src/pages/register/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call!</Heading>
        <Text>
          {`We need a couple of info to get you settled. Don't worry,
          you'll be able to edit them later.`}
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Username</Text>
          <TextInput
            {...register('username')}
            prefix="ignite.com/"
            placeholder="your-username"
          />
          {errors.username && (
            <FormError size={'sm'}>{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size="sm">Full Name</Text>
          <TextInput {...register('name')} placeholder="Your Name" />

          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
