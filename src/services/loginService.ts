import { error } from 'console';
import jwt from 'jsonwebtoken'
import FecovitaAPIService from '../services/login/FecovitaAPI'

const apiFeco = new FecovitaAPIService();
const secretKey = process.env.JWT_SECRET || "secret"

export default class LoginService {

    constructor() {
    }

    async getUserCol(username: string) {
        const { data } = await apiFeco.get(`/usersCol/portal/${username}`)
        return data
    }

    async postForLogin(body: any) {
        const { username, password, pagina } = body;

        if (pagina === 'Colaboradores') {
            try {
                const data = await this.getUserCol(username)

                if (data !== null) {
                    if (data[0].USCONTRA !== password) {
                        return null
                    }
                    
                    const token = jwt.sign({ user: data }, secretKey, { expiresIn: '12h' });
                    return (
                        { token }
                    )
                } else {
                    console.log('No se pudo iniciar sesion en el servidor')
                    return error
                }
            } catch (error) {
                console.log(error)
                return (error)
            }
        }
    }
}
