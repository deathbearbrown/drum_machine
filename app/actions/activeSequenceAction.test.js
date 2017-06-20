import { updateActiveSequence } from './activeSequenceAction.js';

var updateActiveSequenceAction = updateActiveSequence('bananas');

const expectedAction = {
    type: 'UPDATE_ACTIVE_SEQUENCE',
    sequenceId: 'bananas'
  };

test('Active Sequence actions: updateActiveSequence creates an action object', () => {
  expect(updateActiveSequenceAction).toMatchObject(expectedAction);
});
