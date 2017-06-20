import rootReducer, { isPlaying } from '../index';

describe('Playing Reducer', ()=> {
  it('Updates to true if you pass it something truthy', () => {
    const action = {
      type: 'UPDATE_PLAYING',
      playing: 'bananas'
    };
    let state = rootReducer({playing: false}, action);
    expect(isPlaying(state)).toEqual(true);
  });

  it('Updates to false if you pass it something falsy', () => {
    const action = {
      type: 'UPDATE_PLAYING',
      playing: 0
    };
    let state = rootReducer({playing: true}, action);
    expect(isPlaying(state)).toEqual(false);
  });
});
