export const authOptions = {
    activeDirectory: {
        portal: {
            url: process.env.AD_PORTAL_URL,
            dn: process.env.AD_PORTAL_DN,
        },
        fecovita: {
            url: process.env.AD_FECO_URL,
            dn: process.env.AD_FECO_DN,
        }
    }
}