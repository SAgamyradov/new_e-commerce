import { all } from 'redux-saga/effects'
import { getProductsWatcher } from './product.saga'

export function* rootSaga() {
    yield all([
        getProductsWatcher(),
    ])
}