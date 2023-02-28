import { z } from 'zod'

const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export type { ClaimUsernameFormData }
export default ClaimUsernameFormSchema
