import {ADD_DATA_TO_LOCAL} from './action';

const initialState = {
  surname: '',
  name: '',
};
const reducerPersonnne = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_TO_LOCAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducerPersonnne;
