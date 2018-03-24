/*
 *
 * Game actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_CURRENT_CONTEXT,
  LOAD_FROM_LOCAL_STORAGE,
  CLEAR_LOCAL_STORAGE,
} from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  }
}

export function setCurrentContext(stitchName) {
  return {
    type: SET_CURRENT_CONTEXT,
    stitchName
  }
}

export function loadFromLocalStorage() {
  return {
    type: LOAD_FROM_LOCAL_STORAGE,
  }
}

export function clearLocalStorage() {
  return {
    type: CLEAR_LOCAL_STORAGE,
  }
}
