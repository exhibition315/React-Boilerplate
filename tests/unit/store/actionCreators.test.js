import { createTypes } from '@store/actionCreators';

describe('Test actionCreators', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('Test createActions', () => {
    const type = 'TEST/TYPE';
    expect(createTypes(type)).toEqual({
      INDEX: type,
      INIT: `${type}_INIT`,
      REQUESTED: `${type}_REQUESTED`,
      SUCCEEDED: `${type}_SUCCEEDED`,
      FAILED: `${type}_FAILED`,
      CANCEL: `${type}_CANCEL`,
    });
  });
});
