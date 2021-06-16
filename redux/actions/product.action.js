import { PRODUCT_ACTION, REQUEST } from '../constants';

export function getProductListAction(params) {
  return {
    type: REQUEST(PRODUCT_ACTION.GET_LIST),
    payload: params,
  };
}
