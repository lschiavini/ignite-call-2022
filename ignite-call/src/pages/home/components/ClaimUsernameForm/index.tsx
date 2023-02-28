import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { ClaimUsernameFormData } from '@/src/pages/home/components/ClaimUsernameForm/schema'

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        {...register('username')}
        placeholder="your-username"
      />
      <Button size="sm" type="submit">
        Reserve
        <ArrowRight />
      </Button>
    </Form>
  )
}
