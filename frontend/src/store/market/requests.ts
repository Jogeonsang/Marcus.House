import api, {ApiResponse} from 'lib/api'

import {IProduct} from "types/product";

export const getProducts = async (category: string | number, offset: number, limit:number) => {
    const { data } = await api.request<ApiResponse<IProduct[]>>({
        method:'get',
        url: `/products?categoryId=${category}&offset=${offset}&limit=${limit}`
    });

    return data.data
}
