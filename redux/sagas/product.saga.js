import { put, takeLatest, all } from 'redux-saga/effects';

import { PRODUCT_ACTION, SUCCESS, FAILURE, REQUEST } from '../constants';

function fakeProductData() {
  return [
    {
      id: 1,
      name: 'iPhone 12'
    },
    {
      id: 2,
      name: 'iPhone 12 Pro'
    }
  ];
}

function* getProductListSaga() {
  try {
    const result = yield fakeProductData();
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_LIST),
      payload: {
        data: result,
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(PRODUCT_ACTION.GET_LIST), error: 'Lỗi data' });
  }
}

export default function* masterDataSaga() {
  yield all([
    takeLatest(REQUEST(PRODUCT_ACTION.GET_LIST), getProductListSaga),
  ]);
}
