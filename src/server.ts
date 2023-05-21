import { env } from './env';
import { app } from './app';

app.listen({
    port: env.PORT,
    host: '0.0.0.0' // required for dev frontend connection
}).then(() => console.log('[App] http server is up!'));