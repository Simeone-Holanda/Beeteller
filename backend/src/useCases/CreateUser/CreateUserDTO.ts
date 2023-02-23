import { z } from 'zod'

export const createUserSchema = z.object({
    username: z.string().min(4, { message: 'O campo username deve conter mais de 4 caracteres. ' }),
    email: z.string().email("Por favor, insira um email válido"),
    password: z.string().min(6, { message: 'O campo senha deve conter 6 ou mais caracteres. ' })
})

export type CreateUserDTO = z.infer<typeof createUserSchema>
