import { z } from 'zod'

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'username needs to have at least 3 letters.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Must consist of letters and /or -',
    }),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export type { ClaimUsernameFormData }
export { ClaimUsernameFormSchema }
