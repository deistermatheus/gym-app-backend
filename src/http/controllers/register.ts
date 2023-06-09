import { FastifyRequest, FastifyReply } from 'fastify';

import { z } from 'zod';
import { RegisterUseCase } from '@/use-cases/register';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists';

export async function register(request: FastifyRequest, reply: FastifyReply){
    const requestBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    });

    const { email, name, password }= requestBodySchema.parse(request.body);

    const prismaUsersRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCase(prismaUsersRepository);

    try {
        await registerUseCase.execute({name, email, password});
    }catch(error){
        if(error instanceof UserAlreadyExistsError){
            return reply.status(409).send();
        }

        throw error;
    }
   
    return reply.status(201).send();
}