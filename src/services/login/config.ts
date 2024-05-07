export const config = {
    fecovitaAPiUrl: process.env.FECO_API_URL || 'http://localhost:3000',
    requestTimeout: Number(process.env.REQUEST_TIMEOUT) || 90000,
    ldap: process.env.FECO_AD || 'ldap://localhost'
}
