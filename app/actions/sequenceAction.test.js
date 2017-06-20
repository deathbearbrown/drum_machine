import { updateSequence } from './sequenceAction.js';

var updateSequenceAction = updateSequence('cool_name', 'snare', 5, false);

const expectedAction = {
  type: 'UPDATE_SEQUENCE',
  sequence: 'cool_name',
  beat_type: 'snare',
  index: 5,
  status: false
};

test('Sequence actions: updateSequence creates an action object', () => {
  expect(updateSequenceAction).toMatchObject(expectedAction);
});
