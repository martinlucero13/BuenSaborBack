export const apiOptions = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    cors: process.env.CORS || true,
    baseUrl: process.env.BASE_URL || '/'
}