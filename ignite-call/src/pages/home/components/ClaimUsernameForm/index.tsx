import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import {
  ClaimUsernameFormData,
  ClaimUsernameFormSchema,
} from '@/src/pages/home/components/ClaimUsernameForm/schema'
import { zodResolver } from '@hookform/resolvers/zod'

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  console.log({ errors })
  return (
    <>
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
      <FormAnnotation>
        <Text size={'sm'}>
          {errors.username
            ? errors.username.message
            : 'Type in the desired username'}
        </Text>
      </FormAnnotation>
    </>
  )
}
