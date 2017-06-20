import rootReducer, { getBPM } from '../index';

const defaultState = {
  bpm: 128
};

describe('BPM Reducer', ()=> {
  it('Update to value passed', () => {
    const action = {
      type: 'UPDATE_BPM',
      bpm: 9000
    };
    let state = rootReducer(defaultState, action);
    expect(getBPM(state)).toEqual(9000);
  });
});
