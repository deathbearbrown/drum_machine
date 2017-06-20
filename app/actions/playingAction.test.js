import { updatePlaying } from './playingAction.js';

var updatePlayingAction = updatePlaying(false);

const expectedAction = {
    type: 'UPDATE_PLAYING',
    playing: false
  };

test('Playing actions: updatePlaying creates an action object', () => {
  expect(updatePlayingAction).toMatchObject(expectedAction);
});
