import {
    GET_PRODUCTS,
    SET_PRODUCTS
} from "../types/product.types"

export const getProductsAction = () => {
    return {
        type: GET_PRODUCTS
    }
}

export const setProductsAction = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}