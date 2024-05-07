
import { Interceptor, InterceptorInterface, Action } from "routing-controllers";

@Interceptor()
export class ResponseInterceptor implements InterceptorInterface {

    intercept(action: Action, content: any) {
        let response: any = {
            statusCode: action.response.statusCode,
            message: content?.message,
            data: content || {},
            links: []
        }

        if (action.request.method === "GET") {
            response.pagination = action.request.pagination;
        }

        return response;
    }

}