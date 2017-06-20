import rootReducer, {getKicks, getOpenHats} from '../index';

const defaultState = {
    'unique_id_1' : {
      kick: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      open_hat: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      closed_hat: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      snare: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
    },
    'unique_id_2' : {
      kick: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      open_hat: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      closed_hat: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      snare: [ 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
    },
    'unique_id_3' : {
      kick: [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      open_hat: [ 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      closed_hat: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      snare: [ 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
    }
  };

describe('Sequence Reducer',() => {
  it('Updating a kick at index 5 from 0 to 1', () => {
    const action = {
      type: 'UPDATE_SEQUENCE',
      sequence: 'unique_id_3',
      beat_type: 'kick',
      index: 5,
      status: true
    };
    let state = rootReducer({sequences: defaultState}, action)
    expect(getKicks(state, 'unique_id_3')[5]).toEqual(1);
  });

  it('Updating a kick at index 5 from 0 to 1 if passed dinosaur', () => {
    const action = {
      type: 'UPDATE_SEQUENCE',
      sequence: 'unique_id_3',
      beat_type: 'kick',
      index: 5,
      status: 'dinosaur'
    };
    let state = rootReducer({sequences: defaultState}, action)
    expect(getKicks(state, 'unique_id_3')[5]).toEqual(1);
  });
  it('Updating a kick at index 5 from false to true doesn\'t effect other arrays', () => {
    const openHats = defaultState['unique_id_3'].open_hat;
    const action = {
      type: 'UPDATE_SEQUENCE',
      sequence: 'unique_id_3',
      beat_type: 'kick',
      index: 5,
      status: 'dinosaur'
    };
    let state = rootReducer({sequences: defaultState}, action)
    expect(getOpenHats(state, 'unique_id_3')).toEqual(openHats);
  });
});
