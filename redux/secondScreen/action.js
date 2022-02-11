export const AddData = 'AddData';

export const adding_data = data => dispatch => {
  dispatch({
    type: AddData,
    payload: data,
  });
};
