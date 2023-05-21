import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3333)
});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success){
    throw new Error(`Bad environment configuration: ${parsedEnv.error.format()}`);
}

export const env = parsedEnv.data;