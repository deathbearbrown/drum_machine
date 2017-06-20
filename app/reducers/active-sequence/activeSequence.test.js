import rootReducer, { activeSequence } from '../index';

const defaultState = {
  active_sequence: null
};

describe('Active Sequence Reducer', ()=> {
  it('Updates to value passed', () => {
    const action = {
      type: 'UPDATE_ACTIVE_SEQUENCE',
      sequenceId: 'bananas'
    };
    let state = rootReducer(defaultState, action);
    expect(activeSequence(state)).toEqual('bananas');
  });
});
