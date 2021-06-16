import { PRODUCT_ACTION, SUCCESS, FAILURE, REQUEST } from '../constants';

const initialState = {
  productList: {
    data: [],
    load: false,
    error: null,
  },
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(PRODUCT_ACTION.GET_LIST): {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        },
      }
    }
    case SUCCESS(PRODUCT_ACTION.GET_LIST): {
      const { data } = action.payload;
      return {
        ...state,
        productList: {
          ...state.productList,
          data,
          load: false,
        },
      }
    }
    case SUCCESS(PRODUCT_ACTION.GET_LIST): {
      const { error } = action.payload;
      return {
        ...state,
        productList: {
          ...state.productList,
          load: false,
          error,
        },
      }
    }
    default:
      return state
  }
}

export default productReducer;