import { call, takeLatest, put } from 'redux-saga/effects'
import api from '../../common/rest/api';
import { setProductsAction } from '../actions/product.action';
import { GET_PRODUCTS } from '../types/product.types';


function* getProductsWorker() {
    try {
        const res = yield call(api.get, 'front/slides')

        yield put(setProductsAction(res.data.data))
    } catch (err) {
        console.log(err);
    }
}

export function* getProductsWatcher() {
    yield takeLatest(GET_PRODUCTS, getProductsWorker)
}