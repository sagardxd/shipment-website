import { z } from 'zod'
import validator from 'validator';

export const phoneNumberSchema =  z.object({
      phoneNumber: z.string().min(10, { message: 'Must be a valid mobile number' }).max(14, { message: 'Must be a valid mobile number' })
})



export const otpSchema = z.object({
    phoneNumber: z.string().min(10, { message: 'Must be a valid mobile number' }).max(14, { message: 'Must be a valid mobile number' }),
    otpCode: z.string().min(4, { message: 'otp length error' }).max(6, { message: 'otp length error' }),
});