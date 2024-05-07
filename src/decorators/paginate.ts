import { createParamDecorator } from "routing-controllers";

export class Pagination {
    pageNumber: number;
    pageSize: number;
    private count: number;
    private totalPages: number;
    get skip() {
        return this.pageSize * (this.pageNumber - 1);
    }
    setCount(value: number) {
        this.count = value;
        this.totalPages = Math.ceil(this.count / this.pageSize);
    }
}


export function Paginate(options?: { required?: boolean }) {
    return createParamDecorator({
        required: options && options.required ? true : false,
        value: action => {
            const { pageSize = 100, pageNumber = 1 } = action.request.query;
            const pagination = new Pagination();
            pagination.pageNumber = Number(pageNumber);
            pagination.pageSize = Number(pageSize);
            action.request.pagination = () => pagination;
            return pagination;
        }
    });
}