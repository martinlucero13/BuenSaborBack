import {Body, Get, JsonController, Param, Post } from "routing-controllers";
import LoginService from "../services/loginService";

@JsonController('/login')
export class login {
    service: LoginService;
    constructor(){
        this.service = new LoginService();
    }

    @Post("/")
    async loginInit (@Body() body: any){
        return this.service.postForLogin(body);
    }
}
