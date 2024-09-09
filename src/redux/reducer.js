import {CREATE_MATCH, REMOVE_MATCH, UPDATE_MATCH} from './constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MATCH:
      return [...state, action.data];
    case REMOVE_MATCH:
      return state.filter(item => {
        return (
          item.matchDay !== action.data.matchDay ||
          item.matchTime !== action.data.matchTime
        );
      });
    case UPDATE_MATCH:
      const filteredState = state.filter(item => {
        return (
          item.matchDay !== action.data.data.matchDay ||
          item.matchTime !== action.data.data.matchTime
        );
      });
      return [...filteredState, action.data.finalData];
    default:
      return state;
  }
};