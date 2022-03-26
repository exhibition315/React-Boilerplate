const createTypes = (type) => ({
  INDEX: type,
  INIT: `${type}_INIT`,
  REQUESTED: `${type}_REQUESTED`,
  SUCCEEDED: `${type}_SUCCEEDED`,
  FAILED: `${type}_FAILED`,
  CANCEL: `${type}_CANCEL`,
});

const createActions = (type) => {
  const types = createTypes(type);
  return {
    TYPE: types,
    INDEX: (payload) => ({ type, payload }),
    INIT: (payload) => ({ type: types.INIT, payload }),
    REQUESTED: (payload) => ({ type: types.REQUESTED, payload }),
    SUCCEEDED: (payload) => ({ type: types.SUCCEEDED, payload }),
    FAILED: (payload) => ({ type: types.FAILED, payload }),
    CANCEL: (payload) => ({ type: types.CANCEL, payload }),
  };
};

const createAction = (type) => ({
  TYPE: type,
  ACTION: (payload) => ({ type, payload }),
});

export { createTypes, createActions, createAction };
