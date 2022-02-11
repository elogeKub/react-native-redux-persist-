import {AddData} from './action';

let initialState = {
  list: {
    nom: '',
    surname: '',
  },
};

const ReduceSecond = (state = initialState, action) => {
  switch (action.type) {
    case AddData:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default ReduceSecond;
