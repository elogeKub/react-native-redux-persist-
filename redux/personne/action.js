export const ADD_DATA_TO_LOCAL = 'ADD_DATA_TO_LOCAL';

export const add_data_personne = dataobject => dispatch => {
  dispatch({
    type: ADD_DATA_TO_LOCAL,
    payload: dataobject,
  });
};
