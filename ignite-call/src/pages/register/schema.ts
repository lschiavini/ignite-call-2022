import { z } from 'zod'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'username needs to have at least 3 letters.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Must consist of letters and /or -',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'User name must have at least 3 letters.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>
export { registerFormSchema }
export type { RegisterFormData }
