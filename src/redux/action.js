import {CREATE_MATCH, REMOVE_MATCH, UPDATE_MATCH} from './constants';

export function createMatch(item) {
  return {
    type: CREATE_MATCH,
    data: item,
  };
}

export function removeMatch(item) {
  return {
    type: REMOVE_MATCH,
    data: item,
  };
}

export function updateMatch(item) {
  console.warn('actionnnnn', item);
  return {
    type: UPDATE_MATCH,
    data: item,
  };
}
