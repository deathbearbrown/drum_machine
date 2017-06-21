import { startPlaying, stopPlaying } from './playingAction.js';

describe('Playing Actions', ()=> {
  it('startPlaying creates an action object', () => {
    const startPlayingAction = startPlaying();

    let expectedAction = {
      type: 'START_PLAYING'
    };
    expect(startPlayingAction).toMatchObject(expectedAction);
  });
  it('stopPlaying creates an action object', () => {
    const stopPlayingAction = stopPlaying();

    let expectedAction = {
      type: 'STOP_PLAYING'
    };
    expect(stopPlayingAction).toMatchObject(expectedAction);
  });
});
