import { updateBPM} from './bpmAction.js';

var updateBPMAction = updateBPM(123);

const expectedAction = {
    type: 'UPDATE_BPM',
    bpm: 123
  };

test('BPM actions: updateBPM creates an action object', () => {
  expect(updateBPMAction).toMatchObject(expectedAction);
});
