import { z } from 'zod'

export const userSchema = z.object({
    phoneNumber: z.string().min(10, { message: 'Must be a valid mobile number' }).max(14, { message: 'Must be a valid mobile number' }),
    otpCode: z.string().min(4, { message: 'otp length error' }).max(6, { message: 'otp length error' }),
    name: z.string().regex(/[a-zA-Z]/).min(1, { message: 'Name must contain at least one letter' }),
    email: z.string().email()
});