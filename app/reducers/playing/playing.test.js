import rootReducer, { isPlaying, getBeatIndex } from '../index';

const defaultState = {
  playing: {
    on: false,
    beat_index: 0,
    interval: null
  }
};

describe('Playing Reducer', ()=> {
  it('When Playing starts, on updates to true', () => {
    const action = {
      type: 'START_PLAYING',
    };
    let state = rootReducer(defaultState, action);
    expect(isPlaying(state)).toEqual(true);
  });

  it('When Playing starts, the interval is no longer null', () => {
    const action = {
      type: 'START_PLAYING',
    };
    let state = rootReducer(defaultState, action);
    expect(getBeatIndex(state)).not.toBeNull();
  });

  it('When Playing stops, on updates to false', () => {
    const action = {
      type: 'STOP_PLAYING',
    };
    let state = rootReducer(defaultState, action);
    expect(isPlaying(state)).toEqual(false);
  });

  it('When Playing stops, interval is null', () => {
    // middleware is not hooked up, so beat index should remain the same
    const action = {
      type: 'STOP_PLAYING',
    };
    let state = rootReducer({
        playing: {
          on: true,
          beat_index: 12,
          interval: 4
        }
      }, action);

    expect(state.playing.interval).toBeNull();
  });
});
